
console.log (document.querySelector ("p"))
console.log (document.querySelectorAll("p"))


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


