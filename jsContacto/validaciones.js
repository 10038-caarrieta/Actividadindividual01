const form = document.getElementById("FormContacto");
const expresion = {
	email:  /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i, // Correo Electronico.
	Telef: /^\d{10}$/
	
}

function emailValido() {
	var valor = document.getElementById("email").value;
	var vlce = false;
	if (!expresion.email.test(valor)){
		alert('Correo Invalido');
		vlce = false;
	}
	else{
		vlce = true;
	}
	return vlce;
}

function telefonoValido(){
	var valor = document.getElementById("telefono").value;
	var vltl = false;
	if(valor.length == 10 && !isNaN(valor)){
		vltl = true;
	}else{
		alert('Digite el numero correcto');
	}
	return vltl;
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*2000);
    });
}

function validar(){
	if(emailValido() && telefonoValido()){
		alert("Informacion Valida ");
		return true;
	}else{
		return false;
	}
}

async function deshabilitar(){
	if(validar() == true){
		var btn = document.getElementById('btn');
		btn.disabled = true;
		btn.value = 'Enviando datos...';
		await delay(2);
		btn.form.submit();
	}

}