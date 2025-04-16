// Adding HTML Elements
// Step 1: Create element
// Step 2: Add element to the page (appending)
// Reference: https://www.w3schools.com/js/js_htmldom_document.asp


function handleClick_addElement  () {
  debugger;
  // Step 1: Create element
  const para = document.createElement ("p")
  para.textContent = "THIS IS OUR NEW PARAGRAPH"
  para.style.color = "green"
  document.getElementById ("section_aboutme").append (para)
  // Step 2: Add element to the page
  

  // Step 1" Create element
  const newImg = document.createElement ("img")
  newImg.className = "img_profile"
  newImg.src  = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ_q9o7qFlU-S9a71WAjxDSD8kCHtgi3WpBw&s"
  document.body.append (newImg)
}





