<script lang="ts">
  import "./app.css";
  import Header from './lib/Navbar.svelte'
  import Footer from "$lib/Footer.svelte";
  import Hero from "$lib/Hero.svelte";
  import SectionSep from "$lib/SectionSep.svelte";
  import Projects from "$lib/Projects.svelte";
  import Resume from "$lib/Resume.svelte";
  import Publications from "$lib/Publications.svelte";
  import Contact from "$lib/Contact.svelte";

</script>


<Header/>
<main class="flex-auto dark:text-gray-400">

    <Hero />
    <SectionSep title="Check out my projects"/>
    <Projects/>
    <SectionSep title="Check out my Resume"/>
    <Resume/>
    <SectionSep title="Check out my papers"/>
    <Publications/>
    <Contact/>

</main>

<Footer />

<style>

</style>

