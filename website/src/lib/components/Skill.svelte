<script>
    import Title from "$lib/components/Title.svelte";

    const designServices = ['Landing Pages', 'Websites'];
    const developmentServices = ['Django', 'React', 'Svelte'];
    const clientTypes = ['Pytorch', 'Tensorflow', 'Time series analysis', 'scikit learn', 'Explainable AI'];
    const tools = ['Docker', 'Git/GitHub', 'Celery', "Trello"]
</script>


<section>
    <div class="min-h-screen relative text-sm max-w-5xl m-auto">
        <!-- Corner dots -->
        <div class="absolute top-8 left-8 w-1 h-1 bg-white rounded-full"></div>
        <div class="absolute top-8 right-8 w-1 h-1 bg-white rounded-full"></div>
        <div class="absolute bottom-8 left-8 w-1 h-1 bg-white rounded-full"></div>
        <div class="absolute bottom-8 right-8 w-1 h-1 bg-white rounded-full"></div>

        <div class="container mx-auto px-8 py-16">
            <!-- Main heading -->
            <Title content="I handle everything from design to development – without endless meetings. Saving you time and
                    headaches."/>

            <!-- Content grid -->
            <div class="w-full sm:w-1/3 px-2.5 flex align-center justify-center">
                <img
                        id="img-card-hero"
                        alt="Profile"
                        loading="lazy"
                        class="hover:cursor-pointer aspect-square rounded-2xl object-cover sm:mx-0 m-12 h-50 w-36 rotate-6 shadow-foreground shadow-2xl"
                        src="/images/pexels-pixabay-531756.jpg"
                        style="color: transparent"/>

            </div>
            <div class="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

                
                <!-- Left column - Description -->
                <div class="space-y-8">
                    <p class="text-sm leading-relaxed">
                        I'm a web developer and data scientist ready to contribute to dynamic projects. My goal is to build functional and data-driven web solutions that prioritize tangible outcomes for users and businesses
                    </p>

                    <p class="text-sm leading-relaxed">
                        From concept to launch, I handle every step of the process, ensuring it's smooth and
                        hassle-free, so
                        you can focus on your business.
                    </p>
                    <p class="text-gray-400 text-sm leading-relaxed">
                        Beyond tech, I'm into anime, running, and gaming. <br/>Let's create something awesome!

                    </p>
                </div>

                <!-- Right column - Services -->
                <div class="space-y-12">
                    <!-- Design Services -->
                    <div class="grid gap-6 grid-cols-2">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="flex items-center gap-2 border border-white/50 rounded-lg px-4 py-2">
                                <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span class="text-yellow-200 text-sm font-medium capitalize tracking-wider">Design</span>
                            </div>
                        </div>
                        <ul class="space-y-3">
                            {#each designServices as service}
                                <li class="text-white">{service}</li>
                            {/each}
                        </ul>
                        <!-- Development Services -->
                        <div class="flex items-center gap-3 mb-6">
                            <div class="flex items-center gap-2 border-white/50 border border-blue-500/30 rounded-full px-4 py-2">
                                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span class="text-blue-200 text-sm font-medium capitalize tracking-wider">Web</span>
                            </div>
                        </div>
                        <ul class="space-y-3">
                            {#each developmentServices as service}
                                <li class="text-white">{service}</li>
                            {/each}
                        </ul>
                        <!-- Working With Services -->

                        <div class="flex items-center gap-3 mb-6">
                            <div class="flex items-center gap-2 border-white/50 border border-green-500/30 rounded-full px-4 py-2">
                                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span class="text-green-200 text-sm font-medium capitalize tracking-wider">AI & ML</span>
                            </div>
                        </div>
                        <ul class="space-y-3">
                            {#each clientTypes as clientType}
                                <li class="text-white">{clientType}</li>
                            {/each}
                        </ul>
                        <!--Tools -->
                        <div class="flex items-center gap-3 mb-6">
                            <div class="flex items-center gap-2 border-white/50 border border-blue-500/30 rounded-full px-4 py-2">
                                <div class="w-2 h-2 bg-slate-50 rounded-full"></div>
                                <span class="text-slate-50 text-sm font-medium capitalize tracking-wider">Tools</span>
                            </div>
                        </div>
                        <ul class="space-y-3">
                            {#each tools as tool}
                                <li class="text-white">{tool}</li>
                            {/each}
                        </ul>
                    </div>
                    <!-- Tools -->

                </div>
            </div>
        </div>
    </div>
</section>
