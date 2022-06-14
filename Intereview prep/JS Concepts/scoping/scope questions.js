/*
The function sayHi uses an external variable name. When the function runs, which value is it going to use?
*/
let name = 'john' // saved to lexical scope

function sayHi(){
    console.log("hi, " + name)
}

name = "Pete" // overrides john from lexical scope and stores pete

sayHi() // hi, Pete


/*
Old variable values are not saved anywhere. When a function wants a variable, it takes the current value from
its own Lexical Environment or the outer one.
*/

// --------------------------------------------------------------------------------------------
/*
The function makeWorker below makes another function and returns it.
That new function can be called from somewhere else.

Will it have access to the outer variables from its creation place, or the invocation place, or both?
*/

function makeWorker(){
    let names = "Pete"
    return function(){
        console.log(names)
    }
}

let names = "john"


let work = makeWorker() // prints Pete
// names is block scoped
// if let names = pete wasnt inside the function then the value of names would be john

// --------------------------------------------------------------------------------------------

/*
Here we make two counters: counter and counter2 using the same makeCounter function.

Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?
*/


function makeCounter(){
    let count = 0

    return function(){
        return count++
    }
}

let counter = makeCounter()
let counter2 = makeCounter()

console.log(counter) // 0
console.log(counter) // 1

console.log(counter2) // 0
console.log(counter2) // 1

/*
Functions counter and counter2 are created by different invocations of makeCounter.

So they have independent outer Lexical Environments, each one has its own count.
*/

// --------------------------------------------------------------------------------------------

/*
Here a counter object is made with the help of the constructor function.

Will it work? What will it show?

*/

function Counter(){
    let count = 0

    this.up = function(){
        return ++count
    }

    this.down = function(){
        return --count
    }
}

let counters = new Counter()

console.log(counters.up()) //1
console.log(counters.up()) // 2
console.log(counters.down()) // 1

/*
Both nested functions are created within the same outer Lexical Environment,
so they share access to the same count variable:
*/

// --------------------------------------------------------------------------------------------
/*
Look at the code. What will be the result of the call at the last line?
*/

let phrase = "hello"

if(true){
    let user = "john"

    function sayHi(){
        console.log(`${phrase}, ${user}`)
    }
}

sayHi() // prints hello, john

// --------------------------------------------------------------------------------------------

/*
Write function sum that works like this: sum(a)(b) = a+b.

Yes, exactly this way, using double parentheses (not a mistype).

For instance:

sum(1)(2) = 3
sum(5)(-1) = 4

*/


function sum(a){
    return function(b){
        return a + b // uses a from lexical enviornment
    }
}

console.log(sum(1)(2)) // 3


// --------------------------------------------------------------------------------------------
/*
What will be the result of this code?
*/


let x = 1

function func(){
    console.log(x) // reference error cannot access x before initialization

    let x = 2
}

func()


// --------------------------------------------------------------------------------------------
/*
We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f. If it returns true, then that element is returned in the resulting array.

Make a set of “ready to use” filters:

inBetween(a, b) – between a and b or equal to them (inclusively).
inArray([...]) – in the given array.
The usage must be like this:

arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].
For instance:

 your code for inBetween and inArray
// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
*/

//Filter inBetween
function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }

  let arr = [1, 2, 3, 4, 5, 6, 7];
  alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6


// Filter inArray
function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }

  let arr = [1, 2, 3, 4, 5, 6, 7];
  alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

// --------------------------------------------------------------------------------------------

/*
We’ve got an array of objects to sort:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
The usual way to do that would be:

// by name (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// by age (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
Can we make it even less verbose, like this?

users.sort(byField('name'));
users.sort(byField('age'));
So, instead of writing a function, just put byField(fieldName).

Write the function byField that can be used for that.
*/

function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
  }

// --------------------------------------------------------------------------------------------

/*
The following code creates an array of shooters.

Every function is meant to output its number. But something is wrong…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // create a shooter function,
      alert( i ); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.

Why do all of the shooters show the same value?

Fix the code so that they work as intended.
*/

function makeArmy() {

    let shooters = [];

    for(let i = 0; i < 10; i++) {
      let shooter = function() { // shooter function
        alert( i ); // should show its number
      };
      shooters.push(shooter);
    }

    return shooters;
  }

  let army = makeArmy();

  army[0](); // 0
  army[5](); // 5
