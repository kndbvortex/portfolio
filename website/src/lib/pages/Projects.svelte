<script lang="ts">
//   import "./app.css";
  import Header from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
  import Projects from "$lib/Projects.svelte";
  import Prev from "$lib/Prev.svelte";
</script>
<Prev title="My projects"/>
<main class="flex-auto dark:text-gray-400">
  <Projects />
</main>
<Footer />

<style>
</style>
