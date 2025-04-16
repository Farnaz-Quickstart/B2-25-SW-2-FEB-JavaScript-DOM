/*
addEventListener: 
Reference: https://www.w3schools.com/jsref/dom_obj_event.asp
Review
Option 1: Named function
Option 2: Anonymous function, function expression
Option 3: Arrow function
*/


function func1 (myVar) {
  console.log (myVar)
}

const func2 = function (myVar) {
  console.log (myVar)
}

const func3 = (myVar) => {
  console.log (myVar)
}

func1 ("Hi")
func2 ("How are you")
func3 ("My name is Omar")

function handleSubmit ()  {
  console.log ("Hi")
}

document.getElementById ("btn_submit2").addEventListener ("click", handleSubmit)

document.getElementById ("btn_submit2").addEventListener ("click", function() {
  console.log ("How are you")
})

document.getElementById("btn_submit2").addEventListener ("click", ()=>{
  console.log ("My name is Farnaz")
})

document.getElementById ("btn_submit3").addEventListener ("click", function(event) {
  console.log (event)
})
