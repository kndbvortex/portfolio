<script lang="ts">
  // import "./app.css";
  import Header from '$lib/Navbar.svelte'
  import Footer from "$lib/Footer.svelte";
  import Hero from "$lib/Hero.svelte";
  import SectionSep from "$lib/SectionSep.svelte";
  import Projects from "$lib/Projects.svelte";
  import Resume from "$lib/Resume.svelte";
  import Publications from "$lib/Publications.svelte";
  import Contact from "$lib/Contact.svelte";
  import Loading from "$lib/components/Loading.svelte";
  let animationEnded = $state(false);


</script>

<Header/>
<main class="flex-auto dark:text-gray-400">
    <Loading bind:animationEnded={animationEnded} />
    {#if animationEnded}
        <Hero />
        <SectionSep title="Check out my projects"/>
        <Projects visibleallprojectsbtn={true}/>
        <SectionSep title="Check out my resume"/>
        <Resume/>
        <SectionSep title="Check out my papers"/>
        <Publications visibleallpapers={true} />
        <Contact/>
    {/if}

</main>
<Footer />

<style>

</style>

