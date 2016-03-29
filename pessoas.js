//Classe para chamar o Json
function json(){
  var qtd;
  var retorno;
  
  //Resgatar valores
  json.prototype.resgatarValores = function(){
    $('#resultado').html('Carregando dados...');
    
    //Estrutura de Resultado
    $.getJSON('pessoas.json', function(data){
      this.qtd = data.pessoas.length;
      this.retorno = '';
      
      for (i=0; i<this.qtd; i++){
        this.retorno += 'NOME: ' + data.pessoas[i].nome + '<br />';
        this.retorno += 'EMAIL: ' + data.pessoas[i].email + ' - ';
        this.retorno += 'CIDADE: ' + data.pessoas[i].cidade + '<br /><br />';
      }
      
      $('#resultado').html(this.retorno);
    });
    
  }
  
}

//Objeto
var obj = new json();
obj.resgatarValores();
