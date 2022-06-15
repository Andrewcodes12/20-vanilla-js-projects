/*
Promises are one way to deal with asynchornous code

async functions use promises behind the scenes
so understanding promises is key to understanding how async and await work.

calling fetch is equivalent to saying new Promise()
--------------------------------------------------------------------------------------
once a promise has been called, it will start in a pending state.
while in pending the function continues executing.
the created promise will eventually end in a resolved state or a rejected state.

3 states-
pending,resolved,rejected


the fetch api uses promises


--------------------------------------------------------------------------------------
CREATING A PROMISE
const done = true

const isItDoneYet = new Promise((resolve,reject) => {
    if(done){
        const workDone = 'here is the thing i built'
        resolve(workDone)
    } else {
        const why = ' still working on something else'
        reject(why)
    }
})


if done is true the promise will go into a resolved state
other wise the promise goes into a rejected state

if none of these is executed the promise will remain in a pending state

--------------------------------------------------------------------------------------
const isItDoneYet = new Promise((resolve,reject) => {
    if(done){
        const workDone = 'here is the thing i built'
        resolve(workDone)
    } else {
        const why = ' still working on something else'
        reject(why)
    }
})

const checkIfItsDone = () => {
    isItDoneYet
    .then(ok => {
        console.log(ok)
    })
    .catch(err => {
        console.error(err)
    })
}

// check if its done will specifiy what to do when the promise is either resolved(.then) or rejected(.catch)
--------------------------------------------------------------------------------------
A promise can be returned to another promise, creating a promise chain


const status = respone => {
    if(response.status >= 200 && response.status < 300){
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}

const json = response => response.json() // turn response into json

fetch('./todos.json')
    .then(status) // note that the `status` function is actually **called** here, and that it **returns a promise***
    .then(json) // likewise, the only difference here is that the `json` function here returns a promise that resolves with `data`
    .then(data => {
        // ... which is why `data` shows up here as the first parameter to the anonymous function
        console.log('request succeeded with JSON response', data)
    })
    .catch(error => {
        console.log('request failed',error)
    })

running fetch returns a response, which has many properties:
    - status - http status code
    - status text - a status message, which is OK if the request succeeded

response also has a json() method, which returns a promise that will resolve with the content of the body
transformed into JSON.


So given those promises, this is what happens: the first promise in the chain is a function that we defined, called status(),
that checks the response status and if it's not a success response (between 200 and 299), it rejects the promise.

This operation will cause the promise chain to skip all the chained promises listed and will skip directly to
the catch() statement at the bottom, logging the Request failed text along with the error message.

If that succeeds instead, it calls the json() function we defined. Since the previous promise, when successful,
returned the response object, we get it as an input to the second promise.
--------------------------------------------------------------------------------------
Promise.All()

if you need to synchronize different promises, Promise.all() helps you define a list of promises,
and execute something when they are all resolved.

const f1 = fetch('/something.json')
const f2 = fetch('/something2.json')

Promise.all([f1,f2])
.then(res => {
    console.log('Array of results', res)
})
.catch(err => {
    console.error(err)
})

--------------------------------------------------------------------------------------
Common errors
Uncaught TypeError: undefined is not a promise
If you get the Uncaught TypeError: undefined is not a promise error in the console,
make sure you use new Promise() instead of just Promise()

UnhandledPromiseRejectionWarning
This means that a promise you called rejected, but there was no catch used to handle the error.
Add a catch after the offending then to handle this properly.
*/
