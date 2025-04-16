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
  
document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const iconMenu = toggler.querySelector('.icon-menu');
    const iconClose = toggler.querySelector('.icon-close');
    const targetMenu = document.querySelector('#navbarNavDropdown');

    let isOpen = false;

    toggler.addEventListener('click', () => {
        isOpen = !isOpen;

        if (isOpen) {
            iconMenu.classList.add('d-none');
            iconClose.classList.remove('d-none');
            targetMenu.classList.add('show'); // se precisar abrir o menu manualmente
        } else {
            iconMenu.classList.remove('d-none');
            iconClose.classList.add('d-none');
            targetMenu.classList.remove('show'); // se precisar fechar o menu manualmente
        }
    });
});
