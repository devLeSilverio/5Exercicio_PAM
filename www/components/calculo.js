function botao(letra){
var salvo = document.calc.resposta.value;
document.calc.resposta.value = salvo + letra;
navigator.notification.beep(1);
}

$(document).on("click","#apagar",function(){
var len = document.calc.resposta.value.length; //contar todos os caracteres.
var valor = document.calc.resposta.value;
valor = valor.replace(valor.charAt(len - 1 ),""); //todos os caracteres menos um.
document.calc.resposta.value=valor;
});

$(document).on("click","#responder",function(){

if(document.calc.resposta.value == "COVID"){
navigator.notification.alert("Parabéns você acertou!STAY AT HOME!!",null,"Aviso","Aceito");
}else{
navigator.vibrate(3000);
}



});

