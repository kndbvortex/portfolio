document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("grid-container");

  try {
    const response = await fetch("/data/projects.json");
    let projects = await response.json();
    if (!window.location.href.includes('projects')) {
        projects = projects.slice(0, 3);
    }

    projects.forEach((project) => {
      const card = document.createElement("a");
      card.href = project.link;
      card.target = "_blank";
      card.className =
        "relative flex flex-col items-stretch duration-300 ease-out p-7 sm:p-3 group h-100 rounded-2xl";

      card.innerHTML = `
                <span class="absolute inset-0 z-20 block w-full h-full duration-300 ease-out bg-transparent border border-transparent border-dashed group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border group-hover:border-neutral-300 dark:group-hover:border-neutral-600 group-hover:border-dashed rounded-2xl group-hover:bg-white dark:group-hover:bg-neutral-950"></span>
                <span class="absolute inset-0 z-10 block w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1"></span>
                <span class="relative z-30 block duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                    <span class="block w-full">
                        <img src="${project.image}" class="w-full h-auto rounded-lg aspect-[16/9] object-cover alt=${project.title}">
                    </span>
                    <span class="block w-full px-1 mt-5 mb-1 sm:mt-3">
                        <span class="flex items-center mb-0 text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                            <span>${project.title}</span>
                            <svg class="group-hover:translate-x-0 group-hover:translate-y-0 -rotate-45 translate-y-1 -translate-x-1 w-2.5 h-2.5 stroke-current ml-1 transition-all ease-in-out duration-200 transform" viewBox="0 0 13 15">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                    <g transform="translate(0.666667, 2.333333)" stroke="currentColor" stroke-width="2.4">
                                        <polyline class="transition-all duration-200 ease-out opacity-0 delay-0 group-hover:opacity-100" points="5.33333333 0 10.8333333 5.5 5.33333333 11"></polyline>
                                        <line class="transition-all duration-200 ease-out transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ml-0" x1="10.8333333" y1="5.5" x2="0.833333333" y2="5.16666667"></line>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <span class="text-sm text-neutral-600 dark:text-neutral-400 block truncate">${project.description}</span>
                    </span>
                </span>
            `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading JSON data:", error);
  }
});
