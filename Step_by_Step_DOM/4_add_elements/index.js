// Adding HTML Elements
// Step 1: Create element
// Step 2: Add element to the page (appending)
// Reference: https://www.w3schools.com/js/js_htmldom_document.asp


function handleClick_addElement  () {
  // Step 1: Create element
  const newElement = document.createElement ("p")
  newElement.textContent = "This is our class"

  // Step 2: Add element to the page
  document.getElementById("sectionProfile").append(newElement)
}

function handleClick_addImage (){
  // Step 1: Create element
  const newElement = document.createElement ("img")
  newElement.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggTu7DsNwN06djRJalUksB-4Ev7Od5gqiLK3tGUianJl7nbaRoUcOpxpOSlfVMmt4l2bBQejcsUfEqP_AJp0j_fZDzXftR7fz_wZ2-SBFA1NaaFVBSVQAyMZR6NJO14iRApHY7mW5NYbg/w1200-h630-p-k-no-nu/Library.png"
  
  // Step 2: Add element to the page (appending)
  document.getElementById("sectionProfile").append(newElement)
}