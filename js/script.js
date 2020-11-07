



function finalizar (){

	var email			= document.getElementById("email").value;
	var nome			= document.getElementById("nome").value;
	var numeroCartao	= Number(document.getElementById("numeroCartao").value);
	var digito			= Number(document.getElementById("digito").value);
	var validade		= document.getElementById("validade").value;

	console.log("email", email);
	console.log("nome", nome);
	console.log("numeroCartao", numeroCartao);
	console.log("digito", digito);
	console.log("validade", validade);


	// Caso algum dos campos esteja vazio, retorna ao formulário para indicar obrigatoriedade dos campos.
	if(email == "" || nome == "" || numeroCartao == "" || digito == "" || validade == ""){
		return;
	}


	// Verifica se o Nome possui Números
	var expressaoRegularNumeros = /[0-9]/;
	var auxiliar = nome.split(expressaoRegularNumeros);

	console.log("auxiliar", auxiliar);

	if(auxiliar.length != 1){
		alert("NOME INVÁLIDO");
		return;
	}
	

	// Caso so campos numericos não sejam números, gera mensagem de erro.
	if(isNaN(numeroCartao)){
		alert("NÚMERO DO CARTÃO INVÁLIDO");
		return;
	}
	if(isNaN(digito)){
		alert("DÍGITO VERIFICADOR DO CARTÃO INVÁLIDO");
		return;
	}


	// Verifica se o Número do Cartão é Válido
	if(numeroCartao < 0 || numeroCartao > 9999999999999999){
		alert("NÚMERO DO CARTÃO INVÁLIDO");
		return;
	}


	// Verifica se o Dígito Verificador do Cartão é Válido
	if(digito < 100 || digito > 999){
		alert("DÍGITO VERIFICADOR DO CARTÃO INVÁLIDO");
		return;
	}


	// Verifica se o que foi inserido no campo está separado por uma barra.
	var dataValidade = validade.split("/");

	console.log("dataValidade.length", dataValidade.length);

	if(dataValidade.length != 2){
		alert("DATA DE VALIDADE INVÁLIDA");
		return;
	}


	// Tenta transformar em número
	dataValidade[0] = Number(dataValidade[0]);
	dataValidade[1] = Number(dataValidade[1]);

	console.log("dataValidade", dataValidade);
	

	// Vefirica se a Data é número um válido.
	if(isNaN(dataValidade[0])){
		alert("DATA DE VALIDADE INVÁLIDA");
		return;
	}
	if(isNaN(dataValidade[1])){
		alert("DATA DE VALIDADE INVÁLIDA");
		return;
	}

	// Verifica se o valor do mês é válido
	if(dataValidade[0] <= 0 || dataValidade[0] > 12){
		alert("DATA DE VALIDADE INVÁLIDA");
		return;
	}

	// Verifica se o valor do ano é válido
	if(dataValidade[1] < 0 || dataValidade[1] > 99){
		alert("DATA DE VALIDADE INVÁLIDA");
		return;
	}

	alert("PAGAMENTO REALIZADO COM SUCESSO");

}



function EstaNuloOuVazio(item){

	if(item == null || item == "") return true;
	return false;
}






