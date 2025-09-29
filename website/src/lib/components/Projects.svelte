<script lang="ts">
    import projects from "../data/projects.json";
    import {onMount} from "svelte";
    import {Badge} from "$lib/components/ui/badge/index.js";
    import Button from "./ui/button/button.svelte";
    import * as Drawer from "$lib/components/ui/drawer";

    let tags = new Set(["Web", "IA"]);
    let isSelected = "";

    $: visibleProjects = projects;

    function getclasreveal(i: number) {
        return `image0${i + 1}`;
    }

    onMount(() => {
        const link = document.querySelectorAll(".link");
        const linkHoverReveal = document.querySelectorAll(".hover-reveal");
        const linkImages = document.querySelectorAll(".hidden-img");

        for (let i = 0; i < link.length; i++) {
            link[i].addEventListener("mousemove", (e) => {
                linkHoverReveal[i].style.opacity = 1;
                linkHoverReveal[i].style.transform =
                    `translate(-170%, -50% ) rotate(5deg)`;
                linkImages[i].style.transform = "scale(1, 1)";
                linkHoverReveal[i].style.left = e.clientX + "px";
            });

            link[i].addEventListener("mouseleave", (e) => {
                linkHoverReveal[i].style.opacity = 0;
                linkHoverReveal[i].style.transform =
                    `translate(-50%, -50%) rotate(-5deg)`;
                linkImages[i].style.transform = "scale(0.8, 0.8)";
            });
        }
    });
</script>

<div class="container mx-auto px-8 py-16">
    <div class="flex items-center justify-center mx-50 p-5">
        <p class="block text-primary-foreground text-3xl">Tags</p>
    </div>

    <div class="flex items-center justify-center md:mx-50">
        <div class="items-stretch justify-center grid grid-cols-3 gap-4">
            <Button
                    variant="outline"
                    class="hover:cursor-pointer text-sm bg-gray-400 text-black hover:bg-gray-400/60"
                    onclick={() => {
          isSelected = "";
          visibleProjects = projects;
        }}
            >
                Clear filter
            </Button>
            {#each tags as tag, i}
                <Button
                        variant={isSelected === tag ? "default" : "outline"}
                        class="hover:cursor-pointer"
                        onclick={() => {
            isSelected = tag;
            visibleProjects = projects.filter((p) => {
              return p.tag_familly.includes(tag);
            });
          }}
                >
                    {tag}
                </Button>
            {/each}
        </div>
    </div>

    <section class="flex flex-ai-c flex-jc-c">
        <ul class="flex flex-fd-c flex-jc-sb">
            {#each visibleProjects as project, i}
                <li>
                    <a
                            href={project.link}
                            target="_blank"
                            class="link flex flex-jc-sb flex-ai-c"
                    >
            <span class="text"
            >{project.title + ": " + project.description}</span
            ><br/>
                        {#each project.tools.split(",") as tool}
                            <Badge variant="outline" class="hidden md:block z-[5000]"
                            >{tool}</Badge
                            >
                        {/each}
                        <img
                                src="https://raw.githubusercontent.com/ViktoriiaZaichuk/image-reveal-on-hover/f336e307e7701393e1e63ae4ddb5cb3eb2af27dd/assets/img/arrow-black-right.svg"
                                alt=""
                                height="25"
                                class="hidden md:block"
                        />

                        <div class="hover-reveal {getclasreveal(i)}">
                            <img class="hidden-img object-cover" src={project.image} alt=""/>
                        </div>
                    </a>
                </li>
            {/each}
        </ul>
    </section>
</div>

<style>
    a,
    a:visited,
    a:hover {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    /* FLEXBOX */
    .flex {
        display: flex;
    }

    .flex-jc-sb {
        justify-content: space-between;
    }

    .flex-jc-c {
        justify-content: center;
    }

    .flex-ai-c {
        align-items: center;
    }

    .flex-fd-c {
        flex-direction: column;
    }

    section {
        min-height: 100vh;
        overflow: hidden;
    }

    section ul {
        min-height: 50vh;
        width: 60%;
    }

    @media (max-width: 768px) {
        section ul {
            width: 93%;
        }
    }

    section ul li {
        border-bottom: solid #fff 0.05rem;
        position: relative;
        z-index: 10;
    }

    section ul li a {
        display: block;
        padding: 4rem 0 2rem 0;
        z-index: 10;
    }

    section ul li a .text {
        display: block;
        font-weight: 500;
        z-index: 10;
        mix-blend-mode: difference;
        display: inline-block;
        position: relative;
        color: white;
        text-transform: capitalize;
    }

    @media (max-width: 768px) {
        section ul li a span {
            font-size: 2.5rem;
        }
    }

    section ul li a > img {
        mix-blend-mode: difference;
        object-fit: fill;
        z-index: 10;
    }

    @media (max-width: 768px) {
        section ul li a > img {
            height: 18px;
        }
    }

    .hover-reveal {
        position: absolute;
        width: 600px;
        height: 400px;
        object-fit: cover;
        top: 50%;
        left: 60%;
        pointer-events: none;
        /*transform: translate(-50%, -50%);*/
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.5s ease-out;
    }

    @media (max-width: 768px) {
        .hover-reveal {
            width: 220px;
            height: 300px;
        }
    }

    .hover-reveal img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        transition: transform 0.4s ease-out;
    }
</style>
