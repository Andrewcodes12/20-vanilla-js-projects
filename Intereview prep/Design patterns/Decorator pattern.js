/*
Decorators are structural design patterns that aim to promote code re-use.


class Vehicle{
    constructor(vehicle){
        this.vehicleType = vehicleTyle || 'car
        this.model = 'default'
        this.license = '0000-00'
    }
}

const testInstance = new Vehicle('car')
console.log(testInstance)
// Outputs:
// vehicle: car, model:default, license: 00000-000

const truck = new Vehicle('truck')

// New functionality we're decorating vehicle with
truck.setModel = function(modelName){
    this.model = modelName
}

truck.setColor = function(color){
    this.color = color
}

truck.setModel('CAT')
truck.setColor('blue')
console.log(truck)


Here truck is an instance of the Vehicle class and we also decorate it with additional methods:
setColor and setModel


--------------------------------------------------------------------------------------------------
Decorating object with Multiple Decorators
// The constructor to decorate
class MacBook {
    constructor() {
        this.cost = 997;
        this.screenSize = 11.6;
    }
    getCost() {
        return this.cost;
    }
    getScreenSize() {
        return this.screenSize;
    }
}

// Decorator 1
class Memory extends MacBook {
    constructor(macBook) {
        super();
        this.macBook = macBook;
    }

    getCost() {
        return this.macBook.getCost() + 75;
    }
}

// Decorator 2
class Engraving extends MacBook {
    constructor(macBook) {
        super();
        this.macBook = macBook;
    }

    getCost() {
        return this.macBook.getCost() + 200;
    }
}

// Decorator 3
class Insurance extends MacBook {
    constructor(macBook) {
        super();
        this.macBook = macBook;
    }

    getCost() {
        return this.macBook.getCost() + 250;
    }
}

// initialize main object
let mb = new MacBook();

// initialize decorators
mb = new Memory(mb);
mb = new Engraving(mb);
mb = new Insurance(mb);

// Outputs: 1522
console.log(mb.getCost());

// Outputs: 11.6
console.log(mb.getScreenSize());


*/
