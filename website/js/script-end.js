document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Hide all tab panes
        document.querySelectorAll('.tab-pane').forEach(pane => {
          pane.classList.add('hidden');
          pane.classList.remove('block');
        });
        
        // Remove active class from all tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => {
          btn.classList.remove('active', 'bg-primary', 'text-white');
          btn.classList.add('text-zinc-700', 'bg-white', 'dark:text-zinc-200', 'dark:bg-zinc-800');
        });
        
        // Add active class to clicked button
        this.classList.add('active', 'bg-primary', 'text-white');
        this.classList.remove('text-zinc-700', 'bg-white', 'dark:text-zinc-200', 'dark:bg-zinc-800');
        
        // Show corresponding tab pane
        const targetId = this.getAttribute('data-target');
        const targetPane = document.getElementById(targetId);
        targetPane.classList.remove('hidden');
        targetPane.classList.add('block');
      });
    });
  });