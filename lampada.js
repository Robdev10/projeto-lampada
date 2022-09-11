const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lamp = document.getElementById('lamp')


function verificarlamp(){
    return lamp.src.indexOf('quebrada') > - 1
}

function ligarlampada(){
    if(!verificarlamp()){
        lamp.src='./ligada.jpg';

    }
}

function desligarlampada(){
    if(!verificarlamp()){
        lamp.src='./apagada.jpg';
    }
}

function lampadaquebrada(){

    lamp.src='./quebrada.jpg'
}


ligar.addEventListener('click', ligarlampada);
desligar.addEventListener('click',desligarlampada)
lamp.addEventListener('mouseover', ligarlampada )
lamp.addEventListener('mouseleave' , desligarlampada )
lamp.addEventListener ('dblclick' , lampadaquebrada)