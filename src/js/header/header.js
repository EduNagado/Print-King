document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('[data-bs-toggle="collapse"]');
  
    toggles.forEach(toggle => {
      const icon = toggle.querySelector('.toggle-icon');
      const targetId = toggle.getAttribute('data-bs-target');
      const target = document.querySelector(targetId);
  

      target.addEventListener('shown.bs.collapse', () => {
        icon.textContent = '−';
      });
  

      target.addEventListener('hidden.bs.collapse', () => {
        icon.textContent = '+';
      });
    });
  });
  