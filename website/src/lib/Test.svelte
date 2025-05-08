<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { Flip } from 'gsap/Flip';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  // Register plugins
  gsap.registerPlugin(ScrollTrigger, Flip);

  let imgCard;
  let cursorLight;
  let isFlipped = false;

  onMount(() => {
    // Initialize ScrollTrigger animation
    if (imgCard) {
      gsap.from(imgCard, {
        scrollTrigger: {
          trigger: imgCard,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power2.out"
      });

      // Cursor light effect
      document.addEventListener('mousemove', moveLight);
      imgCard.addEventListener('mouseenter', showLight);
      imgCard.addEventListener('mouseleave', hideLight);

      // Click flip effect
      imgCard.addEventListener('click', toggleFlip);
    }

    return () => {
      // Cleanup
      document.removeEventListener('mousemove', moveLight);
      if (imgCard) {
        imgCard.removeEventListener('mouseenter', showLight);
        imgCard.removeEventListener('mouseleave', hideLight);
        imgCard.removeEventListener('click', toggleFlip);
      }
    };
  });

  function moveLight(e) {
    if (cursorLight && imgCard) {
      console.log('Moving light');
      const rect = imgCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(cursorLight, {
        x: x,
        y: y,
        duration: 0.2,
        ease: "power2.out"
      });
    }
  }

  function showLight() {
    if (cursorLight) {
      gsap.to(cursorLight, {
        opacity: 0.8,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }

  function hideLight() {
    if (cursorLight) {
      gsap.to(cursorLight, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }

  function toggleFlip() {
    if (!imgCard) return;

    // Get current state
    const state = Flip.getState(imgCard);

    // Toggle flipped state
    isFlipped = !isFlipped;

    // Apply the flip animation
    Flip.from(state, {
      duration: 1,
      ease: "power2.inOut",
      scale: true,
      absolute: true,
      simple: true,
      onComplete: () => {
        if (isFlipped) {
          gsap.to(imgCard, { zIndex: 10, duration: 0 });
        } else {
          gsap.to(imgCard, { zIndex: 1, duration: 0 });
        }
      }
    });
  }
</script>

<div class="relative w-full h-full perspective-1000">
  <div
    bind:this={imgCard}
    id="img-card-hero"
    class="relative w-full h-full overflow-hidden preserve-3d transition-transform duration-500 ease-in-out shadow-xl rounded-xl"
  >
    <!-- Main Image -->
    <img
      src="/images/IMG_1477_copy.jpg"
      alt="Hero image"
      class="w-full h-full object-cover backface-hidden "
    />

    <!-- Cursor Light Effect -->
    <div
      bind:this={cursorLight}
      class="absolute w-full h-24 pointer-events-none rounded-full z-10"
      style="background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%); transform: translate(-50%, -50%);"
    />

    <!-- Optional Back Content (for flip effect) -->

  </div>

  <div id="div">
  <img src="http://kenwheeler.github.io/slick/img/fonz1.png">
</div>
</div>

<style>
  #div {
  display: inline-block;
  position: relative;
}

#div:after {
  content: "";
  position: absolute;
  top: -30%;
  right: -200%;
  width: 50%;
  height: 200%;
  opacity: 0;
  transform: rotate(30deg);
  background: rgba(255, 255, 255, 0.13);
  background: linear-gradient( to right, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.13) 77%, rgba(255, 255, 255, 0.5) 92%, rgba(255, 255, 255, 0.0) 100%);
  animation: shine 2s 1s;
}

@keyframes shine {
  to {
    opacity: 1;
    right: 210%;
  }
}
</style>