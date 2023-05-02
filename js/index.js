import { Timer } from "./timer.js"
import { Sounds } from "./sound.js"

const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')
const buttonPlay = document.querySelector('#play')
const buttonStop = document.querySelector('#stop')
const buttonIncrement = document.querySelector('#increment')
const buttonDecrement = document.querySelector('#decrement')
const buttonForest = document.querySelector('#forest')
const buttonRain = document.querySelector('#rain')
const buttonCoffeeShop = document.querySelector('#coffee-shop')
const buttonFireplace = document.querySelector('#fireplace')

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const sound = Sounds()

buttonPlay.addEventListener('click', () => {
  timer.cowntdown()
  timer.forest.classList.toggle("active")
}) 

buttonStop.addEventListener('click', () => {
  timer.stop()
})

buttonIncrement.addEventListener('click', () => {
  timer.incrementMinutes()
})

buttonDecrement.addEventListener('click', () => {
  timer.decrementMinutes()
})




buttonForest.addEventListener('click', () => {
  if(buttonForest.classList.contains('active')){
    sound.forestSoundPause()
    buttonForest.classList.remove('active')
  }
  sound.forestSound()
  buttonForest.classList.add('active')
})

buttonRain.addEventListener('click', () => {
  sound.rainSound()
})

buttonCoffeeShop.addEventListener('click', () => {
  sound.coffeeShopSound()
})

buttonFireplace.addEventListener('click', () => {
  sound.fireplaceSound() 
})

