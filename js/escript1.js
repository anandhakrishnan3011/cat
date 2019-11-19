function validate(){
  var op = document.querySelector('input[name="ans"]:checked').value;
  if (op=="option2") {
     window.location="presult.html";
}
else{
  window.location="exam3.html";
}
}
