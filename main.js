function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play();

}
const listasDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < 9){
    const tecla = listasDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(instrumento)

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)


    tecla.onclick = function (){
       playSonido(idAudio);
    } 
    contador = contador + 1
    console.log('vueltas ' +  contador)
}