


function VerificarCookiesHabilitados(){
    
    if(!navigator.cookieEnabled){
        alert("Cookies Desabilitados !");
        return;
    }

    console.log("Cookies Habilitados !");
}



function ObterTodosCookies(){
    // Obtém a lista de todos os Cookies
    console.log("Lista de Cookies : ", document.cookie);
    return document.cookie;    
}



function ObterCookie(key){
    
    // Verifica se o nome da chave e o valor do Cookie são válidos.
    if(key == null){
        alert("Obter Cookie : Nome da Chave é inválido !");
        return;
    }

    // Obtém a lista de todos os Cookies
    var allCookies = ObterTodosCookies().split(";");
    console.log("Lista de Cookies : ", allCookies);    
}



function GravarCookie(key, value){
    
    // Não grava o Cookei se a chave ou o valor for nulo.
    if(key == null){
        alert("Gravar Cookie : Nome da Chave é inválido !");
        return;
    }
    if(value == null){
        alert("Gravar Cookie : Valor da Chave é inválida !");
        return;
    }

    // Configura o Cookie para expirar em 1 Ano
    var data = new Date();
    data.setFullYear(data.getFullYear() + 1);

    // Cria Cookie
    var temp = key + "=" + value + "; expires=" + data.toUTCString() + "; path=/;";
    document.cookie = temp;
    console.log("Cookie sendo Gravado : ", temp);    
}



function ApagarCookie(key){
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}



