

var nomeTabela = "Usuarios";// Nome da Tabela.
var EndOfRegister = ":";    // Caractere que indica o Fim de um Registro.
var EndOfField = "#";       // Caractere que indica o Fim de um Campo do Registro.
var PosicaoNomeUsuario = 0; // Após a extração do Registro, esta é a Posição do Array onde fica armazenado o Nome do Usuário.
var PosicaoEmail = 1;       // Após a extração do Registro, esta é a Posição do Array onde fica armazenado o E-mail.


function CadastrarUsuario(){
// function CadastrarUsuario(nome, email){

    // console.log("Início Cadastro de Usuários");

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    // Verifica se os campos estão preenchidos
    if(nome == null || email == null){
        alert("Nome de Usuário ou E-mail inválido !");
        return;
    }

    var usuarioJaExiste = ProcurarUsuario(nome, email);

    if(usuarioJaExiste){
        alert("Nome de Usuário ou E-mail já cadastrado !");
        return;
    }
    

    var novoUsuario = nome + EndOfField + email;

    // console.log("Novo Usuario : ", novoUsuario);
    var tabelaUsuarios = LerTabela(nomeTabela);


    var tabelaUsuariosAtualizada = "";

    if(tabelaUsuarios == null){
        tabelaUsuariosAtualizada = novoUsuario;
    }
    else{
        tabelaUsuariosAtualizada = tabelaUsuarios + EndOfRegister + novoUsuario;
    }    

    // console.log("tabelaUsuariosAtualizado : ", tabelaUsuariosAtualizado);

    GravarNaTabela(nomeTabela, tabelaUsuariosAtualizada);


    // var Usuarios2 = LerTabela(nomeTabela);
    // console.log("Usuarios 2 : ", Usuarios2);

    // console.log("Fim Cadastro de Usuários");

}



function ProcurarUsuario(nome, email){

    // Verifica se os campos estão preenchidos
    if(nome == null && email == null){
        console.log("Nome de Usuário ou E-mail inválido !");
        return;
    }

    // Obtém a lista de todos os Usuários
    var tabelaUsuarios = LerTabela(nomeTabela);
    // console.log("tabelaUsuarios : ", tabelaUsuarios);
    
    // Verifica se o Nome de Usuário ou E-mail já estão cadastrados
    if(tabelaUsuarios != null){

        var usuarioJaCadastrado = false;
        var listaDeUsuarios = tabelaUsuarios.split(EndOfRegister);
        // console.log("listaDeUsuarios : ", listaDeUsuarios);

        listaDeUsuarios.forEach(function (item){

            var registroUsuario = item.split(EndOfField);

            if(registroUsuario[PosicaoNomeUsuario] == nome || registroUsuario[PosicaoEmail] == email){
                usuarioJaCadastrado = true;
                return;
            }
        });

        if(usuarioJaCadastrado){
            return true;
        }
    }

    return false;
}




