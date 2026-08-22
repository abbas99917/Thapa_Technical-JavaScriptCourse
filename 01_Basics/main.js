// questions: variable naming 

var my_fistname = "john" // valid variable
console.log(my_fistname)

var _myLastname = "king" // valie variables
console.log(_myLastname) 

// var 123myage = 70;
// console.log(123myage) // invalid variable declerations

console.log($cityName)  // valid variable
var $cityName = "peshawar"

// var my@email = "king@gmai.com" // invalid varialbe naming
// console.log(my@email)

/////////////////////////////////////////////////// DATA TYPES //////////////////////////////////////////


// number 
var age = 49;
console.log(age)
console.log(typeof age)

// string 
var myName = "muhammad"
console.log(myName)
console.log(typeof myName)

// boolean
var isRaining = true;
console.log(isRaining)
console.log(typeof isRaining)

// undefined
var num;
console.log(num)
console.log(typeof num)

// null
var lodaing = null;
console.log(lodaing)
console.log(typeof lodaing)

// convert a string to a number

let nums = "100"
// console.log(typeof + nums) // convert string to numbers
console.log(typeof Number(nums))


// types coersion

let str = "5" + 5; // "+ sign concate"
console.log(str) // 55

let str2 = "5" - 10; // subtrract 5 from 10 (type coercion occur)
console.log(str2) // -5

console.log(9 - "5") // 4

console.log("java" + "Script") // javaScript (concate two string)

console.log(" " + " ") // empty

let sum = "" + 0;
console.log(typeof sum) // string

console.log("umar " - "ali") // not a number (NaN)

console.log(true + true) // 2

console.log(false + false) // 0

console.log(true + false) // 1

console.log(false - true) // -1



