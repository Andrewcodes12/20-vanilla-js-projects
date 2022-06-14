/*
Here’s the code that creates a pair of objects, then modifies them.

Which values are shown in the process?
*/

let animal = {
    jumps : null
}

let rabbit = {
    __proto__: animal,
    jumps: true
}

console.log(rabbit.jumps) // true

delete rabbit.jumps

console.log(rabbit.jumps) // null

delete animal.jumps

console.log(rabbit.jumps) // undefined

/*
true, taken from rabbit.
null, taken from animal.
undefined, there’s no such property any more.
*/

// -------------------------------------------------------------------------------------------------------
let head = {
    glasses: 1
}

let table = {
    pen:3
}

let bed = {
    sheet:1,
    pillow:2
}

let pockets = {
    money:2000
}

/*
Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
*/

let head = {
    glasses: 1
}

let table = { // has access to head
    pen:3,
    __proto__: head
}

let bed = { // has access to table, head
    sheet:1,
    pillow:2,
    __proto__: table
}

let pockets = { // has access to bed,table, and head
    money:2000,
    __proto__: bed
}

console.log(pockets.pen) // 3
console.log(table.money) // undefined
console.log(pockets.glasses) //1
console.log(bed.money) // udnefined
console.log(bed.pen) // 3


// no difference performance wise if we call pocket.glasses or head.glasses

// -------------------------------------------------------------------------------------------------------
/*
We have rabbit inheriting from animal.

If we call rabbit.eat(), which object receives the full property: animal or rabbit?
*/

let animal = {
    eat(){
        this.full = true
    }
}

let rabbit = {
    __proto__: animal
}

rabbit.eat()

/*
The answer: rabbit.

That’s because this is an object before the dot, so rabbit.eat() modifies rabbit.

Property lookup and execution are two different things.

The method rabbit.eat is first found in the prototype, then executed with this=rabbit.
*/


// -------------------------------------------------------------------------------------------------------

/*
We have two hamsters: speedy and lazy inheriting from the general hamster object.

When we feed one of them, the other one is also full. Why? How can we fix it?
*/

let hamster = {
    stomach: [],

    eat(food){
        this.stomach.push(food)
    }
}

let speedy = {
    __proto__: hamster
}

let lazy = {
    __proto__: hamster
}

// // this one found the food
// speedy.eat("apple")
// console.log(speedy.stomach) // apple


// // this one also has it, why? fix it
// console.log(lazy.stomach)


// we are pushing into the sort of global array of stomach
// since lazy is inheriting from hamster and stomcah lives inside hamster then it will have access to anything that was pushed into it

// a way around this is to assign stomach = [] to each object

let hamster = {
    stomach: [],

    eat(food){
        this.stomach.push(food)
    }
}

let speedy = {
    __proto__: hamster,
    stomach: []
}

let lazy = {
    __proto__: hamster,
    stomach: []
}


speedy.eat("apple")
console.log(speedy.stomach) // [apple]
console.log(lazy.stomach) // []
lazy.eat("pizza")
console.log(lazy.stomach) // [pizza]
