<script>
    import CV from "$lib/CV.svelte";
    import WordPullUp from "$lib/wordPullUp.svelte";
    import BoxReveal from "$lib/BoxReveal.svelte";
</script>

<section id="resume" class="max-w-4xl mx-auto px-7 lg:px-0" data-aos="zoom-in">

    <div class="flex flex-row justify-between items-center md:items-start mt-8 mb-3">
        <BoxReveal boxColor={"gray-200"} duration={0.2}>
            <h2 class="text-2xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">

                <WordPullUp words="My Resume"/>
            </h2>
        </BoxReveal>
        <a class="inline-flex w-auto px-4 py-2 text-xs font-semibold duration-300 ease-out border rounded-full bg-neutral-900 dark:bg-white dark:text-neutral-900 text-neutral-100 hover:border-neutral-700 border-neutral-900 dark:hover:border-neutral-300 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-neutral-900"
           href="https://drive.google.com/file/d/1aG2MCBAx5sA-HhrU3SetinJ9Ll2__fFZ/view?usp=drive_link">Download
            CV
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"
                 class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50">
                <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"></path>
            </svg>
        </a>
    </div>
    <CV/>

</section>