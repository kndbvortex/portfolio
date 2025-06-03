<script>
  import Hero from "$lib/components/Hero.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Skill from "$lib/components/Skill.svelte";
  import Title from "$lib/components/Title.svelte";
  import WorkExp from "$lib/components/WorkExp.svelte";
  import Publications from "$lib/components/Publications.svelte";
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import Navbar from "$lib/components/Navbar.svelte";
  import { Toaster } from "$lib/components/ui/sonner/index.js";
  import Footer from "$lib/components/Footer.svelte";
  import Lenis from "lenis";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    const MOBILE_BREAKPOINT = 768;
    document.addEventListener("DOMContentLoaded", () => {
      const lenis = new Lenis();
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
    });

    if (window.innerWidth > MOBILE_BREAKPOINT) {
      function initGenericAnimations() {
        // Pull from left animation - stays visible after first appearance
        gsap.utils.toArray(".pull-left").forEach((element) => {
          // Add overflow hidden when element is not visible
          // gsap.set(element, { overflow: "hidden" });

          gsap.fromTo(
            element,
            {
              autoAlpha: 0,
              xPercent: -30,
            },
            {
              autoAlpha: 1,
              xPercent: 0,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                scrub: true,
                toggleActions: "play reverse play reverse",
                // onEnter: () => gsap.set(element, { overflow: "visible" }),
                // onLeave: () => gsap.set(element, { overflow: "hidden" }),
                // onEnterBack: () => gsap.set(element, { overflow: "visible" }),
                // onLeaveBack: () => gsap.set(element, { overflow: "hidden" }),
              },
            }
          );
        });

        // Pull from right animation - stays visible
        gsap.utils.toArray(".pull-right").forEach((element) => {
          // Ensure parent container has overflow hidden
          const parent = element.parentElement;
          if (parent) {
            gsap.set(parent, { overflowX: "hidden" });
          }

          gsap.fromTo(
            element,
            {
              scale: 0.8,
              xPercent: 50,
            },
            {
              scale: 1,
              xPercent: 0,
              duration: 0.3,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                scrub: true,
                toggleActions: "restart none restart none",
              },
            }
          );
        });

        // Appear from center - stays visible
        gsap.utils.toArray(".appear-center").forEach((element) => {
          // Add overflow hidden when element is not visible
          gsap.set(element, { overflow: "hidden" });

          gsap.fromTo(
            element,
            {
              opacity: 0,
              scale: 0.5,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "back.out(0.5)",
              scrollTrigger: {
                trigger: element,
                toggleActions: "play reverse play none",
                scrub: true,
                onEnter: () => gsap.set(element, { overflow: "visible" }),
                onLeave: () => gsap.set(element, { overflow: "hidden" }),
                onEnterBack: () => gsap.set(element, { overflow: "visible" }),
                onLeaveBack: () => gsap.set(element, { overflow: "hidden" }),
              },
            }
          );
        });
      }

      initGenericAnimations();
    }
  });
</script>

<div class="vertical-line line-20"></div>
<div class="vertical-line line-80"></div>

<div class="h-0">
  <Navbar />
</div>

<div
  class="h-[2px] bg-gradient-to-r from-transparent via-gray-50 to-transparent"
></div>

<main>
  <Hero />

  <Title
    content="Projects that I have worked on, showcasing my skills in web development and data science."
  />
  <div class="appear-center" id="projects">
    <Projects />
  </div>

  <div id="about">
    <Title
      content="I handle everything from design to development – without endless meetings. Saving you time and
                    headaches."
    />
  </div>

  <div class="pull-left">
    <Skill />
  </div>

  <div id="resume">
    <Title content="My career journey and technical expertise" />
    <div class="m-auto flex justify-center items-center gap-4 my-10">
      <a
        class="inline-flex m-auto px-4 py-2 text-xs font-semibold duration-300 ease-out border rounded-full bg-white text-neutral-900 hover:border-neutral-700 border-neutral-900 dark:hover:border-neutral-300 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-neutral-900"
        href="https://drive.google.com/drive/folders/1UULKeZx7lxILy56txQaABuT5XubmjN6K?usp=sharing"
        target="_blank"
        >Download CV
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
        >
          <path
            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </a>
    </div>
  </div>

  <div class="pull-right">
    <WorkExp />
  </div>

  

  <Title content="Scientific publications" />
  <div class="appear-center">
    <Publications />
  </div>
</main>
<Footer />
<Toaster />

<style>
  .vertical-line {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 0.05rem;
    z-index: 1000;
    /*background-color: #9CA3AF;*/
    background: linear-gradient(
      transparent 0%,
      gray 10%,
      gray 50%,
      transparent 90%
    );
  }

  .line-20 {
    left: 7%;
  }

  .line-80 {
    left: 93%;
  }

  @media only screen and (max-width: 600px) {
    .line-20 {
      left: 0;
    }

    .line-80 {
      left: 0;
    }
  }
</style>
