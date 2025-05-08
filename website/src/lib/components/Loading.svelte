<script lang="ts">
    import {onMount} from 'svelte';
    import gsap from 'gsap';

    let container: HTMLDivElement
    export let animationEnded = false;

    onMount(() => {
        const ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.from("#intro-slider", {
                xPercent: "-100",
                duration: 1.3,
                delay: 0.3,
            })
                .from(["#title-1", "#title-2", "#title-3"], {
                    opacity: 0,
                    y: "+=30",
                    stagger: 0.2,
                })
                .to(["#title-1", "#title-2", "#title-3"], {
                    opacity: 0,
                    y: "-=30",
                    delay: 0.3,
                    stagger: 0.5,
                })
                .to("#intro-slider", {
                    xPercent: "-100",
                    duration: 1.3,
                })
                .to(["#welcome", "#background-black"], {
                    opacity: 0,
                    rotate: 180,
                    duration: 0.5,
                    animation: "power1.inOut",
                    onComplete:()=>{
                        animationEnded=true;
                        document.querySelector("#view-loading")?.classList.add("hidden");

                    }
                });
        }, container);


    });
</script>
<div class="absolute top-0 w-full h-full font-SpaceGrotesk z-50 font-bold m-auto" id="view-loading">
    <div class="relative" bind:this={container}>
        <div
                id="intro-slider"
                class="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-Inter z-10 w-full flex flex-col gap-10 tracking-tight"
        >
            <h1 class="text-5xl md:text-9xl" id="title-1">
                Software Developper
            </h1>
            <h1 class="text-5xl md:text-9xl" id="title-2">
                Data scientist
            </h1>
            <h1 class="text-5xl md:text-9xl" id="title-3">
                Freelancer
            </h1>
        </div>
        <div class="h-screen flex bg-gray-950 justify-center place-items-center" id="background-black">
            <h1
                    id="welcome"
                    class="text-5xl md:text-9xl font-bold text-gray-100"
            >
                Welcome.
            </h1>
        </div>
    </div>
</div>
