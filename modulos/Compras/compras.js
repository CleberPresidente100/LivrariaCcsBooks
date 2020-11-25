
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

}
function fechar(nome) {
    document.getElementById('' + nome + '').style.display = 'none';

}



/*mostrar msg do frete padrao e entrega*/
function msgFrete(idCalFrete2,idmsgFrete, idMsgCliqueFrete, idMsgCliqueFreteIvalid) {
    var MsgCliqueFrete = document.getElementById(idMsgCliqueFrete);

    var MsgCliqueFreteInvalid = document.getElementById(idMsgCliqueFreteIvalid);

    var CalFrete2 = document.getElementById(idCalFrete2);

    if (CalFrete2.value.length == 9) {
        MsgCliqueFrete.style.display = "block";
        MsgCliqueFreteInvalid.style.display = "none";
    }
    else if (CalFrete2.value.length != 9) {
        MsgCliqueFreteInvalid.style.display = "block";
        MsgCliqueFrete.style.display = "none";
    }


}

function filtrodeLivros(IdFiltro1, IdInfantil, IdPolicial, IdRomance, IdAventura, IdFiccao){
    var Filtro1 = document.getElementById(IdFiltro1);
    var Infantil = document.getElementById(IdInfantil);
    var Policial = document.getElementById(IdPolicial);
    var Romance = document.getElementById(IdRomance);
    var Aventura = document.getElementById(IdAventura);
    var Ficcao = document.getElementById(IdFiccao);
    


    Filtro1.style.display = "block";
    Infantil.style.display = "block";
    Policial.style.display = "block";
    Romance.style.display = "block";
    Aventura.style.display = "block";
    Ficcao.style.display = "block";


}

function mostrarRomance() {
    //var combo = document.getElementById('filtro').value;
    if (document.getElementById('filtro').value == 0) {
        document.getElementById('infantil').style.display = 'block';
        document.getElementById('policial').style.display = 'block';
        document.getElementById('romance').style.display = 'block';
        document.getElementById('aventura').style.display = 'block';
        document.getElementById('ficcao').style.display = 'block';
    }
    if (document.getElementById('filtro').value == 1) {
        document.getElementById('ficcao').style.display = 'none';
        document.getElementById('policial').style.display = 'none';
        document.getElementById('romance').style.display = 'none';
        document.getElementById('aventura').style.display = 'none';
        document.getElementById('infantil').style.display = 'block';
    } else if (document.getElementById('filtro').value == 2) {
        document.getElementById('infantil').style.display = 'none';
        document.getElementById('policial').style.display = 'block';
        document.getElementById('romance').style.display = 'none';
        document.getElementById('aventura').style.display = 'none';
        document.getElementById('ficcao').style.display = 'none';
    } else if (document.getElementById('filtro').value == 3) {
        document.getElementById('infantil').style.display = 'none';
        document.getElementById('policial').style.display = 'none';
        document.getElementById('romance').style.display = 'block';
        document.getElementById('aventura').style.display = 'none';
        document.getElementById('ficcao').style.display = 'none';
    } else if (document.getElementById('filtro').value == 4) {
        document.getElementById('infantil').style.display = 'none';
        document.getElementById('policial').style.display = 'none';
        document.getElementById('romance').style.display = 'none';
        document.getElementById('aventura').style.display = 'block';
        document.getElementById('ficcao').style.display = 'none';
    } else if (document.getElementById('filtro').value == 5) {
        document.getElementById('infantil').style.display = 'none';
        document.getElementById('policial').style.display = 'none';
        document.getElementById('romance').style.display = 'none';
        document.getElementById('aventura').style.display = 'none';
        document.getElementById('ficcao').style.display = 'block';
    } 
}



function validarCep(CalFrete2) {

    if (CalFrete2.value.length == 5)
        CalFrete2.value = CalFrete2.value + '-';


}


/*/*mostrar msg do frete padrao e entrega*/
/*function msgFrete(idmsgFrete, idMsgCliqueFrete, idMsgCliqueFreteIvalid) {
    var MsgCliqueFrete = document.getElementById(idMsgCliqueFrete);
    var MsgCliqueFreteInvalid = document.getElementById(idMsgCliqueFreteIvalid);

    if (MsgCliqueFrete.length >= 9) {
        MsgCliqueFrete.style.display = "block";
    }
    if (MsgCliqueFreteInvalid.length < 9 || MsgCliqueFreteInvalid.length > 9 || ) {
        MsgCliqueFreteInvalid.style.display = "block";
    }
}*/

/*function msgFrete(MsgCliqueFrete) {

    MsgCliqueFrete = innerHTML;
    element.innerHTML=('Entrega Padrão 05 dias Uteis, Frete R$ 9,99 ');
}*/