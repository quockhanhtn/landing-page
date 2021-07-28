const headerMenu = document.querySelector('.header-menu');
const headerMenuToggle = document.querySelector('.header-menu-toggle');

headerMenuToggle.addEventListener('click', () => {
  headerMenu.classList.add('is-active');
});

document.addEventListener('click', (e) => {
  if (!(headerMenu.contains(e.target) || e.target.matches('.header-menu-toggle'))) {
    headerMenu.classList.remove('is-active');
  }
});