const bars = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-x');
const navbar = document.querySelector('.navbar');

bars.addEventListener('click', ()=> {
  navbar.classList.add('open');
});

close.addEventListener('click', ()=> {
  navbar.classList.remove('open');
})