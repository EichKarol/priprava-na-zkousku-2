/**
 * Write your code below!
 */

// CLASSES

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Ahoj, jmenuji se ${this.name} a je mi ${this.age} let.`);
    }
}

const zvire = new Animal('Pepina', 5);

console.log(zvire);
zvire.sayHello();