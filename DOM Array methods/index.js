const addUser = document.getElementById('add-user')
const double = document.getElementById('double')
const showMillionaire = document.getElementById('show-millionaires')
const sort = document.getElementById('sort')
const calculateWealth = document.getElementById('calculate-wealth')
const main = document.getElementById('main')

// an array of objects containing people and money
let data = []

getRandomUser()
getRandomUser()
getRandomUser()


// fetch random user and add money
async function getRandomUser(){
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()

    const user = data.results[0]


    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }

    addData(newUser)
}

// double money
function doubleMoney(){
    data = data.map(user => {
        return {...user, money: user.money *2}
    })

    updateDom()
}

// sort users
function sortUsers(){
    data = data.sort((a,b) => b.money - a.money)
    updateDom()
}

// show millionaires
function showMillions(){
    data = data.filter((user) => {
        return user.money >= 500000
    })
    updateDom()
}

// calculate networth
function netWorth(){
    const wealth = data.reduce((acc,user) => {
        return acc += user.money
    },0)


    const wealthElement = document.createElement('div')
    wealthElement.innerHTML=`<h3> Total Wealth <strong>${formatMoney(wealth)}</strong> </h3>`
    main.appendChild(wealthElement)
}


// Add new obj to data array
function addData(obj){
    data.push(obj)

    updateDom()
}

// update DOM
function updateDom(providedData = data){
    // clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'

    providedData.forEach((user) => {
        const element = document.createElement('div')
        element.classList.add('person')
        element.innerHTML = `<strong>${user.name}</strong> ${formatMoney(user.money)}`
        main.appendChild(element)
    })
}


// format number as money
function formatMoney(number){
    return '$' + (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}





// Event Listeners
addUser.addEventListener('click', getRandomUser)
double.addEventListener('click', doubleMoney)
sort.addEventListener('click', sortUsers)
showMillionaire.addEventListener('click', showMillions)
calculateWealth.addEventListener('click', netWorth)
