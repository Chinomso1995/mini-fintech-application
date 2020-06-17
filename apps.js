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

//validating username input field

const form = document.querySelector('.right-nav__items');
const input = document.querySelector('.input');

form.addEventListener('submit', (e)=>{

  if(input.value == ''){
    document.querySelector('.input').style.border = '1px solid red'
  }
  else if(input.value == 'kronika'){
    location.assign('app/index.html')
  }

  e.preventDefault();
})

