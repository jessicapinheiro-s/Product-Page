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
    
    if(qtdCarrinho >0){
        qtdCarrinho++;
        spanQtdCarrinho.innerHTML=`${qtdCarrinho}`;
        document.getElementById("DiminQtd").disabled = false;

    }
   
})
document.getElementById('DiminQtd').addEventListener('click', function diminMenosCarrinho(){
    let spanQtdCarrinho = document.querySelector('.quantidade-add-carrinho');
    qtdCarrinho--;
    spanQtdCarrinho.innerHTML=`${qtdCarrinho}`;

    if(qtdCarrinho == 0){
        document.getElementById("DiminQtd").disabled = true;
        document.querySelector('.barra-fixa-carrinho').classList.remove('ativada');
    }
})


document.getElementById('btAddFav').addEventListener('click', function openMenu(){
    let containerPrincipal = document.querySelector('.conteiner-addFavorite');

    let divCad = document.createElement('div');

    divCad.style.display = 'block';
    divCad.setAttribute('class', 'carAddFavorite');
    containerPrincipal.appendChild(divCad);
    
    
    let pFrase = document.createElement('p');
    //let txtFrase = document.createTextNode = ('Item adicionado aos Favoritos com sucesso!');
    pFrase.textContent = 'Item adicionado aos Favoritos com sucesso!';
    //pFrase.appendChild(txtFrase);
    divCad.appendChild(pFrase);
})
