function validateForm() {
  var x = document.forms["myForm"]["Your Name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}