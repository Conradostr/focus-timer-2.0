export function Timer({
  minutesDisplay,
  secondsDisplay
}){

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)


  function updateDisplay(minutes, seconds){
    if(minutes == undefined){
      minutes = 0
    }
    if(seconds == undefined){
      seconds = 0
    }
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset(){
    minutesDisplay.textContent = 25
    secondsDisplay.textContent = 0
  }

  function stop(){
    clearTimeout(timerTimeOut)
  }

  function cowntdown(){
    timerTimeOut = setTimeout(function(){
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)

      updateDisplay(minutes, 0)

      if(seconds <= 0){
        seconds = 5
        --minutes
      }

      if(seconds && minutes <= 0){
        reset()
        return
      }

      updateDisplay(minutes, String(seconds - 1))

      cowntdown()

    }, 1000)
  }

  function incrementMinutes(){
    minutes += 5
    updateDisplay(minutes, 0)
  }

  function decrementMinutes(){
    if(minutes > 0){
      minutes -= 5
    }else{
      minutes = 0
    }
    updateDisplay(minutes, 0)
  }

  return {
    cowntdown,
    stop,
    incrementMinutes,
    decrementMinutes
  }
}