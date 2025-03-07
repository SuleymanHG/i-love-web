//  === Hamburger menu code ===
let hamMenu = document.querySelector('.ham-menu');
let hamItems = document.querySelector('.ham-items');

hamMenu.addEventListener('click', openMenu)

function openMenu(){
    hamMenu.classList.toggle('active')
    hamItems.classList.toggle('active')
}

//  === Scrollbar code ===
let scrollContainer = document.getElementById('scroll-container');
let scrollLeftBtn = document.getElementById('scroll-left');
let scrollRightBtn = document.getElementById('scroll-right');

let scrollAmount = 200;

scrollLeftBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

scrollRightBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});