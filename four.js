// using spread operator 

let set1 = [1,2,3,4,5,6]
let set2 = [7,8,9,10]

// unpacking set1 and set2 using ... operator called spread operator

let set3 = [...set1,...set2]
console.log(set3)

let set4 = {
    name:"Rahul",
    age:23
}

// Unpacking the values of set4 in the set5 directly
let set5 = {...set4,
    class:"Fourth"
}
console.log(set5)

// Destructuring means unpacking a  set of values and assign them to a individual variable
let set = [10,20,30,40];
[a,b,c,d] = set;
console.log(a,b,c,d)

// Object destructuring
values = {
    email:"abc@gmail.com",
    age:25
}
let {email,age} = values;
// The below line is called naming convention
console.log(values.age)

// Below is the destructured values
console.log(email,2*age)


// Rest operator packing of values into an array nothing but opposite to spread operator

const array = (...arr) => console.log(arr);

array(1,2,3) // this is the output [ 1, 2, 3 ]


// another model
const array1 = (a,b,...c) => console.log(a,b,c);

array1(1,2,3,4,5,6) // this is the output 1 2 [ 3, 4, 5, 6 ]
