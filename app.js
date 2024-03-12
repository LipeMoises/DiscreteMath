const joamar = document.querySelector(".logo h3");

joamar.addEventListener("click", atualizarNome);

function atualizarNome() {
    var nome = prompt("Insira uma sugestão");
    joamar.textContent = "FeJoaMar " + nome 
}