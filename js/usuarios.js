
var key = "Usuarios";

function CadastrarUsuario(nome, email){

    // Obtém a lista de todos os Cookies
    var Usuarios = ObterCookie(key);
    console.log("Usuarios : ", Usuarios);

    var novoUsuario = nome + "#" + email;

    console.log("Novo Usuario : ", novoUsuario);

    GravarCookie(key, novoUsuario);


    var Usuarios2 = ObterCookie(key);
    console.log("Usuarios 2 : ", Usuarios2);
}




