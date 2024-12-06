const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !isExpanded);
  menu.classList.toggle('open');
});
