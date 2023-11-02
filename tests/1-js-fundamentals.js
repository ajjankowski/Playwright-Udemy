// To run go to folder in terminal and 'node [path].js'

const { connected } = require("process")

// Hello World
console.log('Hello World!')

// Variables -> var up to 2015, let and const 2015+
var firstName = 'John' // var can be redeclared
let lastName = 'Smith' //let cannot be redeclared
console.log(firstName + ' ' + lastName)

let age, dateOfBirth
age = 6
dateOfBirth = '10.10.2020'
console.log(age + ', ' + dateOfBirth)

//Constant: cannot be changed while runtime, must be declared
const occupation = 'Engineer'

//Data types
var middleName = 'David' //string
var ageOfBrother = 25 //number
var isHeMarried = false //boolean
var yearsInMarriage = null //null
var numberOfCars = undefined //undefined, cannot be used

//Concatenation and Interpolation
var price = 50
var itemName = 'Cup'
var messageToPrint = 'The price for your ' + itemName + ' is ' + price + ' dollars' //Concatenation
console.log(messageToPrint)
var messageToPrint = `The price for your ${itemName} is ${price} dollars` //Interpolation (' ->  `)
console.log(messageToPrint)

//Objects - key: 'value'
var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ['Volvo', 'Toyota', 'Tesla']
}
console.log(customer.firstName) //check value
console.log(customer['lastName']) //check value
customer.firstName = 'Mike' //change object
console.log(`${customer.firstName} ${customer.lastName}`)

//Arrays
var car = ['Volvo', 'Toyota', 'Tesla']
console.log(car[0])
car[1] = 'BMW'
console.log(car[1])
console.log(customer.cars[0])

//Relational or comparison operators (>, <, >=, <=)
var result = 10 >= 10
console.log(result)

//Equality operators
var x = 1
console.log(x == '1')  //true,  compares values (lose comparison)
console.log(x === '1') //false, compares values and data type (strict comparison)

//Logical operators
console.log(true && true)  //and (both must be true to be true)
console.log(true || false) //or  (any must be true to be true)
console.log(!true)         //not (the opposite)

//Conditional statements
if (1 == 1) {
    //
} else if (1 == 2) {
    //
} else {
    //
}

//Loops
for (let i = 0; i < 3; i++) {
    console.log('Loop')
}

var cars = ['Volvo', 'Toyota', 'Tesla']
for (let car of cars) {   //of gives values
    console.log(car)
}

cars.forEach(car => {   //fat arrow = same loop as 'of'
    console.log(car)
})

for (let car in cars) {   //in gives table index
    console.log(car)
}

//Functions

//Declarative function
hello1() //it can be called before declaration
function hello1() {
    console.log('Hello1')
}
hello1()

//Anonymus function
var hello2 = function () { // it cannot be called before declaration
    console.log('Hello2')
}
hello2()

//ES6 function syntax or arrow function
let helloThree = () => {
    console.log('Hello Three')
}
helloThree()

//Function with arguments
function printName(name, lastName) {
    console.log(name + ' ' + lastName)
}
printName('Mike', 'Smith')

//Imports
//import { functionName } from '../folder/file.js'
//import * as helper from '../folder/file.js'

//Class
class CustomerDetails {
    printFirstName(firstName) {
        console.log(firstName)
    }
}

var customerDetails = new CustomerDetails()
customerDetails.printFirstName(firstName)
