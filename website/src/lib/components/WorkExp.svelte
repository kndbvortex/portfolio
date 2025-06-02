<script>
  // Experience data could be moved to a separate file/component
  const experiences = [
    {
      id: 1,
      date: "November 2023 - Present",
      title: "Machine Learning Junior Researcher",
      company: "IMT Nord Europe & Clermont Auvergne University",
      description: "XAI for time series classification",
      link: "https://limos.fr/",
      logos: [
        "https://imt-nord-europe.fr/wp-content/uploads/2023/02/Logo_black_IMT_RF_bis.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Logo_Universit%C3%A9_Clermont-Auvergne_%28partenariat_Wikim%C3%A9dia%29.png/225px-Logo_Universit%C3%A9_Clermont-Auvergne_%28partenariat_Wikim%C3%A9dia%29.png"
      ]
    },
    {
      id: 2,
      date: "March 2023 - September 2023",
      title: "Machine Learning Junior Researcher",
      company: "LIMOS",
      description: "Multivariate datastream and anomaly detection by trying to detect concept drift",
      link: "https://limos.fr/",
      logos: ["https://limos.fr/static/limos/limos.png"]
    },
    {
      id: 3,
      date: "August 2021 - 2023",
      title: "Backend Developer",
      company: "InfoLab Technology",
      description: "",
      link: "https://www.infolab-tech.com/",
      logos: ["https://infolab-tech.com/static/images/logo.png"]
    },
    {
      id: 4,
      date: "March 2022 - 2023",
      title: "Backend and Machine Learning Developer (Freelance)",
      company: "Gigalitic",
      description: "",
      link: "https://gigalitic.com/",
      logos: ["https://media.licdn.com/dms/image/v2/C4E0BAQHpgmhL61A_bA/company-logo_200_200/company-logo_200_200/0/1634770719652"]
    },
    {
      id: 5,
      date: "April 2021 - October 2021",
      title: "Assistant Trainer",
      company: "SEED SARL",
      description: "",
      link: "https://gigalitic.com/",
      logos: ["https://www.seeds.cm/img/logo.png"]
    }
  ];
</script>

<div class="text-primary-foreground relative max-w-4xl mx-auto mt-10 cursor-pointer overflow-hidden p-10">
  <div class="flex flex-col">
    <div class="overflow-y-auto">
      <div class="resume_item resume_work experience">
        <ul class="relative space-y-8 pl-8 before:absolute before:left-4 before:h-full before:w-0.5">
          {#each experiences as experience (experience.id)}
            <li class="group relative py-3">

              <div class="flex items-start gap-4">
                <!-- Company logo(s) -->
                <div class="flex flex-shrink-0 flex-col gap-2">
                  {#each experience.logos as logo}
                    <div class="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white/90 p-1 dark:border-white">
                      <img src={logo} alt={`${experience.company} logo`} class="max-h-full max-w-full object-contain" />
                    </div>
                  {/each}
                </div>

                <!-- Experience details -->
                <div class="flex-grow">
                  <p class="font-medium text-primary-600 dark:text-primary-400">{experience.date}</p>

                  <div class="mt-2">
                    <h4 class="text-lg font-semibold">
                      <a href={experience.link} target="_blank" rel="noopener noreferrer" class="hover:underline">
                        {experience.title}
                      </a>
                    </h4>

                    {#if experience.description}
                      <p class="text-primary-foreground/50">{experience.description}</p>
                    {/if}

                    <p class="font-medium text-primary-foreground/70 hover:underline dark:text-slate-50">
                      <a href={experience.link} target="_blank" rel="noopener noreferrer">
                        {experience.company}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>