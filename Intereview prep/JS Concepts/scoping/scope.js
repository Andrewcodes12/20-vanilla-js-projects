/*
functions can access variables outside of it("outer" variables)



Code Blocks
if a variable is declared insidea code block {..} it is only visible inside that code block

function a(){
    let message = 'hello'
    console.log(message) // hell
}

console.log(message) // message is not defined


function a(){
    let message = 'hello'
    console.log(message) // hello
}

function b(){
    let message = 'whats up'
    console.log(message) // whats up
}

same goes for if , for, and while loops
if(true){
    let phrase = 'hello'
    console.log(phrase) // hello
}

console.log(phrase) // phrase not defined

--------------------------------------------------------------------------------------------
LEXICAL ENVIORNMENT
step 1. variables
in JS every function, code block, and the script as a whole have an internal hidden object known as the LEXICAL
ENVIORNMENT

a variable is actually a property of a special internal object, associated with the currently executing
block/function/script


step2. Function Declarations
a function is also a value like a variable

a function declaration immediately becomes a ready to use function unlike a variable that isnt until declaration

--------------------------------------------------------------------------------------------
CLOSURE
a closure is a function that remembers its outer variables and can access them.

all functions in JS are closures they remember where they were created using a hidden [[enviornment]] property, and
their code can access outer variables due to how the lexical enviornment works.

--------------------------------------------------------------------------------------------
GARBAGE COLLECTION
usually a lexical enviornment is removed from memory with all the variables after the function call finishes.
thats because there are no references to it.
its only kept in memory while its reachable.




*/
