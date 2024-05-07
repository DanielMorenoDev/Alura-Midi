function playSonidoPom (){
    document.querySelector('#sonido_tecla_pom').play();

}
const listasDeTeclas = document.querySelectorAll('.tecla');

listasDeTeclas [0].onclick = playSonidoPom;

/* document.querySelector('.tecla_pom').onclick = playSonidoPom; */

