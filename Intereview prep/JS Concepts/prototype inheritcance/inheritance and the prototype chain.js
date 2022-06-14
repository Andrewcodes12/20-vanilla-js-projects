/*
__proto__ is outdated
__poroto__ is read only cannot set values

modern JS suggest we use Object.getPrototypeOf / Object.setPrototypeOf


let user = {
    name: "John",
    lastname: "smith"

    set fullName(value){
        [this.name, this,lastname] = value.split(" ")
    },

    get fullName(){
        return `${this.name} ${this.lastname}`
    }
}

let admin = {
    __proto__: user,
    isAdmin: true
}

alert(adming.fullName) // "john smith"

// setter triggers
admin.fullName = " Andrew fava"

alert(admin.fullName) "Andrew Fava, state of admin is modified"
alert(user.fullName) "John Smith, state of user is protected"




---------------------------------------------------------------
The Value of "THIS"

this is not effected by prototypes at all.

this always referrs to the object before the .

the setter call admin.fullName uses admin as this, not user.

methods get shared; the state of the object does not


// animal has methods
let animal = {
    color: 'green',


    set colors(value){
        this.color = value.split(" ") // need to use split to turn the array into a string
    },

    get type(){
        return `this is an animal`
    },

    walk(){
        if(!this.isSleeping){
            alert('I walk')
        }
    },
    sleep(){
        this.isSleeping = true
    },


}


let rabbit = {
    name:"White Rabbit",
    __proto__: animal
}

console.log(animal.color) // green
rabbit.color = 'red'
console.log(rabbit.color) // red

// modifies rabbit.isSleeping
rabbit.sleep() // true


alert(rabbit.isSleeping) // true
alert(animal.isSleeping) // returns undefined because animal doesnt have an insleeping property

in order to get it to return true we need to set
animal.sleep() // true
alert(animal.isSleeping) // true


----------------------------------------------------------------------------------------------
for in loop

let animal = {
    eats: true
}

let rabbit = {
    jumps: true,
    __proto__: animal
}

console.log(Object.keys(rabbit)) // jumps

for(let prop in rabbit) console.log(prop) // jumps , eats
*/
