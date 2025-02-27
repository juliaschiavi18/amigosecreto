let amigos = [];

function adicionarAmigo() {
    console.log('botao okay');
}

if (adicionarAmigo() === "") {
  alert("Por favor, insira um nome.");
}

amigos.push(amigos);{
document.getElementById("nomeAmigo"); 
atualizarListaAmigos();
}

function atualizarListaAmigos() {
const lista = document.getElementById("listaAmigos");
lista.innerHTML = "";

for (let amigo of amigos) {
  const itemLista = document.createElement("li");
  itemLista.textContent = amigo;
  lista.appendChild(itemLista);
}
}

function sortearAmigo() {
  console.log('botao sim');
if (adicionarAmigo.length === 0) {
  alert("Adicione amigos antes de sortear.");
  return;
}

const indiceAleatorio = Math.floor(Math.random() * amigos.length);
const amigoSorteado = amigos[indiceAleatorio];
document.getElementById("amigoSorteado").textContent; 
}