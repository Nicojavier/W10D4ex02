// Elementos que necesitaremos del html
const numero = document.querySelector('#numero');
const sendBtn = document.querySelector('#sendBtn');
const blockMsg = document.querySelector('#blockMsg');
const blockHistory = document.querySelector('#blockHistory');
const counterTxt = document.querySelector('#counterTxt');


//Calculador de numeros random
let numRandom = "95"

Math.floor(Math.random() * 100) + 1;

//Contador de intentos
let counter = 0;
const limit = 10;

// Añadimos los eventos
sendBtn.addEventListener('click', () => {
    if(numero.value === numRandom){
        alert("¡Has Ganado!");
        numero.setAttribute('disabled', true);
        sendBtn.setAttribute('disabled', true);
        blockMsg.innerText = "Felicidades!";

    }else if(numero.value > numRandom){
        blockMsg.innerText = "Número muy alto!";
        counter++;
        let p = document.createElement("p");
        p.innerText = `Intento ${counter}: ${numero.value}`;
        blockHistory.appendChild(p);
        counterTxt.innerText = counter;

    }else{
        blockMsg.innerText = "Numero muy bajo!";
        counter++;
        let p = document.createElement("p");
        p.innerText = `Intento ${counter}: ${numero.value}`;
        blockHistory.appendChild(p);
        counterTxt.innerText = counter;
    }
       if(counter >= 10){
            alert("¡Has perdido!");
            numero.setAttribute('disabled', true);
            sendBtn.setAttribute('disabled', true);
            blockMsg.innerText = `El número correcto era ${numRandom}.`;
        } 
});