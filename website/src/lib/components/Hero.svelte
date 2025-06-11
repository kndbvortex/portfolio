<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import Model3d from "$lib/components/Model3d.svelte";
  import { MessageSquareMore, Twitter, MapPin } from "lucide-svelte";
  import * as Avatar from "$lib/components/ui/avatar";
  import * as Drawer from "$lib/components/ui/drawer";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import Contact from "$lib/components/Contact.svelte";
  import { onMount } from "svelte";
  import gsap from "gsap";
  import SplitText from "gsap/SplitText";
  import WavyText from "$lib/components/WavyText.svelte";
  import Image from "$lib/components/Image.svelte";

  // Register GSAP plugins
  gsap.registerPlugin(SplitText);
  let textElement: HTMLHeadingElement;
  let role: HTMLHeadingElement;

  onMount(() => {

    gsap.from("#location", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      },
      opacity:0
    })
        // Animate my name
    const split = new SplitText(textElement, {
      type: "words, chars",
    });

    gsap.set("#img", {
      transformStyle: "preserve-3d",
      transformPerspective: 500,
    });
    gsap.set("#img", {
      transformStyle: "preserve-3d",
      transformOrigin: "50% 50%",
    });

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    const timing = 1;
    let v = getRandomInt(360);
    const tl_img = gsap.timeline({ paused: true });

    tl_img.to("#img", {
      rotationY: `+=${v}`,
      scale: 1.2,
      rotateX: `+=${180-v}`,
      duration: timing,
    });
    tl_img.to(
      "#img",
      { z: 50, duration: timing / 2, yoyo: true, repeat: 2 },
      0
    );

    gsap.utils.toArray("#img").forEach((flip) => {
      flip.addEventListener("mouseenter", (event) => {
        tl_img.play();
      });
      flip.addEventListener("mouseleave", (event) => tl_img.reverse());
    });

    let tl;
    tl = gsap.timeline();

    tl.from(split.chars, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.015,
      ease: "expo.out",
    })
      .from(
        ".small-description",
        {
          duration: 1.2,
          autoAlpha: 0,
          y: 50,
          rotationX: 15,
          transformOrigin: "center bottom",
          stagger: 0.08,
          ease: "power4.out",
        },
        "-=0.6"
      )
      .from(
        ".rocher-image",
        {
          autoAlpha: 0,
          y: 150,
          x: -100,
          rotation: 90,
          scale: 0.6,
          filter: "blur(100px)",
        },
        "-=0.8"
      )
      .from(
        ".model-3d",
        {
          autoAlpha: 0,
          y: -150,
          x: -100,
          rotation: -180,
          scale: 0.6,
          filter: "blur(100px)",
        },
        "-=0.8"
      );

    const imgElement = document.getElementById("left_img");

    gsap.from(imgElement, {
      duration: 1,
      opacity: 0,
      scale: 0.9,
      y: 20,
      ease: "power3.out",
    });

    // Hover animations
    let mouseMoveHandler = null;
    let xTo = gsap.quickTo(imgElement, "x", {
      duration: 0.6,
      ease: "power3",
    });
    let yTo = gsap.quickTo(imgElement, "y", {
      duration: 0.6,
      ease: "power3",
    });

    imgElement.addEventListener("mouseenter", () => {
      mouseMoveHandler = (e) => {
        const rect = imgElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate relative movement (adjust multiplier as needed)
        const moveX = (e.clientX - centerX) + 30 ;
        const moveY = (e.clientY - centerY);

        xTo(moveX);
        yTo(moveY);
      };

      imgElement.addEventListener("mousemove", mouseMoveHandler);
    });

    imgElement.addEventListener("mouseleave", () => {
      if (mouseMoveHandler) {
        imgElement.removeEventListener("mousemove", mouseMoveHandler);
        mouseMoveHandler = null;
      }

      // Reset position
      xTo(0);
      yTo(0);
    });

    // Cleanup function
    return () => {
      if (split) split.revert();
    };
  });
</script>

<div
  class="min-h-[100vh] w-full hero-bg text-primary-foreground text-sm relative"
