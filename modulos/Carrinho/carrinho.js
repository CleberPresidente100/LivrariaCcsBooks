carrinho = [];

//recebe o ID do livro e conta o número total de produtos no carrinho
function contadorCarrinho(id) {
    numeroProdutos = localStorage.getItem('noCarrinho');
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



    carrinho.push({
        idLivro: id,
        quantidade: 0,
    });
    salvarProdutos(carrinho[carrinho.length-1]);
}

function salvarProdutos(item){
    carregarCarrinho();
    
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
    salvarCarrinho();  
}

//carrega os livros da memória local
function carregarCarrinho(){
    numeroProdutos = localStorage.getItem('noCarrinho');
    numeroProdutos=parseInt(numeroProdutos);
    produtoCarrinho = localStorage.getItem('produtosNoCarrinho');
    produtoCarrinho = JSON.parse(produtoCarrinho);
}

//salva os livros na memória local
function salvarCarrinho(){
    localStorage.setItem('produtosNoCarrinho', JSON.stringify(produtoCarrinho));
    localStorage.setItem('noCarrinho', numeroProdutos);
    window.location.reload();
}

function diminuirProduto(id){
    carregarCarrinho();
    if(produtoCarrinho[id].quantidade > 1){
        produtoCarrinho[id].quantidade -= 1;
        numeroProdutos -= 1;
    }
    salvarCarrinho();
}

function removerProduto(id){
    carregarCarrinho();
    numeroProdutos -= produtoCarrinho[id].quantidade;
    produtoCarrinho[id].quantidade = 0;
    delete produtoCarrinho[id];
    if(numeroProdutos <= 0){
        localStorage.clear();
        window.location.reload();
    }
    else
        salvarCarrinho();
}