const day = document.getElementById('days')
const hour = document.getElementById('hours')
const minute = document.getElementById('minutes')
const second = document.getElementById('seconds')
const countdown = document.getElementById('countdown')



let currentYear = new Date().getFullYear()

let newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`)

function updateCountDown(){
    const currentTime = new Date()

    const difference = newYearTime - currentTime

    // milliseconds, minutes, hours, days
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24
    const minutes = Math.floor(difference / 1000 / 60 ) % 60
    const seconds = Math.floor(difference / 1000 ) % 60

    day.innerHTML = days
    hour.innerHTML = hours < 10 ? '0' + hours : hours
    minute.innerHTML = minutes
    second.innerHTML = seconds
}

setInterval(() => {
    updateCountDown()
},1000)
