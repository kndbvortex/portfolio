<script lang="ts">
  import {cn} from "$lib/utils";
  import {ArrowRight} from "lucide-svelte";

  let _class: string = "";
  export {_class as class};
  export let text: string = "Button";
  export let href: string | undefined = undefined;
</script>

{#if href}
  <a {href}
     {...$$restProps}
     class={cn(
       "group relative inline-flex w-auto px-4 py-2 mt-5 text-md font-semibold duration-300 ease-out border rounded-full bg-neutral-900 dark:bg-white dark:text-neutral-900 text-neutral-100 hover:border-neutral-700 border-neutral-900 dark:hover:border-neutral-300 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-neutral-900 cursor-pointer overflow-hidden",
       _class
     )}>
    <span class="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
      {text}
    </span>

    <div class="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
      <span>{text}</span>
      <ArrowRight size={14}/>
    </div>

    <div class="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-white dark:bg-neutral-900 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]"></div>
  </a>
{:else}
  <button
     {...$$restProps}
     class={cn(
       "group relative inline-flex w-auto px-4 py-2 mt-5 text-md font-semibold duration-300 ease-out border rounded-full bg-neutral-900 dark:bg-white dark:text-neutral-900 text-neutral-100 hover:border-neutral-700 border-neutral-900 dark:hover:border-neutral-300 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-neutral-900 cursor-pointer overflow-hidden",
       _class
     )}>
    <span class="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
      {text}
    </span>

    <div class="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
      <span>{text}</span>
      <ArrowRight size={14}/>
    </div>

    <div class="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-white dark:bg-neutral-900 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]"></div>
  </button>
{/if}