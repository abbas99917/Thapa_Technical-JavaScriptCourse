// Strings
// length 

// let str = "Hello   world" // space are include in length property
// console.log(str.length);

// THE indexof() method: return the syntax positions of the first occurance of a string in a string, or it return -1 if the string is not found

// syntax: indexof(searchstring, position)
// indexof method is casesensitive

// let string = "muhammad abbas"
// // console.log(string.indexOf("abbas"))

// let result = string.map((curElem, index)=>{
//     return curElem
// })
// console.log(result)

// match methods: 
// return the aaray of the match value or null if no match is found
// let words = " welcom to JavaScript course"
// let search = "JavaScript"
// let result = words.match("JavaScript")
// console.log(result)

// interview questions in strings

//01 write a javascript functions that prints  the letters a to z in the console

// for(let i = 97; i<=122; i++){
    // console.log(String.fromCharCode(i).toUpperCase())
// }


// // 02 :  write a functions to count the number of vowels in a strings?

// const countVowels = (str) =>{
//     let vowels = "aeiou"
//     let count = 0;
//     for(let char of str ){
//         if(vowels.includes(char)){
//             count++
//         }
//     }
//     return count
// }   
// console.log(countVowels("photosynthesis"))

// math.ceil:  return the value of x rounded up to its nearest integers.

let ceil = Math.ceil(4.6)
console.log(ceil)