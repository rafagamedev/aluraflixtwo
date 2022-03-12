function adicionarFilme(){
    
    let filmeFavorito = document.getElementById("inserir").value;

    if(filmeFavorito.endsWith(".jpg")){
        listarFilmes(filmeFavorito);
    }else{
        alert("Erro, imagem digitada não é válida!")
    }

    document.getElementById("inserir").value = "";
}

function listarFilmes(filme){
    let elementoFavorito = "<img src=" + filme + ">";
    let elementoListaFilmes = document.getElementById("listaFilmes");

    elementoListaFilmes.innerHTML += elementoFavorito;
}