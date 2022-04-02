function marcarProduto(produto) {

    const selecionado = produto.parentElement.querySelector(".selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        selecionado.querySelector(".check").classList.add("escondido");
    }
    
    produto.classList.add("selecionado");
    produto.querySelector(".check").classList.remove("escondido");

}