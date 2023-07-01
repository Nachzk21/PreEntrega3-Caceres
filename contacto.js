/*Capturo elementos provenientes del DOM*/
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

/*Defino las caracteristicas (sacadas de google) que tienen que tener los campos "correo" y "telefono" para luego poder validarlos */
const expresiones = {
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
	correo: false,
	telefono: false
}

/*Función para validar el formulario cuando se ingresan datos en cada uno de los campos*/

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}
/*Función para validar un campo utilizando las expreciones regulares previamente definidas, agrega un icon de un circulo en rojo si detecta que algo esta mal y en vede si esta bien */

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
/*aregua  un evento listener al formulario para validar y enviar los datos*/
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.correo && campos.telefono && terminos.checked ){
		pasarAJSON();
		formulario.reset();

		

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);	

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
})


/*Funcion para que los datos ingresados en el formulario se guarden en el local storage*/

function pasarAJSON (){
	const nombre = document.getElementById('nombre').value;
	const apellido = document.getElementById('apellido').value;
	const correo = document.getElementById('correo').value;
	const telefono = document.getElementById('telefono').value;

	localStorage.setItem('nombre', nombre);
	localStorage.setItem('apellido', apellido);
	localStorage.setItem('correo', correo);
	localStorage.setItem('telefono', telefono);
}

