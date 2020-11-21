/**Validando Nome */
function alerta() {
    alert('Obrigado(a) pelo seu contato, em breve retornaremos!');
}
function validarNome(nome) {
    var nome = document.querySelector('#nome');
    var error2 = document.querySelector('#error-nome');

    if (!nome.checkValidity() || nome.value == "") {

    }
}

/** validando email */
function validarEmail() {
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');

    if (!email.checkValidity() || email.value == "") {
        error.innerHTML = "Invalido";
    }

}
/*validando telefone*/

function mascara(telefonecelular) {
    var errorc = document.querySelector('#error-celular');
    if (telefonecelular.value.length == 0)
        telefonecelular.value = '(' + telefonecelular.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
    if (telefonecelular.value.length == 3)
        telefonecelular.value = telefonecelular.value + ') '; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.

    if (telefonecelular.value.length == 9)
        telefonecelular.value = telefonecelular.value + '-'; //quando o campo já tiver 9 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.

}
function mascara2(telefonefixo) {
    if (telefonefixo.value.length == 0)
        telefonefixo.value = '(' + telefonefixo.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
    if (telefonefixo.value.length == 3)
        telefonefixo.value = telefonefixo.value + ') '; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.

    if (telefonefixo.value.length == 9)
        telefonefixo.value = telefonefixo.value + '-'; //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.

}
