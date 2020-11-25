function validateForm() {
  var x = document.forms["myForm"]["yourName"].value;
  var y = document.forms["myForm"]["yourEmail"].value;
  var z = document.forms["myForm"]["yourTitle"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  if (y == "") {
    alert("Email must be filled out");
    return false;
  }
  if (z == "") {
    alert("Title must be filled out");
    return false;
  }
}