function validateForm() {
  var x = document.forms["myForm"]["yourName"].value;
  var y = document.forms["myForm"]["yourEmail"].value;
  var z = document.forms["myForm"]["yourTitle"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  else if (y == "") {
    alert("Email must be filled out");
    return false;
  }
  else if (z == "") {
    alert("Title must be filled out");
    return false;
  }
  return true;
}


