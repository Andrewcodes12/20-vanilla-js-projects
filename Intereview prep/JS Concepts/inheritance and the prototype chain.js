/*
__proto__ is outdated

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






*/
