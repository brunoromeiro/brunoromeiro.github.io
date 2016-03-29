$(document).ready(function(){
	$('#tabela').empty(); //limpando a tabela
	$.ajax({
		method: "POST",
		url: "pessoas.json", //Definindo o arquivo de onde serão buscados os dados
		contentType: "application/json; charset=utf-8",
		success: function(dados){
			for(var i=0;dados.length>i;i++){
				//Adicionando registros retornados na tabela
				$('#tabela').append('<tr><td>'+dados[i].nome+'</td><td>'+dados[i].cidade+'</td><td></tr>');
			}
		},
		error: function(erro){
			console.log(erro);
		}
	});
});
