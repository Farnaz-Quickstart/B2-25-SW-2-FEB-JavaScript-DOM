
// document.getElementById ("p1").textContent = "hello how are you?????????"

function handleChangText () {

  let arr_Paragraphs = document.getElementsByClassName("paragraph2")

  for (let index=0 ; index< arr_Paragraphs.length; index++){
    arr_Paragraphs[index].textContent = "Hello"
  }
}

function handleChangColor() {
  let arr_Paragraphs = document.getElementsByClassName("paragraph2")

  for (let index=0 ; index< arr_Paragraphs.length; index++){
    console.log (arr_Paragraphs[index])
    arr_Paragraphs[index].style.backgroundColor = "blue"
  }
}

// let colors = ["black", "blue", "red", "white"]

// for (let index=0; index< colors.length; index++) {
//   console.log (colors[index])
// }

