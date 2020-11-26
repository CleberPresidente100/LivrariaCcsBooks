
function mascara11(telefonecelular) {
    var errorc = document.querySelector('#error-celular');
    if (telefonecelular.value.length == 0)
        telefonecelular.value = '(' + telefonecelular.value; //quando come�amos a digitar, o script ir� inserir um par�nteses no come�o do campo.
    if (telefonecelular.value.length == 3)
        telefonecelular.value = telefonecelular.value + ') '; //quando o campo j� tiver 3 caracteres (um par�nteses e 2 n�meros) o script ir� inserir mais um par�nteses, fechando assim o c�digo de �rea.

    if (telefonecelular.value.length == 10)
        telefonecelular.value = telefonecelular.value + '-'; //quando o campo j� tiver 9 caracteres, o script ir� inserir um tracinho, para melhor visualiza��o do telefone.

}
function mascara22(telefonefixo) {
    if (telefonefixo.value.length == 0)
        telefonefixo.value = '(' + telefonefixo.value; //quando come�amos a digitar, o script ir� inserir um par�nteses no come�o do campo.
    if (telefonefixo.value.length == 3)
        telefonefixo.value = telefonefixo.value + ') '; //quando o campo j� tiver 3 caracteres (um par�nteses e 2 n�meros) o script ir� inserir mais um par�nteses, fechando assim o c�digo de �rea.

    if (telefonefixo.value.length == 9)
        telefonefixo.value = telefonefixo.value + '-'; //quando o campo j� tiver 8 caracteres, o script ir� inserir um tracinho, para melhor visualiza��o do telefone.

}
function ValidacoesCampos() {

    if (document.getElementById('email1').value != document.getElementById('email2').value)
        var teste1 = 1;
    if (document.getElementById('senha1').value != document.getElementById('senha2').value)
        var teste2 = 1;
    if (teste1 == 1)
        document.getElementById('emailInvalid').style.display = 'block';
    else
        document.getElementById('emailInvalid').style.display = 'none';
    if (teste2 == 1)
        document.getElementById('SenhaInvalid').style.display = 'block';
    else
        document.getElementById('SenhaInvalid').style.display = 'none';


    if (teste1 != 1 && teste2 != 1) {
        if (document.getElementById('nome').value.length >= 5) {
            if (document.getElementById('CelTel').value.length >= 15) {
                if (document.getElementById('TelFixo').value.length >= 14) {
                    if (document.getElementById('Endereco').value.length >= 5) {
                        if (document.getElementById('numero').value.length >= 1) {
                            if (document.getElementById('Cidade').value.length >= 5) {
                                if (document.getElementById('Bairro').value.length >= 5) {
                                    if (document.getElementById('NuCartao').value.length >= 20) {
                                        if (document.getElementById('email1').value.length >= 5) {
                                            if (document.getElementById('email2').value.length >= 5) {
                                                if (document.getElementById('senha1').value.length >= 8) {
                                                    if (document.getElementById('senha2').value.length >= 8)
                                                        
                                                        return cadastrarUsuario();
                                                }

                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return false;
}

function ValidacaoCartao(IdNuCartao) {
    if (NuCartao.value.length == 4)
        NuCartao.value = NuCartao.value + '\xa0';
    if (NuCartao.value.length == 9)
        NuCartao.value = NuCartao.value + '\xa0';
    if (NuCartao.value.length == 15)
        NuCartao.value = NuCartao.value + '\xa0';
}



function cadastrarUsuario(){

    // console.log("Início Cadastro de Usuários");

    var email = document.getElementById('email1').value;
    var senha = document.getElementById('senha1').value;
    var nome = document.getElementById('nome').value;
    var celTel = document.getElementById('CelTel').value;
    var telFixo = document.getElementById('TelFixo').value;
    var endereco = document.getElementById('Endereco').value;
    var numero = document.getElementById('numero').value;
    var cidade = document.getElementById('Cidade').value;
    var bairro = document.getElementById('Bairro').value;
    var numeroCartao = document.getElementById('NuCartao').value;


    var usuarioJaExiste = ProcurarEmail(email);

    if(usuarioJaExiste){
        alert("Nome de Usuário ou E-mail já cadastrado !");
        return false;
    }
    

    var dadosUsuario = {
        email,
        senha,
        nome,
        celTel,
        telFixo, 
        endereco,
        numero,
        cidade,
        bairro,
        numeroCartao
    };

    return RealizarCadastroUsuario(dadosUsuario);

}


