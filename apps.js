const navSlide = ()=>{
  const burger = document.querySelector('.burger');
  const leftNav = document.querySelector('.left-nav');
  const rightNav = document.querySelector('.right-nav__items')
  
  //toggle nav
  burger.addEventListener('click', ()=>{
    leftNav.classList.toggle('nav-active');
    rightNav.classList.toggle('nav-active')

  burger.classList.toggle('toggle')
  })
  
}
navSlide();

const form = document.querySelector('.right-nav__items');
const input = document.querySelector('.input').value;

form.addEventListener('submit', (e)=>{
  if(!input.textContent){
    document.querySelector('.input').style.border = '1px solid red'
  }

  e.preventDefault();
})