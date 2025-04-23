<script lang="ts">
    import projects from '../data/projects.json'
    import BoxReveal from "./BoxReveal.svelte";
    import WordPullUp from './wordPullUp.svelte';
    import Button from "$lib/Button.svelte";
    import Modal from "$lib/Modal.svelte";

    let showModal = $state(false);

    let actualsProjects = projects
    if (!window.location.href.includes('projects')) {
        actualsProjects = projects.slice(0, 3);
    }

    interface Project {
        image: string,
        title: string,
        description: string,
        link: string,
    }


</script>

{#snippet ProjectComponent(project: Project, position: number)}
    <!-- Determine the position-based animation classes -->
    {@const isLeftSide = (window.innerWidth >= 768) ? position % 3 === 0 : position % 2 === 0}
    {@const isRightSide = (window.innerWidth >= 768) ? position % 3 === 2 : position % 2 === 1}

    <a href={project.link}
       class="relative flex flex-col items-stretch duration-500 fade-in-10 p-16 sm:p-3 group h-100 rounded-2xl">
        <span
                class="absolute inset-0 z-20 block w-full h-full duration-300 ease-out
            bg-transparent border border-transparent border-dashed
            group-hover:border group-hover:border-neutral-300 dark:group-hover:border-neutral-600
            group-hover:border-dashed rounded-2xl group-hover:bg-white dark:group-hover:bg-neutral-950
            group-hover:shadow-slate-400 group-hover:shadow-xl
            {isLeftSide ? 'group-hover:-translate-x-6 ' : 'group-hover:-translate-x-2'}
            {isRightSide ? 'group-hover:-translate-x-[-20px]' : 'group-hover:-translate-x-4'}
            group-hover:-translate-y-1">
        </span>

        <span class="absolute inset-0 z-10 block w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600
                   group-hover:scale-100
                   {isLeftSide ? 'md:group-hover:-translate-x-4' : 'md:group-hover:-translate-x-2'}
                   {isRightSide ? 'md:group-hover:translate-x-1' : 'md:group-hover:-translate-x-2'}
                   group-hover:-translate-y-2 group-hover:origin-center"></span>

        <span class="relative z-30 block duration-300 ease-out
                    {isLeftSide ? 'md:group-hover:-translate-x-7' : 'md:group-hover:-translate-x-4'}
                    {isRightSide ? 'md:group-hover:-translate-x-[-20px]' : 'md:group-hover:-translate-x-5'}
                    group-hover:-translate-y-1">
            <span class="block w-full">
                <img src={project.image} class="w-full h-auto rounded-lg aspect-[16/9] object-cover"
                     alt={project.title}>
            </span>
            <span class="block w-full px-1 mt-5 mb-1 sm:mt-3">
                <span class="flex items-center mb-0 text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                    <span>{project.title}</span>
                    <svg class="group-hover:translate-x-0 group-hover:translate-y-0 -rotate-45 translate-y-1 -translate-x-1 w-2.5 h-2.5 stroke-current ml-1 transition-all ease-in-out duration-200 transform"
                         viewBox="0 0 13 15">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"
                           stroke-linejoin="round">
                            <g transform="translate(0.666667, 2.333333)" stroke="currentColor"
                               stroke-width="2.4">
                                <polyline
                                        class="transition-all duration-200 ease-out opacity-0 delay-0 group-hover:opacity-100"
                                        points="5.33333333 0 10.8333333 5.5 5.33333333 11"></polyline>
                                <line class="transition-all duration-200 ease-out transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ml-0"
                                      x1="10.8333333" y1="5.5" x2="0.833333333" y2="5.16666667"></line>
                            </g>
                        </g>
                    </svg>
                </span>
                <span class="text-sm text-neutral-600 dark:text-neutral-400 block truncate">{project.description}</span>
            </span>
        </span>
    </a>
{/snippet}

<section class="max-w-4xl mx-auto px-7 lg:px-0" id="projects">
    <Modal bind:showModal className="w-5/6 rounded-2xl">
        {#snippet header()}
            <h2 class="text-5xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">

                <WordPullUp words="My Projects"/>
            </h2>
        {/snippet}
        <div
                id="grid-container"
                class="grid items-stretch w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 my-7">

            {#each projects as project, i}
                {@render ProjectComponent(project, i)}
            {/each}
        </div>
    </Modal>

    <BoxReveal boxColor={"gray-200"} duration={0.2}>
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">

            <WordPullUp words="My Projects"/>
        </h2>
    </BoxReveal>

    <BoxReveal duration={0.35} className="ease-in">
        <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400">
            Here are some of recent projects in which i participate. I'm trying to work on something new, so
            check back often!
        </p>
        <div class="relative px-4 sm:px-8 lg:px-12">

            <div
                    id="grid-container"
                    class="grid items-stretch w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-7">

                {#each actualsProjects as project, i}
                    {@render ProjectComponent(project, i)}
                {/each}
            </div>

        </div>
        <div class="flex items-center justify-center w-full py-5">
            <Button text="View All My Projects" class="flex items-center justify-center md:w-2/5 w-2/3 py-2"
                    onclick={()=>{showModal=true}}></Button>
        </div>
    </BoxReveal>


</section>
