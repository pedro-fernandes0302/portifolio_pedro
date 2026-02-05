//1 criamos uma variavel 'contado' para con trolar
//qual imagem deve aparecer
let contador=1;

//2. a funçlão 'seninterval' de 50000 milisegundos
//ele vai executar a 'proxImg' repetidamente em 5 segundos
setInterval(function(){
    proxImg();
}, 5000);
//negocio que vai trocar as imagem
function proxImg(){
    contador++;
    if(contador > 4)
        contador=1;
}
//aqui o js procura no html, o elemtno que tem id "radio"
// + o numero do contador.
// o '.checked=true' marca aqueles inputs de radio automaticamente
// quando o radio é marcado, om CSS que configuramos ira mudar a imagem automaticamente
document.getElementById('radio'+contador)= true;
