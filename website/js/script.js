// Dark mode toggle
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem(
    "darkMode",
    document.documentElement.classList.contains("dark")
  );
}

// Initialize dark mode from saved preference
document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("darkMode");
  if (
    savedMode === "true" ||
    (savedMode === null &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  }
});

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

// Toggle dark mode function if needed
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
  const isDark = document.documentElement.classList.contains("dark");
  localStorage.setItem("darkMode", isDark ? "dark" : "light");
}

// Check for saved dark/light mode preference
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("darkMode");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
