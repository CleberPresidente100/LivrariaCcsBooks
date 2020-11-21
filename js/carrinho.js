var carrinho = [];

//recebe o ID do livro e conta o número total de produtos no carrinho
function contadorCarrinho(id) {
    let numeroProdutos = localStorage.getItem('noCarrinho');
    numeroProdutos=parseInt(numeroProdutos);
    if(numeroProdutos > 0)
        localStorage.setItem('noCarrinho', numeroProdutos + 1);
    else
        localStorage.setItem('noCarrinho', 1);
    adicionarCarrinho(id);
 };


function adicionarCarrinho(id) {
    teste = 0;
    //caso já haja itens no carrinho, procura o item que foi selecionado
    if(carrinho.length > 0){ 
        carrinho.forEach(function(item){
            if(item.idLivro.toUpperCase() == id.toUpperCase()){
                salvarProdutos(item);
                teste = 1;
            }
        });
        //se não for encontrado, adiciona o item
        if(teste == 0)
            adicionarLivro(id)   
    }
    //se não houver itens no carrinho, adiciona o item atual
    else 
        adicionarLivro(id);  
}
//cria a estrutura dos produtos
function adicionarLivro(id){


/*    livro = GetLivro(id);
    if(livro.precoComDesconto == "")
        valor = livro.precoOriginal;
    else
        valor = livro.precoComDesconto  */


    carrinho.push({
        idLivro: id,
        quantidade: 0,
        valor: "",
    });
    salvarProdutos(carrinho[carrinho.length-1]);
}

function salvarProdutos(item){
    let produtoCarrinho = localStorage.getItem('produtosNoCarrinho');
    produtoCarrinho = JSON.parse(produtoCarrinho);
    //checa se há livros na memória local
    
    if(produtoCarrinho != null){
        //se há livros na memória, mas não é o selecionado, o adiciona na lista
         if(produtoCarrinho[item.idLivro] == undefined){  
            item.quantidade += 1;
            produtoCarrinho = {
                ...produtoCarrinho,
                [item.idLivro]: item
            }
        }
        //se for um livro já salvo, soma na quantidade
        else{
            produtoCarrinho[item.idLivro].quantidade += 1;  
        }
    }
    //caso seja o primeiro livro selecionado, cria a lista
    else{  
        item.quantidade +=1;
        produtoCarrinho = {
            [item.idLivro]: item
        }
    }
    //salva a lista de produtos na memória local
    localStorage.setItem('produtosNoCarrinho', JSON.stringify(produtoCarrinho));  
}