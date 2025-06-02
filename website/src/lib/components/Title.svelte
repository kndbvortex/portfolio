<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    let { content } = $props();
    let textElement;

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Create scroll-triggered animation
        gsap.fromTo(textElement,
            {
                opacity: 0,
                y: 30,
                scale: 0.95
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: textElement,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );
    });
</script>

<div class="text-center my-5">
    <h1
        bind:this={textElement}
        class="text-primary-foreground text-3xl md:text-2xl lg:text-3xl font-normal leading-tight max-w-5xl mx-auto mt-5 md:mt-0"
    >
        {content}
    </h1>
</div>