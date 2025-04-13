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
let scrollAmount = 300;

scrollLeftBtn.addEventListener('click', () => {
  if (scrollContainer.scrollLeft === 0) {
    let maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    scrollContainer.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
  } else {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
});

scrollRightBtn.addEventListener('click', () => {
  let maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  if (scrollContainer.scrollLeft >= maxScrollLeft - 10) {
    scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
});



