setInterval(setClock,1000)



function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60 // 60 seconds in a minute
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) // 60 minutes in an hour
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12 // 12 hours on the clock
}
