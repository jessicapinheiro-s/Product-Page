document.getElementById('icon-menu-responsivo').addEventListener('click', function openMenu(){
    document.querySelector('.menu-conteiner-responsive').classList.toggle('mostrar');
})
let qtdCarrinho= 0;
document.getElementById('btAddCarrinho').addEventListener('click', function addAoCarrinho(){
    document.querySelector('.barra-fixa-carrinho').classList.toggle('ativada');
    let spanQtdCarrinho = document.querySelector('.quantidade-add-carrinho');
    if(qtdCarrinho >= 0){
        qtdCarrinho++;
        spanQtdCarrinho.innerHTML=`${qtdCarrinho}`;
    }
    

})

document.getElementById('addQtd').addEventListener('click', function addMaisCarrinho(){
    let spanQtdCarrinho = document.querySelector('.quantidade-add-carrinho');
   
})
document.getElementById('DiminQtd').addEventListener('click', function diminMenosCarrinho(){
    let spanQtdCarrinho = document.querySelector('.quantidade-add-carrinho');
    
})



