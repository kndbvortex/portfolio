async function loadPapers() {
  try {
    const response = await fetch("/data/publications.json");
    let papers = await response.json();
    const container = document.getElementById("papers-container");
    if(!window.location.href.includes('papers')) {
        papers = papers.slice(0, 2);
    }

    papers.forEach((paper) => {
      const card = document.createElement("a");
      card.href = paper.link;
      card.target = "_blank";
      card.className =
        "block bg-white p-5 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-1";

      card.innerHTML = `
                        <img src="${
                          paper.image
                        }" class="w-full h-48 object-cover rounded-lg" alt="${paper.title}">
                        <h2 class="text-lg font-semibold mt-3">${
                          paper.title
                        }</h2>
                        <p class="text-sm text-gray-600">${paper.author} - ${
        paper.year
      }</p>
                        <p class="text-xs text-gray-500 mt-2">${paper.abstract.substring(
                          0,
                          100
                        )}...</p>
                        <span class="block mt-3 text-blue-600 hover:underline">Read More</span>
                    `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading papers:", error);
  }
}

loadPapers();
