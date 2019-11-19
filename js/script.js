
function displayresult(){
	var loger = document.getElementById("stlog").value;
	var usr = document.getElementById("usr").value;
	var pswd = document.getElementById("pswd").value;

		if(loger == "Student"){
			if(usr == "user" && pswd=="user"){
				window.location="exam.html"
				}
			else{
				alert("Enter a valid username & password")
			}
			}
			if(loger == "Teacher"){
				if(usr == "admin" && pswd=="admin"){
					window.location="admin.html"
					}
				else{
					alert("Enter a valid username & password")
				}
				}

}
function reg(){
	window.location="reg.html";
}
