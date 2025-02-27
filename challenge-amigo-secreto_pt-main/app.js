let  listaDeAmigos =[];
function adicionarAmigo() {
   
    const nomeAmigo = document.getElementById("nomeAmigo").value;
  
    
    if (nomeAmigo.trim() === "") {
     
      alert("Por favor, insira um nome.");
      return;
    }
  
    
    listaDeAmigos.push(nomeAmigo);
  
    
    document.getElementById("nomeAmigo").value = "";
  
    
    atualizarListaDeAmigos();
  }
  
  function atualizarListaDeAmigos() {
    const listaAmigosElement = document.getElementById("listaAmigos");
    listaAmigosElement.innerHTML = ""; 
  
    listaDeAmigos.forEach((amigo) => {
      const itemLista = document.createElement("li");
      itemLista.textContent = amigo;
      listaAmigosElement.appendChild(itemLista);
    });
  }