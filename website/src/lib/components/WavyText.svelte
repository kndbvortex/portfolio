<script lang="ts" context="module">
  import gsap from 'gsap';
  import SplitText from 'gsap/SplitText';
  gsap.registerPlugin(SplitText);
</script>

<script lang="ts">
  import { onMount } from 'svelte';

  export let text = '';
  export let className = '';

  let element: HTMLSpanElement;
  let hoverTl: gsap.core.Timeline;

  onMount(() => {
    // Create visible/hidden structure
    element.innerHTML = `
      <span class="visible">${text || element.textContent}</span>
      <span class="hidden-text" aria-hidden="true">${text || element.textContent}</span>
    `;

    // Split characters
    const visibleSplit = new SplitText(element.querySelector('.visible'), {
      type: 'chars',
      charsClass: 'char++'
    });

    const hiddenSplit = new SplitText(element.querySelector('.hidden-text'), {
      type: 'chars',
      charsClass: 'char++'
    });

    // Create animation timeline
    hoverTl = gsap.timeline({ paused: true });

    // Animate visible text out (up and skewed) - matches original
    hoverTl.to(visibleSplit.chars, {
      yPercent: -100,
      skewY: 45,
      stagger: 0.05,
      ease: "sine.out"
    });

    // Animate hidden text in - matches original exactly
    hoverTl.fromTo(hiddenSplit.chars,
      {
        yPercent: 10,
        skewY: 45
      },
      {
        yPercent: -100,  // This moves it to replace the visible text
        skewY: 0,
        stagger: 0.05,
        ease: "sine.out"
      },
      "<" // Start at the same time as previous animation
    );

    // Event handlers
    const play = () => hoverTl.play();
    const reverse = () => hoverTl.reverse();

    element.addEventListener('mouseenter', play);
    element.addEventListener('mouseleave', reverse);

    // Cleanup function
    return () => {
      hoverTl.kill();
      visibleSplit.revert();
      hiddenSplit.revert();
      element.removeEventListener('mouseenter', play);
      element.removeEventListener('mouseleave', reverse);
    };
  });
</script>

<style>
  :global(.char) {
    will-change: transform;
    display: inline-block;
  }

  :global(.hidden-text) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
  }
</style>

<span
  bind:this={element}
  class="relative inline-block overflow-hidden cursor-pointer {className}"
  style="perspective: 1000px;"
>
  {#if text}
    {text}
  {:else}
    <slot></slot>
  {/if}
</span>