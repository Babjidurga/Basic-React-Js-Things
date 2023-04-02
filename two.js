// This program file is to know the difference and various modifications for the ES6 and ES7 js files

// Lets start with the constructor functions
// ES6 constructor functions
class human{
    constructor(){
        this.name = "Rahul";
        this.age = 25;
        this.gender = "Male"
    }
}
// Extends means we can able to access and modify the values and data present in the parent class.

class Person extends human{
    constructor(){
        // we have to call super() to use the data and values of parent class in the child class
        super();
        // Here again we have given the name as John. This is called Method Over riding.
        this.name = "John";
    }
    printName(){
        console.log(this.name);
    }
    printAge(){
        console.log(this.age)
    }
}
const persons = new Person();
persons.printName();
persons.printAge();

// Using extends keyword to inherit the parent function values into the child funcion values

