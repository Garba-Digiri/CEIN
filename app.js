const bars = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-x');
const navbar = document.querySelector('.navbar');

bars.addEventListener('click', ()=> {
  navbar.classList.add('open');
});

close.addEventListener('click', ()=> {
  navbar.classList.remove('open');
});

const displayPop = document.getElementById('display-pop');
const closePop = document.getElementById('close-pop');
const containerPop = document.querySelector('.container-pop')

displayPop.addEventListener('click', ()=>{
  containerPop.style.display = "flex";
});

closePop.addEventListener('click', ()=>{
  containerPop.style.display = "none";
})