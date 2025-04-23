<script lang="ts">
    import publications from '../data/publications.json'
    import Button from "$lib/Button.svelte";
    import WordPullUp from "$lib/wordPullUp.svelte";
    import BoxReveal from "$lib/BoxReveal.svelte";
    import Modal from "$lib/Modal.svelte";

    let showModal = $state(false);
    let actualsPublications = publications
    if (!window.location.href.includes('publications')) {
        actualsPublications = publications.slice(0, 3);
    }


    interface Article {
        title: string,
        author: string,
        year: number,
        category: string,
        image: string,
        abstract: string,
        link: string
    }
</script>

{#snippet PublicationComponent(article: Article)}
    <a href={article.link}
       class="block bg-white p-5 mx-3 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-md hover:shadow-slate-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-50">
        <img
                src={article.image}
                class="w-full h-48 object-cover rounded-lg" alt={article.title}
        />
        <h2 class="text-lg font-semibold mt-3">{article.title}</h2>
        <p class="text-sm text-gray-600">{article.author} - {article.year}</p>
        <p class="text-xs text-gray-500 mt-2">{article.abstract.substring(0, 100)}...</p>
        <span class="block mt-3 text-cyan-500 hover:underline">Read More</span>
    </a>
{/snippet}

<section class="max-w-4xl mx-auto px-7 lg:px-0" id="papers">
    <Modal bind:showModal className="w-5/6 rounded-2xl">
        {#snippet header()}
            <h2 class="text-5xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">

                <WordPullUp words="My Publications"/>
            </h2>
        {/snippet}
        <div
                id="grid-container"
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">

            {#each publications as project, i}
                {@render PublicationComponent(project)}
            {/each}
        </div>
    </Modal>
    <BoxReveal boxColor={"gray-200"} duration={0.2}>
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">

            <WordPullUp words="My Publications"/>
        </h2>
    </BoxReveal>
    <BoxReveal boxColor={"gray-200"} duration={0.2}>
        <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400">
            Here are some of recents work as a junior researcher.
        </p>
        <div id="papers-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {#each actualsPublications as article }
                {@render PublicationComponent(article)}
            {/each}
        </div>
        <div class="flex items-center justify-center w-full py-5">
            <Button text="View All My Publications" onclick={()=>{showModal=true}}
                    class="flex items-center justify-center md:w-2/5 w-2/3 py-2"></Button>
        </div>
    </BoxReveal>


</section>