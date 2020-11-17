
function submenu(idBotao, idModal, idBotaoFecharModal) {
    console.log('variavel idModal: ', idModal);
    console.log('variavel idBotao: ', idBotao);

    // Pegar a Modal
    var modal = document.getElementById(idModal);
    //Obtenha o botão que abre o modal
    var btn = document.getElementById(idBotao);
    // Obtenha o elemento <span> que fecha o modal
    //var span = document.getElementsByClassName("close")[0];
    var span = document.getElementById(idBotaoFecharModal);
    //Quando o usuário clica no botão, abra o modal
    console.log('var modal1:', modal);
    console.log('var btn:', btn);
    console.log('var span:', span);
    modal.style.display = "block";

    //btn.onclick = function () {
    //    modal.style.display = "block";
    //}
    // Quando o usuário clicar em <span> (x), feche o modal
    //span.onclick = function () {
    //    modal.style.display = "none";
    //}
}
function fechar(nome) {
    //if (nome.display.style != 'none') {
    document.getElementById('' + nome + '').style.display = 'none';
    //nome.display.style = 'none';
    //}
}
 // Quando o usuário clicar em qualquer lugar fora do modal, feche-o
    //window.onclick = function (event) {
    //    if (event.target == modal) {
    //        modal.style.display = "none";
    //    }
    //}
