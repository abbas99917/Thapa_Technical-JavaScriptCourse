// // what is array?
// // array in javascrpt is an object that represent a collections of similar types of data

// // let arr = ["apple","mango","peach"]
// // arr.push("banana")
// // arr[4] = "grapes"
// // console.log(arr)

// // iterating on arrays
// let arr = ["apple","mango","peach","grapes","banana"]

// for(let val of arr){ 
//     console.log(val)
// }

// for(let val in arr){
//     console.log(val) // access indixces
// }

// forEach loop  // map

// let array = ["apple","mango","peach","grapes","banana"]
// array.forEach((curVal)=>{ // perform on action on each elements
// console.log(curVal)
// })

// map methods

// let array = ["apple","mango","peach","grapes","banana"]

//  const newARR = array.map((curVal,index)=>{ // create a new array with transform elemetns
//     return `${curVal} ${index}`;

// })
// console.log(newARR)

// let number= [1,2,3,4,5]
// let final = number.map((curVal, index)=>{
//     return `${curVal * 2}`
// })
// console.log(final)

// number.forEach((cur)=>{
//     console.log(cur * 2)
// })

// // find methods
// let arr1 =  [1,2,3,4,5,4,6,8,7,10]
// let result = arr1.find((curElem)=>{
//   return  curElem > 6;
// })
// console.log(result)


// let arr1 =  [1,2,4,7,6,8,7,10]
// let value = 7
// let updated = arr1.filter((curElem)=>{
//     return curElem !== value
// })
// console.log(updated)

// const products = [
//     {name: "laptop", price: "3000"},
//     {name: "mobile", price: "30000"},
//     {name: "camera", price: "300"},
//     {name: "speaker", price: "3100"}
// ]

// let result = products.filter((curElem)=>{
//     return curElem.price <=300;
// })
// console.log(result)

// filter unique values

let arr1 =  [1,2,4,7,6,8,7,10]

// let uniqueValue = arr1.filter((curElem, index,arr)=>{
//     return arr.indexOf(curElem) === index;
// })
// console.log(uniqueValue)
console.log(... new Set(arr1))
