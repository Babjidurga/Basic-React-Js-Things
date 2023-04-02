

// 1. Sample js programme to show difference betwenn normal and arrow function
function OlderVersion(){
    console.log("Older Version")
}

const newVersion = () => {
    console.log("New Version")
}
OlderVersion();
newVersion();

//2. Another example
function getSum(num) {
    return num + num
}
// if we passing only one variable to the arrow function no need to write () and {}; it will return the expression inside it by default
const newVersionSum= num => num + num;
console.log(getSum(50));
console.log(newVersionSum(100));

// if we passing two variables to the arrow function we need to write () and {}; we have to write return {} to get the value
// if the expression is a simple expression no need to write {}; it will return the expression inside it by default

const newVersionMul= (num1,num2) => num1 * num2;
console.log(newVersionMul(5,10))

// if we passing two variables to the arrow function we need to write () and {}; we have to write return {} to get the value
const newVersionExp= (num1,num2) => {
    return (num1 * num2) /100
};
console.log(newVersionExp(10,200))
