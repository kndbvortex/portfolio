<script lang="ts">
  import { currentRoute, navigate } from './lib/router';
  import { fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  import HomePage from '$lib/pages/Home.svelte';
  import ProjectsPage from '$lib/pages/Projects.svelte';
  import PublicationPage from '$lib/pages/Publications.svelte';

  type RouteMap = {
    [key: string]: typeof HomePage | typeof ProjectsPage | typeof PublicationPage;
  };

  // Map routes to components
  const routes: RouteMap = {
    '/': HomePage,
    '/publications': PublicationPage,
    '/projects': ProjectsPage
  };

  // Transition configuration
  const pageTransition = {
    duration: 200,
    easing: cubicOut
  };

  // Get the component for the current route
  $: Component = routes[$currentRoute] || HomePage;

  // Handle link clicks to use our navigation system
  function handleLinkClick(e: MouseEvent, path: string) {
    e.preventDefault();
    navigate(path);
  }
</script>

<div class="app-container">

  <main>
    <div class="page-container" in:fade={pageTransition} out:fade={pageTransition}>
      <svelte:component this={Component} />
    </div>
  </main>
</div>
