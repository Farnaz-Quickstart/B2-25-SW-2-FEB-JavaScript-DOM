// getElement by ID
// getElement by classname
// getElement by tagName

function handleChangeText () {
  document.getElementById ("paragraph1").innerText = "This is our class"
}

function handleChangeColor () {
  document.getElementById ("paragraph2").style.backgroundColor = "red"
}

function handleChangeParagraphs1 () {
  let arrColors = document.getElementsByClassName("green")
  for (let index=0; index < arrColors.length; index++) {
  
    arrColors[index].style.backgroundColor = "yellow"
    arrColors[index].textContent = `Hello ${index}`
    arrColors[index].innerHTML = "Hello, How are you, My name is <strong>Usman</strong>"
  }  
}

function handleChangeParagraphs2 () {
  let arrColors = document.getElementsByTagName("p")
  for (let index=0; index < arrColors.length; index++) {
  
    arrColors[index].style.backgroundColor = "red"
    arrColors[index].textContent = `Hello ${index}`
    arrColors[index].innerHTML = "Hello, How are you, My name is <strong>Usman</strong>"
  }  
  document.getElementsByTagName("p")[0].style.backgroundColor = "black"
  document.getElementsByTagName("p")[0].style.color = "white"
}















// let colors = ["blue", "black", "green"]
// // console.log (colors[0])
// // console.log (colors[1])
// // console.log (colors[2])

// for (let index=0; index<colors.length; index++) {
//   console.log (index)
//   console.log (colors[index])
// }









