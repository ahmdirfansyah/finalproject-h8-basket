function validateForm() {
  var w = document.forms["myForm"]["name"].value;
  var x =document.forms["myForm"]["email"].value;
  var y =document.forms["myForm"]["subject"].value;
  var z =document.forms["myForm"]["message"].value;
  if (w == "" || x == "" || y == "" || z=="") {
    alert("Must be filled out");
    return false;
  }
  else{
    let name = document.getElementById('name').value;
    alert("Terima Kasih " + name + " atas partisipasinya !");
  }
}
