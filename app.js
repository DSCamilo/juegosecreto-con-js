//AluraCursos
//ONE - Oracle Next Education
//2024

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asginarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;   
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario===numeroSecreto) {
        asginarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos==1) ? 'intento' : "intentos"}` ); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroDeUsuario > numeroSecreto) {
            asginarTextoElemento('p', 'El número secreto es menor');
        }else{
            asginarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCampo();
    }
    return;
}

function limpiarCampo(params) {
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1); //10 numero maximo,+1 que empiece desde 1, 1 a 10;
    if (listaNumerosSorteados.length == numeroMaximo) {
        asginarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        
    } else {
         //Si el numero generado está incluido en la lista, uso de recursividad
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
        
    }
}

function condicionesIniciales() {
    asginarTextoElemento('h1', "Juego del numero secreto");
    asginarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    //Generar numero secreto
    numeroSecreto = generarNumeroSecreto();
    //Inicializar numero de intentos
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCampo();
    //Reiniciar condiciones iniciales
    condicionesIniciales();
    //Deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();


