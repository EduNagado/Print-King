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
            targetMenu.classList.add('show'); 
        } else {
            iconMenu.classList.remove('d-none');
            iconClose.classList.add('d-none');
            targetMenu.classList.remove('show');
        }
    });
});


window.addEventListener('scroll', function () {
  const header = document.querySelector('.header-desktop');
  const menuIcon = document.querySelector('.menu-icon');
  const imgScroll = document.querySelector('.img-scroll');

  if (window.scrollY > 50) {
    header.classList.add('sticky');
    menuIcon.style.display = 'none'; // Esconde o menu-icon
    imgScroll.style.display = 'block'; // Mostra o img-scroll
  } else {
    header.classList.remove('sticky');
    menuIcon.style.display = 'block'; // Mostra o menu-icon
    imgScroll.style.display = 'none'; // Esconde o img-scroll
  }
});