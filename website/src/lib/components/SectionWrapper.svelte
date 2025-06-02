<script>
    import {onMount} from 'svelte';
    import {gsap} from 'gsap';
    import {ScrollTrigger} from 'gsap/ScrollTrigger';
    import {currentSection, scrollProgress} from '../store';

    gsap.registerPlugin(ScrollTrigger);

    export let sections = [];
    let container;
    let sectionElements = [];

    onMount(() => {
        const totalSections = sections.length;

        // Set up scroll trigger for each section
        sections.forEach((_, i) => {
            ScrollTrigger.create({
                trigger: container,
                start: () => `${(i * 100) / totalSections}% top`,
                end: () => `${((i + 1) * 100) / totalSections}% top`,
                onEnter: () => currentSection.set(i),
                onEnterBack: () => currentSection.set(i),
                onUpdate: (self) => {
                    const progress = (self.progress - i) * totalSections;
                    scrollProgress.set(progress);
                },
                scrub: true
            });
        });

        // Set initial height
        gsap.set(container, {height: `${totalSections * 100}vh`});

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });
</script>

<div class="section-container" bind:this={container}>
    {#each sections as section, i (i)}
        <div class="section-wrapper" bind:this={sectionElements[i]}>
            {section}
        </div>
    {/each}
</div>

<style>
    .section-container {
        position: relative;
        width: 100%;
    }

    .section-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        will-change: transform;
    }
</style>




