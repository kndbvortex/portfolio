<!-- Section2.svelte -->
<script>

    import Projects from "$lib/components/Projects.svelte";

    let imageError = false;

    const handleImageError = () => {
        imageError = true;
    };
</script>

<div class="section2 relative h-screen">
    {#if !imageError}
        <div class="relative sticky top-0 h-screen">
            <!-- Blurred background -->
            <div
                    class="absolute inset-0 bg-[url('/images/gray-bg.jpg')] bg-cover filter blur-sm"
                    style="background-image: url('/bg.webp'); background-size: cover; filter: blur(8px);"
            ></div>

            <!-- Content container (non-blurred) -->
            <div class="relative z-10 flex flex-col items-center justify-center text-white pb-[10vh] h-full ">
                <Projects/>
            </div>
        </div>

    {:else}
        <!-- Fallback background -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <div class="text-center text-white">
                <div class="text-6xl mb-4">🎨</div>
                <p class="text-2xl">Beautiful Background</p>
            </div>
        </div>
    {/if}
</div>

<style>
    .section2 {

        will-change: transform;
        /*background-image: url("/images/gray-bg.jpg");*/
        /*background-size: cover;*/
        /*backdrop-filter: blur(10px);*/
    }
</style>