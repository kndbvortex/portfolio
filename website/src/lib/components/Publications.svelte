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
    class="block bg-transparent border-1 border-gray-400 shadow-gray-400 shadow-xs p-5 mx-3 rounded-xl hover:shadow-lg transition-all hover:scale-105 hover:shadow-gray-400"
  >
  <div class="relative rounded-lg overflow-hidden">
    <img
      src={article.image}
      class="w-full h-48 object-cover opacity-65"
      alt={article.title}
    />
    <div class="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
    <!-- Extend gradient below image -->
    <div class="absolute -bottom-4 left-0 right-0 h-8 bg-gradient-to-t from-[#020605] to-transparent"></div>
  </div>
    <h2 class="text-lg font-semibold my-3 text-gray-200">{article.title}</h2>
    <p class="text-sm">{article.author} - {article.year}</p>
    <p class="text-xs mt-2">
      {article.abstract.substring(0, 100)}...
    </p>
    <span class="text-sm mt-2 text-primary hover:underline">Read More</span>
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
