let inputfield = document.getElementById("inputfield")
let btn = document.getElementById("btn")
let parent = document.getElementById("parent")


// addtodo

const addTodo = () =>{

let para = document.createElement("p")
para.innerText = inputfield.value;
parent.append(para)
inputfield.value = ""

  
}

// add elements
btn.addEventListener("click",()=>{
    addTodo()

})


// remove elements
parent.addEventListener("click",(event)=>{
//   console.log(event.target)
    let curElem = event.target;
    curElem.remove()
 
})