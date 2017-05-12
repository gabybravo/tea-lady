function mostrarData(){
	var validar = validarForm();
	if (validar == true){
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var email = document.getElementById("mail").value;
	var direccion = document.getElementById("direccion").value;
	var fono = document.getElementById("fono").value;

	var mostrar = document.getElementById("clientes");
	mostrar.innerHTML = "<br> Nombre: " + nombre + "<br> Apellido: " + apellido + "<br> Email: " + email + "<br> Dirección: " + direccion + "<br> Teléfono: " + fono;
} else {
	alert("Faltan datos o hay datos incorrectos.");
}
}

function validarForm(){

if (document.form.nombre.value == "" || document.form.apellido.value == "" || document.form.mail.value == "" ||
	document.form.direccion.value == "" || document.form.fono.value == "" || document.form.check.checked==0 || 
	document.form.opciones.selectedIndex==0){
	return false;
} else {
	return true;
}

}