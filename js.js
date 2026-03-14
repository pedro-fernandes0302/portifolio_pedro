// 1 criamos uma variável 'contador' para controlar
// qual imagem deve aparecer
let contador = 1;

// 2 a função setInterval executa a função proxImg
// a cada 5000 milissegundos (5 segundos)
setInterval(function(){
    proxImg();
}, 5000);

// função que troca a imagem
function proxImg(){
    contador++;

    if(contador > 4){
        contador = 1;
    }

    document.getElementById('radio' + contador).checked = true;
}