class Animal {
    constructor (name) {
        this.name = name;
    }

    printName() {
        console.log('My name is', this.name);
    }
}

class Dog extends Animal {
    constructor(breed, name) {
        super(name);
        this.breed = breed;
    }

    walk() {
        console.log(this.breed, " is walking");
    }
}

const newDog = new Dog('Husky', 'Alex');
console.log(newDog.printName())
console.log(newDog.walk())
console.log(newDog)