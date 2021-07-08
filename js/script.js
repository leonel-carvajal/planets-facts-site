const IconMenu = document.querySelector('.header__ham')
const Menu = document.querySelector('.Nav')

IconMenu.addEventListener('click',(e)=>{
  if(!Menu.classList.contains('show')){
    IconMenu.setAttribute('src','assets/IconClose.svg')
    Menu.classList.add('show')
  }else{
    IconMenu.setAttribute('src','assets/icon-hamburger.svg')
    Menu.classList.remove('show')
  }
})