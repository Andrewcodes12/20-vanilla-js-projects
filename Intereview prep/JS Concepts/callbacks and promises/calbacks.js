/*
What is a calback function?
In JS, functions are objects. can we pass objects to functions as parameters? yes

we can also pass functions as parameters to call them inside the outer functions


function print(callback){
    callback()
}

----------------------------------------------------------------------------------
Why do we need callback functions?
call backs make sure a function isnt going to run before a task is completed
it will run right after the task has completed

callbacks help up develop asynch code and keeps us safe from problems and errors


the way to create a cb function is to pass it in as a parameter to another function and then
call it back right after something has happened or a task is completed

----------------------------------------------------------------------------------
How to create a CB

const message = function(){
    console.log('this message is shown after 3 seconds)
}

setTimeout(message,3000)
----------------------------------------------------------------------------------
What is an anonymous function?

setTimeout(() => {
    console.log('this message is shown after 3 seconds)
},3000)
----------------------------------------------------------------------------------
What about events?
we also use cb functions for event declarations

<button id='callback-btn'> Click me </button>

document.querySelector("#callback-btn")
.addEventListener("click", () => {
    console.log('user has clicked the button')
})








*/
