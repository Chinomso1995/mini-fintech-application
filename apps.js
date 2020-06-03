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