import {data} from '../js/data.js'
const IconMenu = document.querySelector('.header__ham')
const Menu = document.querySelector('.Nav')
const MainDescription = document.querySelector('.main__description')
const DescriptionOptons = document.querySelectorAll('.overview')
const PlanetOptions = document.querySelectorAll('.Nav__link')
const footer = document.querySelector('.information')
let index = 2
let colorSelected = ''
let change = false

IconMenu.addEventListener('click',()=>{
  if(!Menu.classList.contains('show')){
    IconMenu.setAttribute('src','assets/IconClose.svg')
    Menu.classList.add('show')
  }else{
    IconMenu.setAttribute('src','assets/icon-hamburger.svg')
    Menu.classList.remove('show')
  }
})

const InitialData = ()=>{
  MainDescription.children[1].setAttribute('src',data[index].images.planet)
  MainDescription.children[1].setAttribute('alt',data[index].overview.alt)
  MainDescription.children[0].children[0].textContent = data[index].name
  MainDescription.children[0].children[1].textContent = data[index].overview.content
  MainDescription.children[0].children[2].children[0].setAttribute('href',data[index].overview.source)
  footer.children[0].children[1].textContent = data[index].rotation
  footer.children[1].children[1].textContent = data[index].revolution
  footer.children[2].children[1].textContent = data[index].radius
  footer.children[3].children[1].textContent = data[index].temperature
}
DescriptionOptons.forEach(option=>{
  option.addEventListener('click',(e)=>{
    if(e.target.dataset.option==='planet'){
      MainDescription.children[2].classList.remove('show')
      change=false
      MainDescription.children[1].setAttribute('src',data[index].images.planet)
    }else if(e.target.dataset.option==='internal'){
      change = true
      MainDescription.children[1].setAttribute('src',data[index].images.internal)
    }else if(e.target.dataset.option==='geology' && change===true){
      MainDescription.children[2].setAttribute('src',data[index].images.geology)
      MainDescription.children[2].classList.add('show')
      
    }
  })
})


PlanetOptions.forEach(planet=>{
  planet.addEventListener('click',(e)=>{
    switch (e.target.textContent.toLowerCase()) {
      case 'mercury':
        index = 0
        colorSelected = 'hsl(10, 63%, 51%)'
        break;
      case 'venus':
        index =1
        colorSelected = '#A34D28'
        break;
      case 'earth':
        index = 2
        colorSelected = 'hsl(263, 67%, 51%)'
        break;
      case 'mars':
        index = 3
        colorSelected = 'hsl(10, 63%, 51%)'
        break;
      case 'jupiter':
        index = 4
        colorSelected = 'hsl(2, 68%, 53%)'
        break;
      case 'saturn':
        index = 5
        colorSelected = 'hsl(17, 73%, 46%)'
        break;
      case 'uranus':
        index = 6
        colorSelected = 'hsl(168, 73%, 44%)'
        break;
      case 'neptune':
        index = 7
        colorSelected = 'hsl(222, 87%, 56%)'
      break ;    
    }
    change=false
    MainDescription.children[2].classList.remove('show')
    document.documentElement.style.setProperty('--color-selected',colorSelected)
    InitialData()
  })
})

window.addEventListener('DOMContentLoaded',InitialData)