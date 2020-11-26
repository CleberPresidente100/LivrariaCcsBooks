


function VerificarCookiesHabilitados(){
    
    if(!navigator.cookieEnabled){
        alert("Cookies Desabilitados !");
        return false;
    }

    console.log("Cookies Habilitados !");

    return true;
}



function ObterTodosCookies(){
    // Obtém a lista de todos os Cookies
    console.log("Lista de Cookies : ", document.cookie);
    return document.cookie.split(";");    
}



function ObterCookie(key){
    
    // Verifica se o nome da chave e o valor do Cookie são válidos.
    if(key == null){
        alert("Obter Cookie : Nome da Chave é inválida !");
        return null;
    }

    console.log("ObterCookie Key: ", key);


    // Obtém a lista de todos os Cookies
    var allCookies = ObterTodosCookies();
    console.log("Lista de Cookies : ", allCookies);

    var chaveEncontrada = null; 
    allCookies.forEach(function(item){

        var cookie = item.split("=");
        if(cookie[0].trim() == key.trim()){
            chaveEncontrada = cookie[1];
            return;
        }
    });

    return chaveEncontrada;
}



function GravarCookie(key, value){
    
    // Não grava o Cookei se a chave ou o valor for nulo.
    if(key == null){
        alert("Gravar Cookie : Nome da Chave é inválido !");
        return false;
    }
    if(value == null){
        alert("Gravar Cookie : Valor da Chave é inválida !");
        return false;
    }

    // Configura o Cookie para expirar em 1 Ano
    var data = new Date();
    data.setMonth(data.getMonth() + 1);

    // Cria Cookie
    var temp = key + "=" + value + "; expires=" + data.toUTCString() + "; path=/;";
    document.cookie = temp;
    console.log("Cookie sendo Gravado : ", temp);
    
    return true;
}



function ApagarCookie(key){
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}



