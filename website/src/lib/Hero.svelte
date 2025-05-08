<script>
    import BlurFade from "./BlurFade.svelte";
    import gsap from "gsap";
    import scrollTrigger from "gsap/ScrollTrigger";
    import {onMount} from "svelte";

    gsap.registerPlugin(scrollTrigger);
    onMount(() => {
        const img = document.getElementById("img-card-hero");
        gsap.set("#img-card-hero", {
            transformStyle: "preserve-3d",
            transformPerspective: 500
        });
        gsap.set("#img-card-hero", {
            transformStyle: "preserve-3d",
            transformOrigin: "50% 50%",
        });

        const timing = 1;

        const tl = gsap.timeline({paused: true});
        tl.to("#img-card-hero", {rotationY: "+=180", duration: timing});
        tl.to("#img-card-hero", {z: 50, duration: timing / 2, yoyo: true, repeat: 1}, 0);

        gsap.utils.toArray("#img-card-hero").forEach(flip => {
            flip.addEventListener("mouseenter", event => tl.play());
            flip.addEventListener("mouseleave", event => tl.reverse());
        });

        if (img) {
            gsap.from(img, {
                scrollTrigger: {
                    trigger: img,
                    start: "top 80%", // when the top of the element hits 80% from top of viewport
                    toggleActions: "play restart none restart" // play on enter, nothing on leave, etc.

                },
                duration: 1,
                rotate: 180,
                y: 100,
                x: -100,
                scale: 0.5,
                yoyo: true,
                repeat: 2,
                opacity: 0,
                ease: "fade.in"
            });
        }
    });
</script>


<div class="sm:px-8 mt-9">
    <div class="mx-auto w-full max-w-7xl lg:px-8">
        <!-- Main container with flex layout -->
        <div class="flex flex-col sm:flex-row-reverse items-center sm:items-start gap-8" id="about">
            <!-- Image container - full width on small screens, left-aligned on medium+ -->
            <div class="w-full sm:w-1/3 px-2.5">
                <BlurFade delay={0.25}>
                    <img
                            id="img-card-hero"
                            alt="Profile"
                            loading="lazy"
                            class="hover:cursor-pointer aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 mx-auto sm:mx-0"
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            src="/images/casque%20vr.jpg"
                            style="color: transparent"/>
                </BlurFade>

            </div>

            <!-- Content container - full width on small screens, right side on medium+ -->
            <div class="w-full sm:w-2/3 px-4 relative">
                <div class="z-50 mx-auto max-w-2xl lg:max-w-5xl">
                    <div class="max-w-2xl font-Inter">
                        <BlurFade delay={0.25}>
                            <h1 class="title-font text-5xl font-bold tracking-tight text-primary sm:text-5xl font-SpaceGrotesk">
                                Hi
                                I'm
                                Durande Kamga, <br> <span class="text-lg md:text-3xl">Developer | Data scientist | XAI
                            Researcher</span>
                            </h1>
                        </BlurFade>
                        <BlurFade delay={0.3}>
                            <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                                Build efficient backend systems
                                and develop AI models with a focus on interpretability. <br/>My research explores
                                Explainable AI (XAI) for time series classification helping machines <br/> decisions we
                                can actually understand.

                                Beyond tech, I'm into anime, running, and gaming. <br/>Let's create something awesome!
                            </p>
                            <div>
                                <!--                                <Particles className="absolute inset-0 z-10 top-[-500px]" quantity={300}/>-->
                                <div class="z-20 mt-6 flex flex-wrap items-center justify-start gap-6 relative">
                                    <a class="group rounded-full m-1 p-1 transition hover:translate-y-[-5px]  hover:translate-x-1 hover:shadow-lg hover:shadow-slate-300 ease-in group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                                       aria-label="Follow on X" target="_blank"
                                       href="https://x.com/DurandeKamga_">
                                        <svg viewBox="0 0 24 24" aria-hidden="true"
                                             class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                                            <path
                                                    d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z">
                                            </path>
                                        </svg>
                                    </a>
                                    <a class="group rounded-full -m-1 p-1 transition hover:translate-y-[-5px]  hover:translate-x-1 hover:shadow-lg hover:shadow-slate-300 ease-in group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                                       aria-label="Follow on GitHub" target="_blank"
                                       href="https://github.com/kndbvortex">
                                        <svg viewBox="0 0 24 24" aria-hidden="true"
                                             class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z">
                                            </path>
                                        </svg>
                                    </a>
                                    <a class="group rounded-full m-1 p-1 transition hover:translate-y-[-5px]  hover:translate-x-1 hover:shadow-lg hover:shadow-slate-300 ease-in group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                                       aria-label="Follow on LinkedIn" target="_blank"
                                       href="https://linkedin.com/in/durande-kamga-3660bb202">
                                        <svg viewBox="0 0 24 24" aria-hidden="true"
                                             class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                                            <path
                                                    d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z">
                                            </path>
                                        </svg>
                                    </a>
                                    <a class="group rounded-full m-1 p-1 transition hover:translate-y-[-5px]  hover:translate-x-1 hover:shadow-lg hover:shadow-slate-300 ease-in group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                                       aria-label="Follow on Upwork" target="_blank"
                                       href="https://www.upwork.com/freelancers/~01ab827b08d6581cf9">
                                        <svg fill="#000000" viewBox="0 0 24 24" role="img"
                                             xmlns="http://www.w3.org/2000/svg"
                                             class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                               stroke-linejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <title>Upwork icon</title>
                                                <path
                                                        d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z">
                                                </path>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </BlurFade>


                    </div>
                </div>
            </div>
        </div>
    </div>
</div>