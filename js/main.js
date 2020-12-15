const tarjeta = document.querySelector('#tarjeta'),
      btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
      formulario = document.querySelector('#formulario-tarjeta'),
      numeroTarjeta = document.querySelector('#tarjeta .numero'),
      nombreTarjeta = document.querySelector('#tarjeta .nombre'),
      logoMarca = document.querySelector('#logo-marca'),
      firma = document.querySelector('#tarjeta .firma p'),
      mesExpiracion = document.querySelector('#tarjeta .mes'),
      yearExpiracion = document.querySelector('#tarjeta .year');
      ccv = document.querySelector('#ccv .ccv');

// Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
  tarjeta.classList.toggle('active');
});

//Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () =>{
  btnAbrirFormulario.classList.toggle('active');
  formulario.classList.toggle('active');
});

//mostrar frente de tarjeta
const mostrarFrente = () => {
  if(tarjeta.classList.contains('active')){
    tarjeta.classList.remove('active');
  }
}

//

//Select del mes dinamico
for(let i = 1; i <= 12; i++){
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectMes.appendChild(opcion);
}

//Select del año dinamico
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 10; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}

//Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) =>{
  let valorInput = e.target.value;

  //utilizando expresiones regulares
  formulario.inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
  .trim();
  
  //agrega el numero del input numero de tarjet a la tarjeta
  numeroTarjeta.textContent = valorInput;

  //valida si el input esta vacio
  if (valorInput == ''){
    numeroTarjeta.textContent = '#### #### #### ####'
    logoMarca.innerHTML = '';
  }

  //valida si la marca de tarjeta que es 
  if(valorInput[0] == 4){
    logoMarca.innerHTML = '';
    const imagen = document.createElement('img');
    imagen.src = 'img/logos/visa.png';
    logoMarca.appendChild(imagen);
  }else if(valorInput[0] == 5){
    logoMarca.innerHTML = '';
    const imagen = document.createElement('img');
    imagen.src = 'img/logos/mastercard.png';
    logoMarca.appendChild(imagen);
  }else if(valorInput[0] == 3){
    logoMarca.innerHTML = '';
    const imagen = document.createElement('img');
    imagen.src = 'img/logos/american-express.png';
    logoMarca.appendChild(imagen);
  }

  mostrarFrente();
});

//input nombre tarjeta
formulario.inputNombre.addEventListener('keyup' , (e) =>{
  let valorInput = e.target.value;

  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');

  //agrega el nombre a la tarjeta 
  nombreTarjeta.textContent = valorInput;
  //generando firma en el reves de la tarjeta
  firma.textContent = valorInput;
  //valida si el input esta vacio
  if (valorInput == ''){
    nombreTarjeta.textContent = 'Jhon Doe';
    logoMarca.innerHTML = '';
  }

  mostrarFrente();
});

//select mes 
formulario.selectMes.addEventListener('change', (e) =>{
  mesExpiracion.textContent = e.target.value;
  mostrarFrente();
});

//select año mostrando los dos ultimos digitos del año
formulario.selectYear.addEventListener('change', (e) =>{
  yearExpiracion.textContent = e.target.value.slice(2);
  mostrarFrente();
});

//ccv codigo de seguridad tarjeta parte trasera
formulario.inputCcv.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCcv.value = formulario.inputCcv.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCcv.value;
});



