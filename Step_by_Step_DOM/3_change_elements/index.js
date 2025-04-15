// Changing HTML Elements
// Reference: https://www.w3schools.com/js/js_htmldom_document.asp


function handleClick_changeList () {
  let arrItems = document.getElementsByClassName ("list-group-item")
  for (let index=0; index< arrItems.length; index++) {
    arrItems[index].textContent = "Hi"
  }
}

function handleClick_changeRB () {
  console.log ("TESTED")
  let arrItems = document.getElementsByName ("fav_language")
  arrItems[1].checked = "true"
  for (let index=0; index< arrItems.length; index++) {
    console.log (index)
    console.log (arrItems[index])
    arrItems[index].checked = "true"
  }
}

function handleClick_changeImage() {
  //document.getElementById("img_profile1").src = "https://news.clemson.edu/wp-content/uploads/2023/06/ocean.jpg"
  let arrItems = document.getElementsByTagName ("img")
  arrItems[0].src = "https://news.clemson.edu/wp-content/uploads/2023/06/ocean.jpg"
}





