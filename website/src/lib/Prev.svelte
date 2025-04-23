<script>
  import BoxReveal from "./BoxReveal.svelte";
  import WordPullUp from "./wordPullUp.svelte";

  export let label = "Prev";
  export let title = "";
</script>

<div class="fixed bg-white dark:bg-neutral-900 top-0 p-10 left-0 w-full z-50 flex items-center justify-center border-b-2 h-auto ">
    <a
        class="group flex flex-row px-4 py-2 text-md font-semibold duration-300 ease-out border rounded-full bg-neutral-900 dark:bg-white dark:text-neutral-900 text-neutral-100 hover:border-neutral-700 border-neutral-900 dark:hover:border-neutral-300 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-neutral-900 cursor-pointer overflow-hidden align-center w-24 absolute left-8"
        href="/"
    >
        <i class="fa-solid fa-arrow-left mr-2"></i>
        <span>{label}</span>
    </a>

    <h2
        class="text-3xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100 ml-7"
    >
        {title}
    </h2>
</div>
