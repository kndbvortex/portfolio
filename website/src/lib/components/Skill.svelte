<script>
    import Title from "$lib/components/Title.svelte";

    const designServices = ['Landing Pages', 'Websites'];
    const developmentServices = [
        {
            name:"Django",
            image: "/images/icons/djangoproject-svgrepo-com (1).svg"
        },
        {
            name:"FastAPI",
            image: "/images/icons/FastAPI.svg"
        },
        {
            name:"React & React Native",
            image: "/images/icons/react-svgrepo-com.svg"
        },
        {
            name:"Svelte",
            image: "/images/icons/svelte-svgrepo-com.svg"
        }
    ];
    const clientTypes = [
        {
            name:"Deep Learning",
            image: "/images/icons/pytorch-svgrepo-com (1).svg"
        },
        {
            name:"Machine Learning",
            image: "/images/icons/scikit-learn.svg"
        },{
            name:"Explainable AI",
            image: "/images/icons/ai-explainability-svgrepo-com.svg"
        },{
            name:"Time series analysis",
            image: "/images/icons/noun-time-series-chart-6877916.svg"
        }];
    const tools = [
        {
            name:"Docker",
            image: "/images/icons/docker-svgrepo-com.svg"
        },{
            name:"Git/Github",
            image: "/images/icons/git-svgrepo-com.svg"
        },
        {
            name:"Celery",
            image: "/images/icons/celery-svgrepo-com.svg"
        },
        {
            name:"Trello",
            image: "/images/icons/trello-color-svgrepo-com.svg"
        }]
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
                       
                        <!-- Development Services -->
                        <div class="flex items-center gap-3 mb-6">
                            <div class="flex items-center gap-2  border border-blue-500/30 rounded-full px-4 py-2 md:hover:shadow-sm md:hover:shadow-blue-500 md:hover:cursor-pointer">
                                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span class="text-blue-200 text-sm font-medium capitalize tracking-wider">Web</span>
                            </div>
                        </div>
                        <ul class="space-y-3 border-l-1 border-blue-500 pl-5">
                            {#each developmentServices as service}
                                <li class="text-white text-xs md:text-sm md:hover:scale-110 transition-all md:cursor-pointer"><img class="h-8 inline mr-2" src={service.image} alt={service.name} /><span>{service.name}</span></li>
                            {/each}
                        </ul>
                        <!-- Working With Services -->

                        <div class="flex items-center gap-3 mb-6">
                            <div class="flex items-center gap-2 border-white/50 border border-green-500/30 rounded-full px-4 py-2 md:hover:shadow-sm md:hover:shadow-green-500 md:hover:cursor-pointer">
                                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span class="text-green-200 text-sm font-medium capitalize tracking-wider">AI & ML</span>
                            </div>
                        </div>
                        <ul class="space-y-3 border-l-1 border-green-500/30 pl-5">
                            {#each clientTypes as clientType}
                                <li class="text-white text-xs md:text-sm md:hover:scale-115 md:transition-all md:cursor-pointer"><img class="h-8 inline mr-2" src={clientType.image} alt={clientType.name} /><span>{clientType.name}</span></li>
                            {/each}
                        </ul>
                        <!--Tools -->
                        <div class="flex items-center gap-3 mb-6">
                            <div class="flex items-center gap-2 border-white/50 border rounded-full px-4 py-2 md:hover:shadow-sm md:hover:shadow-white/50 md:hover:cursor-pointer">
                                <div class="w-2 h-2 bg-slate-50 rounded-full"></div>
                                <span class="text-slate-50 text-sm font-medium capitalize tracking-wider">Tools</span>
                            </div>
                        </div>
                        <ul class="space-y-3 border-l-1 border-white/50 pl-5">
                            {#each tools as tool}
                            <li class="text-white md:hover:scale-120 md:transition-all md:cursor-pointer"><img class="h-8 inline mr-2" src={tool.image} alt={tool.name} /><span>{tool.name}</span></li>
                            {/each}
                        </ul>
                    </div>
                    <!-- Tools -->

                </div>
            </div>
        </div>
    </div>
</section>
