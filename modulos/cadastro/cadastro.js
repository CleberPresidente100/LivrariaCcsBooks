
function mascara11(telefonecelular) {
    var errorc = document.querySelector('#error-celular');
    if (telefonecelular.value.length == 0)
        telefonecelular.value = '(' + telefonecelular.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
    if (telefonecelular.value.length == 3)
        telefonecelular.value = telefonecelular.value + ') '; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.

    if (telefonecelular.value.length == 10)
        telefonecelular.value = telefonecelular.value + '-'; //quando o campo já tiver 9 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.

}
function mascara22(telefonefixo) {
    if (telefonefixo.value.length == 0)
        telefonefixo.value = '(' + telefonefixo.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
    if (telefonefixo.value.length == 3)
        telefonefixo.value = telefonefixo.value + ') '; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.

    if (telefonefixo.value.length == 9)
        telefonefixo.value = telefonefixo.value + '-'; //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.

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
                        if (document.getElementById('n').value.length >= 1) {
                            if (document.getElementById('Cidade').value.length >= 5) {
                                if (document.getElementById('Bairro').value.length >= 5) {
                                    if (document.getElementById('NuCartao').value.length >= 20) {
                                        if (document.getElementById('email1').value.length >= 5) {
                                            if (document.getElementById('email2').value.length >= 5) {
                                                if (document.getElementById('senha1').value.length >= 8) {
                                                    if (document.getElementById('senha2').value.length >= 8)
                                                        alert('Cadastro realizado com sucesso! Por favor Realizar login!');

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

}

function ValidacaoCartao(IdNuCartao) {
    if (NuCartao.value.length == 4)
        NuCartao.value = NuCartao.value + '\xa0';
    if (NuCartao.value.length == 9)
        NuCartao.value = NuCartao.value + '\xa0';
    if (NuCartao.value.length == 15)
        NuCartao.value = NuCartao.value + '\xa0';
}