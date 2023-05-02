export function Sounds() {
  const forest = new Audio("./sounds/floresta.wav")
  const rain = new Audio("./sounds/chuva.wav")
  const coffeeShop = new Audio("./sounds/cafeteria.wav")
  const fireplace = new Audio("./sounds/lareira.wav")

  function forestSound(){
      forest.play()
      rain.pause()
      fireplace.pause()
      coffeeShop.pause()
    }
    
  function forestSoundPause(){
    forest.pause()
  }
  
  function rainSound(){
    
    rain.play()
    fireplace.pause()
    forest.pause()
    coffeeShop.pause()
    
    
  }
  
  function coffeeShopSound(){
    coffeeShop.play()
    rain.pause()
    forest.pause()
    fireplace.pause()
  
  }
  
  function fireplaceSound(){
    fireplace.play()
    rain.pause()
    forest.pause()
    coffeeShop.pause()
    
  }

  return {
    forestSound,
    rainSound,
    coffeeShopSound,
    fireplaceSound,
    forest,
    rain,
    coffeeShop,
    fireplace,
    forestSoundPause
  }
}