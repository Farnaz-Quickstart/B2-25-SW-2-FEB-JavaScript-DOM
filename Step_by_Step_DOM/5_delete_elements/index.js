// Adding HTML Elements
// Reference: https://www.w3schools.com/js/js_htmldom_document.asp

function addElements() {
  let newElement = document.createElement('img')
  newElement.src = 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?cs=srgb&dl=pexels-sebastian-189349.jpg&fm=jpg'
  newElement.className = "profileImage"

  document.getElementById("section_image").append(newElement)
}

function deleteElements () {
   const arrElements = document.getElementsByTagName("img")

   for (let index=0; index < arrElements.length; index++) {
    arrElements[index].remove()
   }
}






