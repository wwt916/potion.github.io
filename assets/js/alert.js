function alertt(form) {
		username = form.username.value;
		password = form.password.value;
		name = form.name.value;
		tel = form.tel.value;
		addr = form.addr.value;
		email = form.email.value;
if(name.length == 0) {
alert("姓名不能為空"); 
}
if(tel.length == 0) {
alert("電話不能為空"); 
}
if(addr.length == 0) {
alert("住址不能為空"); 
}
if(email.length == 0) {
alert("信箱不能為空"); 
}
if (username.length == 0) 
{ 
alert("帳號不能為空"); 
}
if(password.length == 0) {
alert("密碼不能為空"); 
}

}