

var nomeTabelaDeUsuarios = "Usuarios";// Nome da Tabela de Usuários Cadastrados.
var nomeTabelaLogin = "Login";// Nome da Tabela de Usuários Logados.
var EndOfRegister = ":";    // Caractere que indica o Fim de um Registro.
var EndOfField = "#";       // Caractere que indica o Fim de um Campo do Registro.

// Estrutura da Tabela de Usuários
var PosicaoEmail = 0; // Após a extração do Registro, esta é a Posição do Array onde fica armazenado o Nome do Usuário.
var PosicaoSenha = 1;       // Após a extração do Registro, esta é a Posição do Array onde fica armazenado o E-mail.
var PosicaoNome = 2;
var PosicaoCelTel = 3;
var PosicaoTelFixo = 4;
var PosicaoEndereco = 5;
var PosicaoNumero = 6;
var PosicaoCidade = 7;
var PosicaoBairro = 8;
var PosicaoNuCartao = 9;

//Estrutura da Tabela de Login
var PosicaoEmailUsuarioLogado = 0;


function RealizarCadastroUsuario(dadosUsuario){

    var novoUsuario = 
            dadosUsuario.email + EndOfField + 
            dadosUsuario.senha + EndOfField + 
            dadosUsuario.nome + EndOfField + 
            dadosUsuario.celTel + EndOfField + 
            dadosUsuario.telFixo + EndOfField + 
            dadosUsuario.endereco + EndOfField + 
            dadosUsuario.numero + EndOfField + 
            dadosUsuario.cidade + EndOfField + 
            dadosUsuario.bairro + EndOfField + 
            dadosUsuario.numeroCartao;

    // console.log("Novo Usuario : ", novoUsuario);
    var tabelaUsuarios = LerTabela(nomeTabelaDeUsuarios);


    var tabelaUsuariosAtualizada = "";

    if(tabelaUsuarios == null){
        tabelaUsuariosAtualizada = novoUsuario;
    }
    else{
        tabelaUsuariosAtualizada = tabelaUsuarios + EndOfRegister + novoUsuario;
    }    

    // console.log("tabelaUsuariosAtualizado : ", tabelaUsuariosAtualizado);

    GravarNaTabela(nomeTabelaDeUsuarios, tabelaUsuariosAtualizada);

    alert("Usuário cadastrado com Sucesso !");

    return true;

}



function ProcurarEmail(email){

    // Verifica se os campos estão preenchidos
    if(EstaNuloOuVazio(email)){
        console.log("E-mail inválido !");
        return false;
    }

    // Obtém a lista de todos os Usuários
    var tabelaUsuarios = LerTabela(nomeTabelaDeUsuarios);
    // console.log("tabelaUsuarios : ", tabelaUsuarios);
    
    // Verifica se o Nome de Usuário ou E-mail já estão cadastrados
    if(tabelaUsuarios != null){

        var emailJaCadastrado = false;
        var listaDeUsuarios = tabelaUsuarios.split(EndOfRegister);
        // console.log("listaDeUsuarios : ", listaDeUsuarios);

        listaDeUsuarios.forEach(function (item){

            var registroUsuario = item.split(EndOfField);

            if(registroUsuario[PosicaoEmail] == email){
                emailJaCadastrado = true;
                return;
            }
        });
        
        return emailJaCadastrado;
    }

    return false;
}



function RealizarLogin(email, senha){

    // Verifica se os campos estão preenchidos
    if(EstaNuloOuVazio(email) || EstaNuloOuVazio(senha)){
        alert("Nome de Usuário ou E-mail inválido !");
        return false;
    }
    

    var usuarioJaExiste = ProcurarUsuario(email, senha);

    if(!usuarioJaExiste){
        alert("Usuário não cadastrado !");
        return false;
    }

    return GravarNaTabela(nomeTabelaLogin, email);
}



function RealizarLogoff(){

    LimparTabela(nomeTabelaLogin);

    return true;
}



function ProcurarUsuario(email, senha){

    // Verifica se os campos estão preenchidos
    if(EstaNuloOuVazio(senha) && EstaNuloOuVazio(email)){
        console.log("Nome de Usuário ou E-mail inválido !");
        return false;
    }

    // Obtém a lista de todos os Usuários
    var tabelaUsuarios = LerTabela(nomeTabelaDeUsuarios);
    // console.log("tabelaUsuarios : ", tabelaUsuarios);
    
    // Verifica se o Nome de Usuário ou E-mail já estão cadastrados
    if(tabelaUsuarios != null){

        var usuarioJaCadastrado = false;
        var listaDeUsuarios = tabelaUsuarios.split(EndOfRegister);
        // console.log("listaDeUsuarios : ", listaDeUsuarios);

        listaDeUsuarios.forEach(function (item){

            var registroUsuario = item.split(EndOfField);

            if(registroUsuario[PosicaoEmail] == email && registroUsuario[PosicaoSenha] == senha){
                usuarioJaCadastrado = true;
                return;
            }
        });

        return usuarioJaCadastrado;
    }

    return false;
}




function ObterDadosUsuario(email){

    var dadosUsuario = null;

    // Verifica se os campos estão preenchidos
    if(EstaNuloOuVazio(email)){
        console.log("E-mail inválido !");
        return false;
    }

    // Obtém a lista de todos os Usuários
    var tabelaUsuarios = LerTabela(nomeTabelaDeUsuarios);
    // console.log("tabelaUsuarios : ", tabelaUsuarios);
    
    // Verifica se o Nome de Usuário ou E-mail já estão cadastrados
    if(tabelaUsuarios != null){

        var listaDeUsuarios = tabelaUsuarios.split(EndOfRegister);
        // console.log("listaDeUsuarios : ", listaDeUsuarios);

        listaDeUsuarios.forEach(function (item){

            var registroUsuario = item.split(EndOfField);

            if(registroUsuario[PosicaoEmail] == email){

                dadosUsuario = new {
                    email : registroUsuario[PosicaoEmail],
                    senha : registroUsuario[PosicaoSenha], 
                    nome : registroUsuario[PosicaoNome],
                    celTel : registroUsuario[PosicaoCelTel],
                    telFixo : registroUsuario[PosicaoTelFixo],
                    endereco : registroUsuario[PosicaoEndereco],
                    numero : registroUsuario[PosicaoNumero],
                    cidade : registroUsuario[PosicaoCidade],
                    bairro : registroUsuario[PosicaoBairro],
                    numeroCartao : registroUsuario[PosicaoNuCartao]
                };

                return;
            }
        });
    }

    return dadosUsuario;
}




function ObterUsuarioLogado(){

    var dadosUsuario = null;

    // Verifica se os campos estão preenchidos
    if(EstaNuloOuVazio(email)){
        console.log("E-mail inválido !");
        return false;
    }

    // Obtém a lista de todos os Usuários
    var tabelaLogin = LerTabela(nomeTabelaLogin);
    // console.log("tabelaUsuarios : ", tabelaUsuarios);
    
    // Verifica se o Nome de Usuário ou E-mail já estão cadastrados
    if(tabelaLogin != null){

        var usuarioLogado = false;
        var tabelaLogin = tabelaLogin.split(EndOfRegister);
        // console.log("listaDeUsuarios : ", listaDeUsuarios);

        tabelaLogin.forEach(function (item){

            var registroLogin = item.split(EndOfField);

            if(registroLogin[PosicaoEmail] == email){

                usuarioLogado = true;
                return;
            }
        });

        return usuarioLogado;
    }

    return false;
}





