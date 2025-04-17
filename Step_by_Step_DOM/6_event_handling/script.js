/*
addEventListener: 
Reference: https://www.w3schools.com/jsref/dom_obj_event.asp
Review
Option 1: Named function
Option 2: Anonymous function, function expression
Option 3: Arrow function
*/

// Event Listener with Named function
document.getElementById("btn_submit1").addEventListener ("click", greetingClass)

// Event Listener using Anonymous function
document.getElementById("btn_submit2").addEventListener ("click", function() {
  console.log ("Hi")
  console.log ("This is class2")
})

// Event Listener using arrow function
document.getElementById("btn_submit3").addEventListener ("click", ()=>{
  console.log ("Hi")
  console.log ("This is class3")
})


function handleClick_submit () {
  console.log ("Hi")
}

// Named Function
function greetingClass () {
    console.log ("Hi")
    console.log ("This is class1")
}

// Anonymous function, function expression
let greetingClass1 = function () {
  console.log ("Hi")
  console.log ("This is class2")
}

// Arrow function

let greetingClass2 = () => {
  console.log ("Hi")
  console.log ("This is class3")
}

greetingClass();
greetingClass1();
greetingClass2();
