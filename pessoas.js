$(document).ready(function(){
	$('#tabela').empty(); //limpando a tabela
	$.ajax({
		type: 'post', //Definimos o método HTTP usado
		dataType: 'json', //Definimos o tipo de retorno
		url: 'pessoas.json', //Definindo o arquivo de onde serão buscados os dados
		success: function(dados){
			for(var i=0;dados.length>i;i++){
				//Adicionando registros retornados na tabela
				$('#tabela').append('<tr><td>'+dados[i].nome+'</td><td>'+dados[i].cidade+'</td><td>'+dados[i].email+'</td></tr>');
			}
		}
	})
})
