// constant O(1)

function constant1(n){
    return n * 2 + 1
}
// function has 2 steps so its f(2) which simplifies to O(1)

function constant2(n){
    for(let i = 1; i <=100; i++){

    }
}

// no matter if we increase the size of our input our for loop will fun for 100 stpes
// f(100) simplies to O(1)


// Logarithmic - O(logn)
function log(n){
    if(n<1) return
    log(n/2)
}

// we cut the number in half every pass until it hits 1


// Linear O(n)
function linear1(n){
    for(let i = 1; i <= n; i++){

    }
}
// function depends on n in the for loop


function linear2(n){
    if(n===1) return
    linear2(n-1)
}
// we are decreasing n by 1 making it linear



// log linear (On*log(n))
function logLinear(n){
    if (n<= 1)return

    for(let i = 1; i <= n; i++){
    }
    
    logLinear(n / 2)
    logLinear(n / 2)
}
// we are combinging a linear call(for loop) with a log call
