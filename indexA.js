function Desctop (){
	for (var i=1;i<=3;i++){
		switch (i){
		case 1:
		alert("Help to the elder:)");
		break;
		case 2:
		alert("Help of the elder:(");
		break;
		default:
		alert("Independent egoist");
	}	
	}	
}
function Project(){
	var form = document.forms.Sign;
	var login = form.elements.Login;
	var password = form.elements.Password;
	alert( login.value +" "+ password.value);
}