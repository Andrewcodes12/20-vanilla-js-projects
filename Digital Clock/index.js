setInterval(getTime,1000)

const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const day = document.querySelector('.day')

function getTime(){
let date = new Date()

let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()



if(hours > 12) hours - 12

hour.innerHTML = hours
minute.innerHTML = minutes
second.innerHTML = seconds

}


getTime()