>
  <!-- Main content -->
  <div
    class="flex flex-col items-center justify-center text-center md:px-8 relative z-10"
  >
    <!-- Profile image -->
    <Avatar.Root class="hidden md:block md:mt-50">
      <Avatar.Image src="/images/image_cv.png" alt="Profile" />
      <Avatar.Fallback>DK</Avatar.Fallback>
    </Avatar.Root>
    <div
      class="rocher-image mt-10 md:mt-0 mx-3 md:block md:absolute md:inset-0 md:top-1/3 md:left-20"
    >
      <img
        id="img"
        src="/images/rocher-1.jpg"
        alt="rocher"
        class="hover:cursor-pointer rocher-image rotate-12 md:-rotate-[30deg] h-[30vh] md:h-auto md:w-52 rounded-3xl"
      />
      <div></div>
    </div>

    <h1
      class="text-3xl md:text-4xl font-semibold leading-tight my-6 mx-3 max-w-4xl"
    >
      <span bind:this={textElement}>Hi, I'm Durande Kamga,</span><br />
      <span class="text-xl">
        <WavyText text="Backend developer &" />
        <WavyText text="Data scientist" /></span
      >
    </h1>

    <p class="text-md mb-2 -mt-2 font-semibold p-3 opacity-90 flex" id="location">
      <MapPin class="h-4 inline m-auto" /> <WavyText text="Based in France" />
    </p>

    <p
      class="text-md leading-relaxed mb-12 max-w-2xl small-description"
    >
      I build efficient backend systems and develop AI models with a focus on
      interpretability.<br />
      Built fast, designed to convert, ready to grow.
    </p>
    

    <div
      class="model-3d hidden md:block absolute inset-0 z-50 top-1/3 left-3/4"
    >
      <img
        src="/images/left.jpg"
        alt="left"
        class="left hover:cursor-pointer rotate-12 md:rotate-[30deg] h-[30vh] md:h-auto md:w-56 rounded-3xl"
        id="left_img"
      />
    </div>

    <div class="hidden md:block z-50">
      <Dialog.Root>
        <Dialog.Trigger>
          <Button
            class="p-5 uppercase z-50 hover:cursor-pointer hover:scale-120 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/80 transition-all"
            icon={MessageSquareMore}
            iconPlacement="left"
          >
            LET'S TALK about your project
          </Button>
        </Dialog.Trigger>
        <Dialog.Content class="sm:max-w-[425px] m-5">
          <Contact />
        </Dialog.Content>
      </Dialog.Root>
    </div>

    <div class="md:hidden z-50">
      <Drawer.Root>
        <Drawer.Trigger>
          <Button
            class="p-5 uppercase z-50 hover:shadow-2xl hover:shadow-primary/80 transition-all"
            icon={MessageSquareMore}
            iconPlacement="left"
          >
            LET'S TALK about your project
          </Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <div class="p-10">
            <Contact />
          </div>
        </Drawer.Content>
      </Drawer.Root>
    </div>

    <div
      class="z-20 mt-6 flex flex-wrap items-center justify-start gap-6 relative"
    >
      <a
        class="group rounded-full m-1 p-1 hover:scale-150 transition-all hover:shadow-2xl hover:drop-shadow-xl/25 ease-in group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
        aria-label="Follow on X"
        target="_blank"
        href="https://x.com/DurandeKamga_"
      >
        <Twitter class="h-10 w-10 bg-transparent" />
      </a>
      •
      <a
        class="group rounded-full -m-1 p-1 hover:scale-150 transition-all hover:shadow-2xl hover:drop-shadow-xl/25 ease-in group-hover:fill-text-gray dark:fill-zinc-400 dark:group-hover:fill-text-gray"
        aria-label="Follow on GitHub"
        target="_blank"
        href="https://github.com/kndbvortex"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="h-10 w-10 fill-primary-foreground transition"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
          >
          </path>
        </svg>
      </a>
      •

      <a
        class="group rounded-full m-1 p-1 hover:scale-150 transition-all hover:shadow-2xl hover:drop-shadow-xl/25 ease-in group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
        aria-label="Follow on LinkedIn"
        target="_blank"
        href="https://linkedin.com/in/durande-kamga-3660bb202"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="h-10 w-10 fill-primary-foreground transition"
        >
          <path
            d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
          >
          </path>
        </svg>
      </a>
      •
      <a
        class="group rounded-full m-1 p-1 hover:scale-150 transition-all hover:shadow-2xl  hover:drop-shadow-xl/25 ease-in group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
        aria-label="Follow on Upwork"
        target="_blank"
        href="https://www.upwork.com/freelancers/~01ab827b08d6581cf9"
      >
        <svg
          fill="#000000"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 fill-primary-foreground transition"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>Upwork icon</title>
            <path
              d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"
            >
            </path>
          </g>
        </svg>
      </a>
    </div>
  </div>
</div>

<style>
  .hero-bg {
    background-image: url("/bg.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
