<script lang="ts">
    import {onMount} from 'svelte';
    import {MessageSquareMore, Phone} from "lucide-svelte";
    import {Button} from "$lib/components/ui/button";
    import Contact from "$lib/components/Contact.svelte";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import * as Drawer from "$lib/components/ui/drawer";
    import Navbar from "$lib/components/Navbar.svelte";


    let links = {
        'about': {'href': '#about', 'label': 'About'},
        'resume': {'href': '#resume', 'label': 'Resume'},
        'projects': {'href': '#projects', 'label': 'Projects'},
    };

    function toggleDarkMode() {
        document.documentElement.classList.toggle("dark");
        const isDark = document.documentElement.classList.contains("dark");
        localStorage.setItem("darkMode", isDark ? "dark" : "light");
    }

    function toggleModalMenu() {
        const modalMenu = document.getElementById("modal-menu");
        if (modalMenu) {
            modalMenu.classList.toggle("hidden");
            document.body.classList.toggle("overflow-hidden");
        }
    }

    function isactive(link: string) {
        const currentPath = window.location.pathname;
        return currentPath === link || currentPath.includes(link.toLowerCase());
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


<header class="relative z-50 text-md">

    <div class="container mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 bg-transparent">

        <div class="mx-auto max-w-5xl">
            <a class="flex items-center space-x-3" href="/">
                <img alt="logo" class="w-10 h-10 rounded-full object-contain" src="/images/logo.png">
            </a>
            <!-- Navigation -->
            <div class="flex items-center justify-end md:justify-between">
                <div class="hidden md:block">
                    <!-- You can add something here if needed -->
                </div>

                <!-- Mobile menu button on top of page -->

                <div class="md:hidden fixed left-4 top-10 text-primary-foreground z-[1000] border rounded-xl">
                    <button aria-expanded="false"
                            class="group flex items-center rounded-full bg-transparent px-4 py-2 text-md font-medium"
                            onclick={toggleModalMenu} type="button">
                        Menu
                        <svg aria-hidden="true"
                             class="ml-3 h-auto w-2 stroke-primary-foreground group-hover:stroke-primary-foreground dark:group-hover:stroke-primary"
                             viewBox="0 0 8 6">
                            <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"></path>
                        </svg>
                    </button>
                </div>

                <div class="block md:hidden m-5">
                    <!-- Mobile spacer -->
                </div>

                <!-- Desktop Navigation (original) -->
                <div class="fixed  backdrop-blur left-[40%]">
                    <nav class="hidden md:block m-auto">
                        <ul
                                class="flex rounded-full px-3 font-medium text-primary-foreground">

                            {#each Object.entries(links) as link}
                                <li>
                                    <a class={`${isactive(link[1].label)? "text-primary underline" : ""} relative block px-3 py-2 transition hover:text-primary dark:hover:text-primary capitalize`}
                                       href={link[1].href}>
                                        {link[1].label}
                                    </a>
                                </li>
                            {/each}
                            {#if isNavVisible}
                                <li>
                                    <Dialog.Root>
                                        <Dialog.Trigger>
                                            <Button
                                                    class="hover:shadow-2xl hover:shadow-primary/80 transition-all"
                                            >
                                                Start a project
                                            </Button>
                                        </Dialog.Trigger
                                        >
                                        <Dialog.Content class="sm:max-w-[425px] m-5">
                                            <Contact/>
                                        </Dialog.Content>
                                    </Dialog.Root>
                                </li>
                            {/if}

                        </ul>
                    </nav>
                </div>
            </div>
            <div class="m-6 flex justify-start">
                <!--                <a href="/" class="block h-16 w-16" aria-label="Home">-->
                <!--                    <img src={imageDk} alt="Avatar"-->
                <!--                         class="h-12 w-12 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 ring-1 ring-zinc-900/5 dark:ring-white/10">-->
                <!--                </a>-->
            </div>
        </div>
    </div>

    <div class="fixed inset-0 z-50 hidden" id="modal-menu">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-foreground backdrop-blur-sm dark:bg-black/80"></div>

        <!-- Modal content -->
        <div
                class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl p-8 ring-1 ring-zinc-900/5  dark:ring-zinc-800">
            <div class="flex flex-row-reverse items-center justify-between">
                <button aria-label="Close menu" class="rounded-md p-1 text-white"
                        onclick={toggleModalMenu}
                        type="button">
                    <svg fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24">
                        <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="1.5">
                        </path>
                    </svg>
                </button>
                <h2 class="text-sm font-medium text-primary-foreground">Navigation</h2>
            </div>

            <!-- Navigation links -->
            <nav class="mt-6">
                <ul class="divide-y divide-zinc-100 ">
                    {#each Object.entries(links) as link}
                        <li>
                            <a href={link[1].href}
                               class={`${isactive(link[1].label)? "text-primary underline" : "text-primary-foreground"} flex items-center py-3 text-base font-medium dark:text-zinc-200 hover:text-primary dark:hover:text-primary capitalize`}
                               onclick={toggleModalMenu}>
                                {link[1].label}
                            </a>
                        </li>
                    {/each}
                    <li>
                        <Drawer.Root>
                            <Drawer.Trigger>
                                <Button
                                        class="mt-2 p-2 uppercase z-50 hover:shadow-2xl hover:shadow-primary/80 transition-all"

                                >
                                    contact
                                </Button>
                            </Drawer.Trigger>
                            <Drawer.Content>
                                <div class="p-10">
                                    <Contact/>
                                </div>

                            </Drawer.Content>
                        </Drawer.Root>

                    </li>

                </ul>
            </nav>
        </div>
    </div>

    <!-- Floating navigation that appears when scrolling -->
<!--    <div-->
<!--            class="fixed top-4 left-0 right-0 flex justify-center opacity-100 pointer-events-none transition-opacity duration-300"-->
<!--            id="floating-nav">-->
<!--        <nav-->
<!--                class="text-white flex items-center justify-between rounded-full  px-6 py-2 shadow-lg backdrop-blur">-->
<!--            &lt;!&ndash; Desktop Navigation &ndash;&gt;-->
<!--            <ul class="hidden md:flex font-medium">-->
<!--                {#each Object.entries(links) as link}-->
<!--                    <li>-->
<!--                        <a class={`${true ? "text-primary underline" : ""} relative block px-3 py-2 hover:text-primary capitalize`}-->
<!--                           href={link[1].href}>-->
<!--                            {link[1].label}-->
<!--                        </a>-->
<!--                    </li>-->
<!--                {/each}-->
<!--                <li>-->
<!--                    <Dialog.Root>-->
<!--                        <Dialog.Trigger>-->
<!--                            <Button-->
<!--                                    class="hover:shadow-2xl hover:shadow-primary/80 transition-all"-->
<!--                            >-->
<!--                                Start a project-->
<!--                            </Button>-->
<!--                        </Dialog.Trigger-->
<!--                        >-->
<!--                        <Dialog.Content class="sm:max-w-[425px] m-5">-->
<!--                            <Contact/>-->
<!--                        </Dialog.Content>-->
<!--                    </Dialog.Root>-->
<!--                </li>-->
<!--            </ul>-->
<!--        </nav>-->
<!--    </div>-->
</header>

<style>

</style>