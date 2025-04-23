<script lang="ts">
  import Header from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
  import Publications from "$lib/Publications.svelte";
  import Prev from "$lib/Prev.svelte";
</script>

<Prev title="My Publications"/>

<main class="flex-auto dark:text-gray-400">
  <Publications />
</main>
<Footer />

<style>
</style>
