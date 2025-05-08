<!-- Carousel.svelte -->
<script>
    import {onDestroy, onMount} from 'svelte';
    import {fly} from 'svelte/transition';
    import {ArrowLeft, ArrowRight} from 'lucide-svelte';
    import {Badge} from "$lib/components/ui/badge/index.js";

    export let items = [];

    let currentIndex = 0;
    let direction = 'right';
    let isHovered = false;
    let isAnimating = false;
    let thumbnailContainer;
    let carouselContainer;
    let interval;

    // Get adjacent item indices (handles wrapping around)
    $: prevIndex = (currentIndex - 1 + items.length) % items.length;
    $: nextIndex = (currentIndex + 1) % items.length;

    // Track if the carousel is in viewport
    let isInViewport = false;

    onMount(() => {
        // Auto-advance carousel
        // startAutoAdvance();

        // Setup intersection observer to detect if carousel is in viewport
        const observer = new IntersectionObserver(
            (entries) => {
                isInViewport = entries[0].isIntersecting;
                if (isInViewport) {
                    // startAutoAdvance();
                } else {
                    clearInterval(interval);
                }
            },
            {threshold: 0.3}
        );

        if (carouselContainer) {
            observer.observe(carouselContainer);
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            if (carouselContainer) {
                observer.unobserve(carouselContainer);
            }
        };
    });

    onDestroy(() => {
        clearInterval(interval);
        window.removeEventListener('keydown', handleKeyDown);
    });

    function startAutoAdvance() {
        clearInterval(interval);
        interval = setInterval(() => {
            if (!isHovered && !isAnimating && isInViewport) {
                goToNext();
            }
        }, 5000);
    }

    function handleKeyDown(e) {
        const target = e.target;
        const isInputElement = target.tagName === 'INPUT' ||
            target.tagName === 'TEXTAREA' ||
            target.tagName === 'SELECT' ||
            target.isContentEditable;

        if (isInViewport && !isInputElement) {
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    goToPrev();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    goToNext();
                    break;
                case 'Home':
                    e.preventDefault();
                    goToIndex(0);
                    break;
                case 'End':
                    e.preventDefault();
                    goToIndex(items.length - 1);
                    break;
            }
        }
    }

    function goToNext() {
        if (isAnimating) return;
        direction = 'right';
        currentIndex = (currentIndex + 1) % items.length;
        scrollActiveThumbnailIntoView();
        removeFocus();
    }

    function goToPrev() {
        if (isAnimating) return;
        direction = 'left';
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        scrollActiveThumbnailIntoView();
        removeFocus();
    }

    async function goToIndex(targetIndex) {
        if (isAnimating || currentIndex === targetIndex) return;
        isAnimating = true;

        const isForward = (targetIndex > currentIndex) ||
            (currentIndex === items.length - 1 && targetIndex === 0);
        direction = isForward ? 'right' : 'left';

        let distance = Math.abs(targetIndex - currentIndex);
        if (distance > items.length / 2) {
            distance = items.length - distance;
            direction = !isForward ? 'right' : 'left';
        }

        if (distance > 1) {
            const stepDelay = 150;
            const getNextIndex = (idx) => {
                return isForward
                    ? (idx === items.length - 1 ? 0 : idx + 1)
                    : (idx === 0 ? items.length - 1 : idx - 1);
            };

            let currentIdx = currentIndex;
            for (let i = 0; i < distance - 1; i++) {
                currentIdx = getNextIndex(currentIdx);
                currentIndex = currentIdx;
                await new Promise(resolve => setTimeout(resolve, stepDelay));
            }
            currentIndex = targetIndex;
        } else {
            currentIndex = targetIndex;
        }

        scrollActiveThumbnailIntoView();
        removeFocus();

        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }

    function scrollActiveThumbnailIntoView() {
        if (thumbnailContainer) {
            const thumbnails = thumbnailContainer.children;
            if (thumbnails[currentIndex]) {
                thumbnails[currentIndex].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }

    function removeFocus() {
        if (document.activeElement) {
            document.activeElement.blur();
        }
    }

    function handleMouseEnter() {
        isHovered = true;
    }

    function handleMouseLeave() {
        isHovered = false;
    }
</script>

<div
    class="relative w-full max-w-full mx-auto px-2 sm:px-4 md:px-8"
    bind:this={carouselContainer}
    aria-label="Carousel"
    aria-roledescription="carousel"
    role="region"
>
    <!-- ARIA live region for screen readers -->
    <div class="sr-only" aria-live="polite">
        Showing slide {currentIndex + 1} of {items.length}: {items[currentIndex].title}
    </div>

    <!-- Main Carousel Container -->
    <div class="relative h-[350px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden w-full">
        <!-- Previous Item - Hidden on mobile -->
        <div
            class="absolute left-0 w-full md:w-1/3 h-4/5 z-10 hidden sm:block"
            style="transform: translateX(-75%) scale(0.85); opacity: 0.7;"
            aria-hidden="true"
        >
            <div class="h-full bg-gradient-to-r from-blue-500 to-white rounded-xl p-2">
                <div class="h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md">
                    <div class="relative h-full overflow-hidden">
                        <img
                            src={items[prevIndex].image}
                            alt={items[prevIndex].title}
                            class="w-full h-full object-cover"
                        />
                        <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                            <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-white">{items[prevIndex].title}</h3>
                            <p class="text-gray-200 mt-1 text-sm sm:text-base hidden sm:block">{items[prevIndex].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Current Item -->
        <div
            class="relative w-[95%] sm:w-3/4 md:w-2/3 h-[90%] mx-auto z-20 cursor-pointer"
            on:mouseenter={handleMouseEnter}
            on:mouseleave={handleMouseLeave}
            tabindex="0"
            aria-label={`Current slide: ${items[currentIndex].title}`}
        >
            {#key currentIndex}
                <div
                    in:fly={{ x: direction === 'right' ? 500 : -500, duration: 500, opacity: 0.5 }}
                    out:fly={{ x: direction === 'right' ? -500 : 500, duration: 500, opacity: 0.5 }}
                    class="absolute w-full h-full transition-all duration-300"
                    class:scale-105={isHovered}
                >
                    <div class="h-full rounded-3xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
                        <div class="relative h-full overflow-hidden">
                            <img
                                src={items[currentIndex].image}
                                alt={items[currentIndex].title}
                                class="w-full h-full object-cover"
                            />
                            <div class="absolute top-[-10] bottom-0 left-0 right-0 p-8 blur-xl bg-secondary h-[30%]" aria-hidden="true">
                            </div>
                            <div class="absolute top-[-10] bottom-0 left-0 right-0 p-3 sm:p-6 md:p-8 bg-gradient-to-t h-[45%] sm:h-[40%] from-white to-transparent">
                                <h2 class="text-lg sm:text-2xl md:text-3xl font-bold font-Inter text-primary line-clamp-2">{items[currentIndex].title}</h2>
                                <div class="flex items-center justify-between mt-1 sm:mt-4">
                                    <p class="text-primary text-xs sm:text-sm md:text-base line-clamp-2 w-[70%] sm:w-3/4">{items[currentIndex].description}</p>
                                    <a class="p-1 sm:p-2 md:p-3 bg-blue-50 rounded-lg sm:rounded-xl z-20 hover:scale-110 hover:bg-green-100 border border-dashed sm:border-2" href={items[currentIndex].link}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2">
                                        <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                                    </svg>
                                    </a>
                                </div>

                                <div class="flex flex-wrap gap-1 mt-1 sm:mt-2">
                                    {#each items[currentIndex].tools.split(',') as tag}
                                        <Badge text="{tag}" class="mr-1 h-5 sm:h-6 md:h-8 text-[10px] sm:text-xs md:text-sm">
                                        {tag}
                                        </Badge>
                                    {/each}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/key}
        </div>

        <!-- Next Item - Hidden on mobile -->
        <div
            class="absolute right-0 w-full md:w-1/3 h-4/5 z-10 hidden sm:block"
            style="transform: translateX(75%) scale(0.85); opacity: 0.7;"
            aria-hidden="true"
        >
            <div class="h-full bg-gradient-to-r from-blue-500 to-white rounded-xl p-1">
                <div class="h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md">
                    <div class="relative h-full overflow-hidden">
                        <img
                            src={items[nextIndex].image}
                            alt={items[nextIndex].title}
                            class="w-full h-full object-cover rounded-xl"
                        />
                        <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                            <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-white">{items[nextIndex].title}</h3>
                            <p class="text-gray-200 mt-1 text-sm sm:text-base hidden sm:block">{items[nextIndex].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation Buttons -->
        <button
            on:click={goToPrev}
            aria-label="Previous slide"
            class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30
                   bg-secondary/90 hover:bg-secondary text-primary rounded-full
                   w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg
                   transition-all duration-200 hover:scale-110 cursor-pointer opacity-80 hover:opacity-100"
        >
            <ArrowLeft size={16} class="sm:hidden" />
            <ArrowLeft class="hidden sm:block" />
        </button>
        <button
            on:click={goToNext}
            aria-label="Next slide"
            class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30
                   bg-secondary/90 hover:bg-secondary text-primary rounded-full
                   w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg
                   transition-all duration-200 hover:scale-110 cursor-pointer opacity-80 hover:opacity-100"
        >
            <ArrowRight size={16} class="sm:hidden" />
            <ArrowRight class="hidden sm:block" />
        </button>
    </div>

    <!-- Scrollable Thumbnail Strip -->
    <div class="mt-2 sm:mt-4 md:mt-8 m-auto">
        <div
            bind:this={thumbnailContainer}
            class="flex gap-1 sm:gap-2 md:gap-4 overflow-x-auto pb-2 sm:pb-4 scrollbar-hide snap-x snap-mandatory px-1"
            role="tablist"
            aria-label="Carousel navigation"
        >
            {#each items as item, index}
                <button
                    on:click={() => goToIndex(index)}
                    class={`flex-shrink-0 w-16 sm:w-24 md:w-40 h-12 sm:h-16 md:h-24 rounded-md sm:rounded-lg cursor-pointer snap-start
                           ${currentIndex === index ?
                            'border border-primary sm:border-2 bg-primary shadow-md sm:shadow-xl shadow-secondary' :
                            'border-dashed opacity-80 hover:opacity-100'}
                           transition-all duration-300`}
                    role="tab"
                    aria-selected={currentIndex === index}
                    aria-label={`Slide ${index + 1}: ${item.title}`}
                    tabindex={currentIndex === index ? '0' : '-1'}
                >
                    <div class="w-full h-full rounded-md sm:rounded-lg overflow-hidden relative">
                        <img src={item.image} alt={item.title} class="w-full h-full object-cover"/>
                        <div class="absolute inset-0 bg-black/40 flex flex-col justify-end p-1 sm:p-2">
                            <h4 class="font-medium text-[10px] sm:text-xs md:text-sm text-white truncate">{item.title}</h4>
                        </div>
                    </div>
                </button>
            {/each}
        </div>
    </div>
</div>