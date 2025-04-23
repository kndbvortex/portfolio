<script>
    import imageDk from '../assets/images/IMG_1477_copy.jpg'
    import { onMount } from 'svelte';

    function toggleDarkMode() {
        document.documentElement.classList.toggle("dark");
        const isDark = document.documentElement.classList.contains("dark");
        localStorage.setItem("darkMode", isDark ? "dark" : "light");
    }

    function toggleModalMenu() {
        document.getElementById("modal-menu").classList.toggle("hidden");
        document.body.classList.toggle("overflow-hidden");
    }

    // Reactive variable to track visibility
  let isNavVisible = false;

  onMount(() => {
    // Set up the scroll listener after the component is mounted
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Update the visibility state based on scroll position
      isNavVisible = scrollTop > 200;
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component is destroyed
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

</script>

<header class="relative z-40 pt-6 m-5">
    <div class="container mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-5xl">
            <!-- Navigation -->
            <div class="flex items-center justify-end md:justify-between">
                <div class="hidden md:block">
                    <!-- You can add something here if needed -->
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden">
                    <button onclick={toggleModalMenu}
                            class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-md font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                            type="button" aria-expanded="false">
                        Menu
                        <svg viewBox="0 0 8 6" aria-hidden="true"
                             class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
                            <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>

                <div class="block md:hidden m-5">
                    <!-- Mobile spacer -->
                </div>

                <!-- Desktop Navigation (original) -->
                <nav class="hidden md:block">
                    <ul
                            class="flex rounded-full bg-white/90 px-3 font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        <li><a class="relative block px-3 py-2 transition hover:text-cyan-500 dark:hover:text-cyan-400"
                               href="#about">About</a></li>
                        <li><a class="relative block px-3 py-2 transition hover:text-cyan-500 dark:hover:text-cyan-400"
                               href="#resume">Resume</a></li>
                        <li><a class="relative block px-3 py-2 transition hover:text-cyan-500 dark:hover:text-cyan-400"
                               href="#projects">Projects</a></li>
                        <li><a class="relative block px-3 py-2 transition hover:text-cyan-500 dark:hover:text-cyan-400"
                               href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <!-- Dark Mode Toggle -->
                <button onclick={toggleDarkMode} type="button" aria-label="Toggle dark mode"
                        class="rounded-full bg-white/90 p-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
                    <!-- Sun icon (shown in dark mode) -->
                    <svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                         aria-hidden="true"
                         class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden">
                        <path
                                d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z">
                        </path>
                        <path
                                d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                                fill="none"></path>
                    </svg>
                    <!-- Moon icon (shown in light mode) -->
                    <svg viewBox="0 0 24 24" aria-hidden="true"
                         class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block">
                        <path
                                d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>
            <div class="m-6 flex justify-start">
                <a href="/" class="block h-16 w-16" aria-label="Home">
                    <img src={imageDk} alt="Avatar"
                         class="h-12 w-12 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 ring-1 ring-zinc-900/5 dark:ring-white/10">
                </a>
            </div>
        </div>
    </div>

    <div id="modal-menu" class="fixed inset-0 z-50 hidden">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80"></div>

        <!-- Modal content -->
        <div
                class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800">
            <div class="flex flex-row-reverse items-center justify-between">
                <button type="button" aria-label="Close menu"
                        class="rounded-md p-1 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300"
                        onclick={toggleModalMenu}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                              d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
                <h2 class="text-sm font-medium text-zinc-600 dark:text-zinc-400">Navigation</h2>
            </div>

            <!-- Navigation links -->
            <nav class="mt-6">
                <ul class="divide-y divide-zinc-100 dark:divide-zinc-800/5">
                    <li>
                        <a href="/"
                           class="flex items-center py-3 text-base font-medium text-zinc-800 dark:text-zinc-200 hover:text-cyan-500 dark:hover:text-cyan-400"
                           onclick={toggleModalMenu}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#resume"
                           class="flex items-center py-3 text-base font-medium text-zinc-800 dark:text-zinc-200 hover:text-cyan-500 dark:hover:text-cyan-400"
                           onclick={toggleModalMenu}>
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href="#projects"
                           class="flex items-center py-3 text-base font-medium text-zinc-800 dark:text-zinc-200 hover:text-cyan-500 dark:hover:text-cyan-400"
                           onclick={toggleModalMenu}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact"
                           class="flex items-center py-3 text-base font-medium text-zinc-800 dark:text-zinc-200 hover:text-cyan-500 dark:hover:text-cyan-400"
                           onclick={toggleModalMenu}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

    <!-- Floating navigation that appears when scrolling -->
    <div
            class="fixed top-4 left-0 right-0 z-50 flex justify-center {isNavVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} pointer-events-none transition-opacity duration-300"
            id="floating-nav">
        <nav
                class="flex items-center justify-between rounded-full bg-white/90 px-6 py-2 shadow-lg shadow-zinc-800/10 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
            <!-- Desktop Navigation -->
            <ul class="hidden md:flex font-medium text-zinc-800 dark:text-zinc-200">
                <li><a class="relative block px-3 py-2 transition hover:text-cyan-500 dark:hover:text-cyan-400"
                       href="#about">About</a></li>
                <li><a class="relative block px-3 py-2 transition hover:text-cyan-500 dark:hover:text-cyan-400"
                       href="#resume">Resume</a></li>
                <li><a class="relative block px-3 py-2 transition hover:text-cyan-500 dark:hover:text-cyan-400"
                       href="#projects">Projects</a></li>
                <li><a class="relative block px-3 py-2 transition hover:text-cyan-500 dark:hover:text-cyan-400"
                       href="#contact">Contact</a></li>
            </ul>

            <!-- Mobile menu button -->
            <div class="md:hidden">
                <button onclick={toggleModalMenu}
                        class="flex items-center rounded-full bg-white/90 px-4 py-2 text-md font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                        type="button" aria-expanded="false">
                    Menu
                    <svg viewBox="0 0 8 6" aria-hidden="true"
                         class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
                        <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>

            <!-- Dark Mode Toggle -->
            <button onclick={toggleDarkMode} type="button" aria-label="Toggle dark mode"
                    class="ml-6 rounded-full bg-white/90 p-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
                <!-- Sun/Moon icons -->
                <svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                     aria-hidden="true"
                     class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden">
                    <path
                            d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z">
                    </path>
                    <path
                            d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                            fill="none"></path>
                </svg>
                <svg viewBox="0 0 24 24" aria-hidden="true"
                     class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block">
                    <path
                            d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </nav>
    </div>
</header>