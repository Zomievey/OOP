const person1 = {
name: 'Haylee',
sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
    }
};
const person2 = {
name: 'Andy',
sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
    }
}
const person3 = {
name: 'Hunter',
sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
    }
}
const person4 = {
name: 'Dessie',
sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
    }
}
const person5 = {
name: 'Quinn',
sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
    }
}

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();


class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }


    sayHello() {
        console.log(`Hey! my name is ${this.name}. I am ${this.age} years old, and I live in ${this.city}.`)

    }

}

let person6 = new Person('Julie', 'Birmingham', 28);

    person6.sayHello();

class Vehicle {
constructor(type, manufacturer, numberOfWheels) {
    this.type = type;
    this.manufacturer = manufacturer;
    this.numberOfWheels = numberOfWheels;
    }


    aboutVehicle() {
    console.log(`This is a ${this.manufacturer} ${this.type}. It has ${this.numberOfWheels}.`);
    }
}

class Truck extends Vehicle {
constructor(type, manufacturer, numberOfWheels, hasTruckbed, numberOfDoors) {
    super(type, manufacturer, numberOfWheels);

    this.hasTruckbed = hasTruckbed;
    this.numberOfDoors = numberOfDoors;
}

    aboutVehicle() {
        if (this.hasTruckbed) {
            console.log(`This is a ${this.manufacturer} ${this.type}. It has a truckbed and ${this.numberOfWheels} wheels, and ${this.numberOfDoors} doors.`)
        } else {
            console.log(`This is a ${this.manufacturer} ${this.type}. It doesn't have a truckbed, but has ${this.numberOfWheels} wheels and ${this.numberOfDoors} doors.`);
        }
    }

} 


let newTruck = new Truck('truck', 'Chevy', 6, true, 4);
newTruck.aboutVehicle();

class Sedan extends Vehicle {
constructor(type, manufacturer, numberOfWheels, size, mpg) {
    super(type, manufacturer, numberOfWheels);

    this.size = size;
    this.mpg = mpg;
}

aboutVehicle() {
    console.log(`This is a ${this.size} ${this.manufacturer} ${this.type}. It gets ${this.mpg}, and has ${this.numberOfWheels} wheels.`);
}
}

let sedan1 = new Sedan('sedan', 'Honda', 4, 'small', 40)
sedan1.aboutVehicle();

class Motorcycle extends Vehicle {
constructor(type, manufacturer, numberOfWheels, hasHandleBars, hasDoors,) {
    super(type, manufacturer, numberOfWheels);

    this.hasHandleBars = hasHandleBars;
    this.hasDoors = hasDoors;
}

aboutVehicle(){
    console.log(`This is a ${this.size} ${this.manufacturer} ${this.type}. It gets ${this.mpg} mpg and has ${this.numberOfWheels} wheels.`);
}
}

