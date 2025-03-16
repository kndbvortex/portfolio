// Modal menu toggle
function toggleModalMenu() {
  const modalMenu = document.getElementById("modal-menu");
  modalMenu.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  // Tab switching functionality
  const tabButtons = document.querySelectorAll(".tab-button");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Hide all tab panes
      document.querySelectorAll(".tab-pane").forEach((pane) => {
        pane.classList.add("hidden");
        pane.classList.remove("block");
      });

      // Remove active class from all tab buttons
      document.querySelectorAll(".tab-button").forEach((btn) => {
        btn.classList.remove("active", "bg-primary", "text-white");
        btn.classList.add(
          "text-zinc-700",
          "bg-white",
          "dark:text-zinc-200",
          "dark:bg-zinc-800"
        );
      });

      // Add active class to clicked button
      this.classList.add("active", "bg-primary", "text-white");
      this.classList.remove(
        "text-zinc-700",
        "bg-white",
        "dark:text-zinc-200",
        "dark:bg-zinc-800"
      );

      // Show corresponding tab pane
      const targetId = this.getAttribute("data-target");
      const targetPane = document.getElementById(targetId);
      targetPane.classList.remove("hidden");
      targetPane.classList.add("block");
    });
  });
});

// ajust the view for to anchor links
document.addEventListener("click", function (event) {
  // Check if the clicked element is a link with a hash
  const link = event.target.closest('a[href^="#"]');

  if (link) {
    // Get the target element
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Prevent default behavior
      event.preventDefault();

      // Calculate the position (element position minus 200px)
      const position =
        targetElement.getBoundingClientRect().top + window.scrollY - 100;

      // Scroll to that position
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: true,
  });
});

/// Tab switching functionality
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded - initializing tabs");
  const tabButtons = document.querySelectorAll(".tab-button");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log("Tab clicked:", this.getAttribute("data-target"));

      // Hide all tab panes
      document.querySelectorAll(".tab-pane").forEach((pane) => {
        pane.classList.add("hidden");
        pane.classList.remove("block");
      });

      // Remove active class from all tab buttons
      document.querySelectorAll(".tab-button").forEach((btn) => {
        btn.classList.remove(
          "active",
          "bg-slate-900",
          "text-slate-50",
          "dark:text-black",
          "dark:bg-slate-50"
        );
        btn.classList.add(
          "text-slate-900",
          "bg-white",
          "dark:text-slate-300",
          "dark:bg-gray-100"
        );
      });

      // Add active class to clicked button
      this.classList.add(
        "active",
        "bg-slate-900",
        "text-slate-50",
        "dark:text-black",
        "dark:bg-slate-50"
      );
      this.classList.remove(
        "text-slate-900",
        "bg-white",
        "dark:text-slate-300",
        "dark:bg-gray-100"
      );

      // Show corresponding tab pane
      const targetId = this.getAttribute("data-target");
      console.log("Target tab:....", targetId);
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.remove("hidden");
        targetPane.classList.add("block");
        console.log("Tab pane shown:", targetPane);
      } else {
        console.error("Tab pane not found:", targetId);
      }
    });
  });
});

// Initialize the first tab by default
document.addEventListener("DOMContentLoaded", function () {
  // Make sure Education tab is active on page load
  const defaultTab = document.querySelector(
    '.tab-button[data-target="tab-experience"]'
  );
  if (defaultTab) {
    // Simulate a click on the default tab
    defaultTab.click();
  }
});

// Toggle dark mode function if needed
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
  console.log("Hype");

  const isDark = document.documentElement.classList.contains("dark");
  localStorage.setItem("darkMode", isDark ? "dark" : "light");
}

// Check for saved dark/light mode preference based on user system preference
document.addEventListener("DOMContentLoaded", function () {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function (e) {
    if (
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const floatingNav = document.getElementById("floating-nav");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Show floating nav when scrolled past 200px
    if (scrollTop > 200) {
      floatingNav.classList.remove("opacity-0", "pointer-events-none");
      floatingNav.classList.add("opacity-100", "pointer-events-auto");
    } else {
      floatingNav.classList.remove("opacity-100", "pointer-events-auto");
      floatingNav.classList.add("opacity-0", "pointer-events-none");
    }

    lastScrollTop = scrollTop;
  });
});
function hideLoading() {
  const loadingScreen = document.getElementById("loading-screen");
  const content = document.getElementById("content");

  // Add fade out animation to loading screen
  loadingScreen.classList.add("fade-out");

  // After animation completes, hide loading screen and show content
  setTimeout(() => {
    loadingScreen && loadingScreen.classList.add("hidden");
    content && content.classList.remove("hidden");
  }, 500); // matches the fadeOut animation duration
}

// Hide loading screen when page is fully loaded
window.addEventListener("load", () => {
  // Add a small delay to make the loading animation visible (optional)
  // Remove this setTimeout to hide immediately when loaded
  setTimeout(hideLoading, 1000);
});

// If page is already loaded when script runs
if (document.readyState === "complete") {
  setTimeout(hideLoading, 1000);
}
