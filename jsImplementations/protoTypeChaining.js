function Animal() {
   this.walking = function() {
        console.log('walking....');
   }
}

Animal.prototype.eating = function () {
    console.log('eating...');
}

function Dog(breed) {
    Animal.call(this);
    this.breed = breed;

    this.bark = function() {
        console.log('barking....', this.breed);
    }
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const myPet = new Dog('Husky');
console.log(myPet.bark());

// ------------------------------------------------ //
// using object.create
const userFunctionStore = {
    increment: function() { return ++this.score },
    login: function() { console.log(loggedIn)}
}

function userCreator(name,score) {
    let newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const newUser = userCreator('shubham', 26);
console.log(newUser.increment());


// ------------------------------------------------ //
// using new Keyword
function userCreatorNew(name,score) {
    this.name = name;
    this.score = score;
}

userCreatorNew.prototype.increment = function() { return ++this.score },
userCreatorNew.prototype.login = function() { console.log(loggedIn)}

const updatedUser = new userCreatorNew('shubham', 26);
console.log(updatedUser.increment());

// ------------------------------------------------ //
// using class
class UserCreatorClass {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    increment = function() { return ++this.score }
    login = function() { console.log(loggedIn)}
}


const updatedClassUser = new UserCreatorClass('shubham', 26);
console.log(updatedClassUser.increment());