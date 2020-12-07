/* ================================================================================ */

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


/* ================================================================================ */
 //Get the button
var mybutton = document.getElementById("toTopButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
} 

/* ================================================================================ */