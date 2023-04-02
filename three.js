// Java script of   ES7 version class functionality
// There is a major difference with constructor and variable declaration using this keyword.
// calling methods using arrow functions

// Compare this code with the two.js file for better and neat understanding
class human{
    age = 25;
    printAge = () => console.log(this.age);
}
class Person extends human{
    // No need to call constructor and super of methods 
        name = "John";
        age = 50;
        printName = () => console.log(this.name);
}
const persons = new Person();
persons.printName();
persons.printAge();