// There are only two limitations:

// The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
// The value of __proto__ can be either an object or null. Other types are ignored.

// [[Prototype]] propert is internal and hidden

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal


// if we need a property from rabbit and its missing; JS will automatically take it from animal


// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };


// rabbit.__proto__ = animal

// alert( rabbit.eats) // true
// alert(rabbit.jumps)


// animal is the prototype of rabbit
// rabbit prototypically inherits from animal
// animals properties and methods become inherited by rabbit


// let animal = {
//     eats: true,
//     walk(){
//         alert("Animal Walk")
//     }
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// }

// // walk is taken from the prototype
// rabbit.walk() // animal walk


let animal = {
    eats:true,
    walk(){
        alert("Animal Walk")
    }
}

let rabbit = {
    jumps: true,
    __proto__:animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
}


longEar.walk() // Animal Walk
alert(longEar.jumps) // true(from rabbit)


// if we need something from longEar and its missing javascript will look for it in rabbit and then in animal
