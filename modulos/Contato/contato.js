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
        telefonecelular.value = '(' + telefonecelular.value; //quando come�amos a digitar, o script ir� inserir um par�nteses no come�o do campo.
    if (telefonecelular.value.length == 3)
        telefonecelular.value = telefonecelular.value + ') '; //quando o campo j� tiver 3 caracteres (um par�nteses e 2 n�meros) o script ir� inserir mais um par�nteses, fechando assim o c�digo de �rea.

    if (telefonecelular.value.length == 9)
        telefonecelular.value = telefonecelular.value + '-'; //quando o campo j� tiver 9 caracteres, o script ir� inserir um tracinho, para melhor visualiza��o do telefone.

}
function mascara2(telefonefixo) {
    if (telefonefixo.value.length == 0)
        telefonefixo.value = '(' + telefonefixo.value; //quando come�amos a digitar, o script ir� inserir um par�nteses no come�o do campo.
    if (telefonefixo.value.length == 3)
        telefonefixo.value = telefonefixo.value + ') '; //quando o campo j� tiver 3 caracteres (um par�nteses e 2 n�meros) o script ir� inserir mais um par�nteses, fechando assim o c�digo de �rea.

    if (telefonefixo.value.length == 9)
        telefonefixo.value = telefonefixo.value + '-'; //quando o campo j� tiver 8 caracteres, o script ir� inserir um tracinho, para melhor visualiza��o do telefone.

}
