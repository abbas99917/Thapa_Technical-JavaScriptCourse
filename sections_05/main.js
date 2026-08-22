// what is functions
// // in javaScript funcitons is  a reusuable block of code that perfoorm a specific task or set of task. funcitons are use to organize code into  modular and managable peices, promote code reuse, and make programs more readable.

// function sum(a,b){ // functions parameters

//    console.log(a+b) // funcitons body
// }

// sum(10,30) // functions arguments
// sum(10,5)// functions arguments

//========================================= template laterials =========================================//

// ``

    // let a = 10;
    // let b = 8;
    // console.log(`the sum of ${a} and ${b} is: ${a+b}`)

    // =================================== arrow functions =======================================//

    function calculator(num1, num2,operator){
        let result;
        switch(operator){

            case "+":
                return num1 + num2;

                case "-":
                    result = num1 - num2;
                    return result
                    default: return "invlid ooperator"

        }
        
    }
console.log(calculator(5,10,"-"))




// reverse a stirng
 const isReverse = (str) =>{
let reverse = "";
    for (let char = str.length -1; char >=0; char--){

       reverse = reverse + str[char]
    }
    return reverse;
 }

 console.log(isReverse("muhammad khan"))
 