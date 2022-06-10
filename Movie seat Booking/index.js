const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

populateUI()

let ticketPrice = +movieSelect.value

// save selected movie index and price
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)
}


function updateSelectedCountAndTotal(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    // copy selected seats into arr
    // map through array
    // return new array of indexes

    const seatsIndex = [...selectedSeats].map(seat => {
        return [...seats].indexOf(seat)
    });

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))


    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice
}

// get data from local storage and populate the UI
function populateUI(key){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))

    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat,index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected')
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')

    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex
    }


}

// movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value
    setMovieData(e.target.selectedIndex, e.target.value)
    updateSelectedCountAndTotal()
})

// Seat click event listener
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSelectedCountAndTotal();
    }
})


// Initial count and total set on page load
updateSelectedCountAndTotal()
