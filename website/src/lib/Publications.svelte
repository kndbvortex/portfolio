<script lang="ts">
  import publications from "../data/publications.json";
  import Button from "$lib/Button.svelte";
  import WordPullUp from "$lib/wordPullUp.svelte";
  import BoxReveal from "$lib/BoxReveal.svelte";

  let { visibleallpapers = false } = $props();
  let actualsPublications = $state(publications);
  if (!window.location.href.includes("publications")) {
    actualsPublications = publications.slice(0, 3);
  }

  interface Article {
    title: string;
    author: string;
    year: number;
    category: string;
    image: string;
    abstract: string;
    link: string;
  }
</script>

{#snippet PublicationComponent(article: Article)}
  <a
    href={article.link}
    class="block bg-background shadow-foreground/80 p-5 mx-3 rounded-xl shadow-sm transition-transform transform hover:scale-105 hover:shadow-md hover:shadow-slate-400 dark:hover:bg-background/50 dark:text-gray-50"
  >
    <img
      src={article.image}
      class="w-full h-48 object-cover rounded-lg"
      alt={article.title}
    />
    <h2 class="text-md font-semi-bold mt-3 font-Inter">{article.title}</h2>
    <p class="text-sm text-gray-600">{article.author} - {article.year}</p>
    <p class="text-xs text-gray-500 mt-2">
      {article.abstract.substring(0, 100)}...
    </p>
    <span class="font-SpaceGrotesk block mt-3 text-extra-color hover:underline">Read More</span>
  </a>
{/snippet}

<section class="max-w-4xl mx-auto px-7 lg:px-0" id="papers">
  <BoxReveal boxColor={"gray-200"} duration={0.2}>
    <h2
      class="font-SpaceGrotesk font-bold tracking-normal text-5xl m-3 text-center text-primary"
    >
      <WordPullUp words="My Publications" />
    </h2>
  </BoxReveal>
  <BoxReveal boxColor={"gray-200"} duration={0.2}>
    <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400">
      Here are some of recents work as a junior researcher.
    </p>
    <div
      id="papers-container"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
    >
      {#each actualsPublications as article}
        {@render PublicationComponent(article)}
      {/each}
    </div>
    <div class="flex items-center justify-center w-full py-5">
      {#if visibleallpapers}
        <Button
          text="View All My Publications"
          href="/publications"
          class="flex items-center justify-center md:w-2/5 w-2/3 py-2"
        ></Button>
      {/if}
    </div>
  </BoxReveal>
</section>
