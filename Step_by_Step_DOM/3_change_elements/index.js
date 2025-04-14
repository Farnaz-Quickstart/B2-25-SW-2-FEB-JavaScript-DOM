// Changing HTML Elements
// Reference: https://www.w3schools.com/js/js_htmldom_document.asp

function handleClick_changeList() {

  let arrItems = document.getElementsByClassName ("list-group-item")
  
  for (let index = 0; index< arrItems.length ; index++ ) {
   arrItems[index].textContent= "Hi"
   arrItems[index].innerHTML = "Hi <strong>How are you</strong>"
  }
}


function handle_changeRdioButton() {
  let arrItems = document.getElementsByName("fav_language")
  for (index=0; index< arrItems.length; index++) {
    if (arrItems[index].value=="CSS") {
      arrItems[index].checked='true'
      arrItems[index].style.backgroundColor = "green"
    }
  }
}


function handle_changeImage() {
  document.getElementById("img_profile1").src="https://cdn.prod.website-files.com/604a97c70aee09eed25ce991/61897a35583a9b51db018d3e_MartinPublicSeating-97560-Importance-School-Library-blogbanner1.jpg"
}






