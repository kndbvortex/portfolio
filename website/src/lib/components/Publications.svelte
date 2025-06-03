<script lang="ts">
  import publications from "../data/publications.json";
  import Button from "$lib/components/ui/button/button.svelte";
  import WordPullUp from "$lib/components/wordPullUp.svelte";

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
    class="block bg-transparent border-1 border-gray-400 shadow-gray-400 shadow-xs  p-5 mx-3 rounded-xl hover:shadow-lg transition-all hover:scale-105 hover:shadow-gray-400"
  >
    <img
      src={article.image}
      class="w-full h-48 object-cover rounded-lg"
      alt={article.title}
    />
    <h2 class="text-lg font-semibold mt-3 text-primary-foreground">{article.title}</h2>
    <p class="text-sm ">{article.author} - {article.year}</p>
    <p class="text-xs  mt-2">
      {article.abstract.substring(0, 100)}...
    </p>
    <span class="block mt-3 text-red-400 hover:underline">Read More</span>
  </a>
{/snippet}

<section class="max-w-4xl mx-auto px-7 lg:px-0" id="papers">
    <p class="my-10 text-base text-primary-foreground">
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
</section>