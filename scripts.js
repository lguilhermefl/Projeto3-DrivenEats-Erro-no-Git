function marcarProduto (produto) {

    //ARMAZENA PRODUTO SELECIONADO DA CATEGORIA CLICADA
    const selecionado = produto.parentElement.querySelector(".selecionado");

    //VERIFICA SE O PRODUTO ESTÁ SELECIONADO
    if (selecionado !== null) {
        //REMOVE A CLASSE SELECIONADO DO PRODUTO E ESCONDE MARCADOR
        selecionado.classList.remove("selecionado");
        selecionado.querySelector(".check").classList.add("escondido");
    } 
    //VERIFICA SE NOVA SELEÇÃO DE PRODUTO É DIFERENTE DA ANTERIOR
    if (selecionado !== produto) {
        //ADICIONA A CLASSE SELECIONADO DO PRODUTO E MOSTRA MARCADOR
        produto.classList.add("selecionado");
        produto.querySelector(".check").classList.remove("escondido");
    }

}