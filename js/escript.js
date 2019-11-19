function validate() {
  var op = document.querySelector('input[name="ans"]:checked').value;
  if (op=="option2") {
     window.location="exam1.html";
}
else{
  window.location="exam2.html";
}

}
