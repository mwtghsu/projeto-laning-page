
var setaDireita = window.document.getElementById("seta-direita");
var Leonardo = window.document.getElementById("Leonardo");
var Bruna = window.document.getElementById("Bruna");
var Samanta = window.document.getElementById("Samanta");
var setaEsquerda = window.document.getElementById("seta-esquerda");

function RolarParaDireita() {
    Leonardo.style.display = "none";
    Samanta.style.display = "flex";
    setaDireita.style.display = "none";
    setaEsquerda.style.display = "flex";
}

function RolarParaEsquerda() {
    Leonardo.style.display = "flex";
    Samanta.style.display = "none";
    setaDireita.style.display = "flex";
    setaEsquerda.style.display = "none";
    setaDireita.style.marginRight = "65%";
    ;

}