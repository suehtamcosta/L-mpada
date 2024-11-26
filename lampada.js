const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1 // pesquisa a plavra quebrada no src, verdadeiro quando é maior que -1, ou seja, procurar quebrada quando verdadeiro (maior que -1)
    // verificar quando a lâmpada estiver quebrada (pesquisa pelo nome), quando nao encontra traz -1
    // condição vai ser verdadeira quando tiver mensagem quebrado no src (> -1) e falsa quando nao tiver
}

function lampOn () {
    if( !isLampBroken () ) { // quando nao tiver quebrada vai fazer a troca pra ligada
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if( !isLampBroken () ) { // quando nao tiver quebrada vai fazer a troca pra desligada
        lamp.src = './img/desligada.jpg';
    }    
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff () {                         
    if (turnOnOff.textContent == 'Ligar') { //funcao que procura no texto conteudo de ligar
        lampOn();                           // se verdadeiro (achar o texto) chama a funcao de ligar 
        turnOnOff.textContent = 'Desligar'; // muda o texto para desligar
    } else {                      
        lampOff();                         // senao (for falso)  chama a funcao de desligar e muda o texto para ligar
        turnOnOff.textContent = 'Ligar';
    }
}

turnOnOff.addEventListener('click', lampOnOff); // quando alguém clicar exute a funcao para lampada ligar
lamp.addEventListener('mouseover', lampOn); // quando mouse passar em cima a lampada liga
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken); // eventoo dupolo click vai quebrar a lâmpada