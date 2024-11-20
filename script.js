
let indiceAtual = 0;
const descs = [
    '',
    '',
    '']
const imagens = [
    "./imgs/arduino/prototipoDiagonal.jpeg",
    "./imgs/arduino/prototipoDeLado.jpeg",
    "./imgs/arduino/prototipoDeCima.jpeg"];
function mudarImagem() {
    if (indiceAtual < imagens.length-1){
        console.log("Mensagem teste")
        indiceAtual+=1
    }
    else {
        indiceAtual = 0
    };

    document.getElementById("desc").innerHTML = descs[indiceAtual];
    document.getElementById("imagem").src = imagens[indiceAtual];
}






