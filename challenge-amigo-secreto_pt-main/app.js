let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById("ipt_amigo").value.trim();

    if (amigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(amigo)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(amigo);
    document.getElementById("ipt_amigo").value = "";

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
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("amigoSorteado").textContent = `🎉 Amigo sorteado: ${amigoSorteado} 🎉`;
}