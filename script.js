// Elementos que necesitaremos del html
const numero = document.querySelector('#numero');
const sendBtn = document.querySelector('#sendBtn');
const blockMsg = document.querySelector('#blockMsg');
const blockHistory = document.querySelector('#blockHistory');
const counterTxt = document.querySelector('#counterTxt');
const resetBtn = document.querySelector('#resetBtn');

//Calculador de numeros random
let numRandom = Math.floor(Math.random() * 100) + 1;

//Contador de intentos
let counter = 0;
const limit = 10;

// Añadimos los eventos
sendBtn.addEventListener('click', () => {   //Valor correcto
    if(parseInt(numero.value) === numRandom){
        alert("¡Has Ganado!");
        numero.setAttribute('disabled', true);
        sendBtn.setAttribute('disabled', true);
        blockMsg.innerText = "Felicidades!";
        blockMsg.classList = "Correcto";

    }else if(parseInt(numero.value) > numRandom){ // Valor muy alto
        blockMsg.innerText = "Número muy alto!";
        blockMsg.classList = "Incorrecto";
        counter++;
        let p = document.createElement("li");
        p.innerText = `Intento ${counter}: ${numero.value}`;
        blockHistory.appendChild(p);
        counterTxt.innerText = counter;

    }else{  // Valor muy bajo
        blockMsg.innerText = "Numero muy bajo!";
        blockMsg.classList = "Incorrecto";
        counter++;
        let p = document.createElement("li");
        p.innerText = `Intento ${counter}: ${numero.value}`;
        blockHistory.appendChild(p);
        counterTxt.innerText = counter;
    }
       if(counter >= 10){   // Comprueba si llega al limite
            alert("¡Has perdido!");
            numero.toggleAttribute('disabled', true);
            sendBtn.toggleAttribute('disabled', true);
            blockMsg.innerText = `El número correcto era ${numRandom}.`;
        } 
    });

resetBtn.addEventListener('click', () => {   // Reset al Formulario
    counter = 0;
    numRandom = Math.floor(Math.random() * 100) + 1;
    counterTxt.innerText = counter;
    numero.toggleAttribute('disabled', false);
    sendBtn.toggleAttribute('disabled', false);
    blockHistory.innerHTML= "";
    blockMsg.innerText = "";
});