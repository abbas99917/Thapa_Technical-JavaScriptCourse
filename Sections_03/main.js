// // var result = "hellow" / 2;
// // console.log(result)

// // Ternary operators

// let age = 18;

// // let results = age >= 18 ? "Can drive" : "can't drive"
// // console.log(results)

// console.log(2 < 12 < 5) // tru default value is (1) and fals defaults value is (0)

// ////////////////////////////////////// Control statements and loops ////////////////////////////////////

// // if statements 

// let personAge = 17;
// let citizenShip = true;
// let isRegister  = true;


// if(personAge >= 18){
//     if(citizenShip){
//         if(isRegister){
//               console.log('YOUR ARE EIGIBLE TO VOTE')
//         }else{
//             console.log("Your are not eligible for registrations status")
//         }
//     }else{
//         console.log("you are not eligible to vote due to citizenship status")
//     }
// }else{
//     console.log("you are not eligible to vote (younger)")
// }

// // interview qustions

// let num = 6;
// if(num %2===0){
//     console.log('NUMBER IS EVEN')
// }else{
//     console.log("NUMBER IS ODD")
// }

// // switch statements

// let day = "monday";

// switch(day){
//     case "friday":
//         console.log("today is friday");
//         break;

//         case "saturday" :
//             console.log("today is suturaday");
//             break;

//             case "monday" :
//                 console.log("today is monday")
//                 break;

//                 default: console.log("inalid day")
// }

// let shapeOfSphere = "circle"
// let a = 5;
// let b = 10;
// let result;

// switch(shapeOfSphere){

//     case "square" :
//         result= a * a;
//         console.log(result);
//         break;

//         case "rectangle" :
//             result  = a * b;
//             console.log(result);
//             break;

//             case "circle":
//                 let r = 2
//             result = 3.14 * (r*r)
//             console.log(result);
//             break;
            
//             default: console.log("ivalid shape")

// }

// loops in javascript
// for loop
// while loop
// do while loop
// for of loop
// for in loop


// while loops
//  let num = 0;
//  while(num <=10){
//     num++
//     console.log(num)
//  }

 // do while loops
//  let num = 0
//  do{
//     console.log(num)
//     num++
//  }while(num<=10)

// for(let num = 0; num<=10; num++){
//     console.log(num)
// }

// print 5 table

let table = 1
while(table<=10){
    console.log("5 * " + table + " = " + 5 * table)
    table++
}


let sum =0;
for(let num =0; num<=10; num++){
  sum =   sum + num
}
console.log(sum)

// pattern

for(let i =1 ; i<=5; i++){
    pattern = ""
    for(let j=1; j<=i; j++){
        pattern = pattern + " * "
    }
    console.log(pattern) //*
                        // * *
                        // * * *
                        // * * * *
                        // * * * * * 
}