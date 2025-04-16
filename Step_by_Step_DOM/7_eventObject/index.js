document.getElementById("btnSubmit").addEventListener("click", function (event) {
  console.log (event)
  console.log("Target:", event.target); // <button>
  console.log("Type:", event.type);     // "click"
})

document.getElementById("txtFirstName").addEventListener("keydown", function (event) {
  console.log (event.target)
  console
})