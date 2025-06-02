// Elementos que necesitaremos del html
const numero = document.querySelector('#numero');
const sendBtn = document.querySelector('#sendBtn');
const blockMsg = document.querySelector('#blockMsg');
const blockHistory = document.querySelector('#blockHistory');
const counterTxt = document.querySelector('#counterTxt');


//Calculador de numeros random
let numRandom = Math.floor(Math.random()*100)+1;

//Contador de intentos
let counter = 0;
const limit = 10;

// Añadimos los eventos
sendBtn.addEventListener('click', () => { 
    if(numero.value === numRandom){
        alert("Felicidades!");
        blockMsg.innerText = "Numero Correcto, Felicidades!";
        numero.setAttribute('disabled', true);
        sendBtn.setAttribute('disabled', true);
    }else{
        //Aumenta uno al contador
        counter++;
        counterTxt.innerText = counter;
        //Agrega el historial
        let p = document.createElement("p");
        p.innerText = `Intento ${counter}: ${numero.value}`;
        blockHistory.appendChild(p);
    
        // Límite de eventos y Perdida
        if (counter >= 10){
            alert("¡Has perdido!");
            numero.setAttribute('disabled', true);
            sendBtn.setAttribute('disabled', true);
            blockMsg.innerText = `El número correcto era ${numRandom}.`;
        } 
}
});