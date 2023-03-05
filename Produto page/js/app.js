//qtd de itens no carrinho
let qtdCarrinho = 0;
//mostrar menu
document.getElementById('icon-menu-responsivo').addEventListener('click', function openMenu() {
    document.querySelector('.menu-conteiner-responsive').classList.toggle('mostrar');
})

//adicionar o item ao carrinho
document.getElementById('btAddCarrinho').addEventListener('click', function addAoCarrinho() {
    document.querySelector('.barra-fixa-carrinho').classList.toggle('ativada');
    let spanQtdCarrinho = document.querySelector('.quantidade-add-carrinho');
    if (qtdCarrinho >= 0) {
        qtdCarrinho++;
        spanQtdCarrinho.innerHTML = `${qtdCarrinho}`;
    }


})

//aumentar qtd de itens ao carrinho
document.getElementById('addQtd').addEventListener('click', function addMaisCarrinho() {
    let spanQtdCarrinho = document.querySelector('.quantidade-add-carrinho');

    if (qtdCarrinho > 0) {
        qtdCarrinho++;
        spanQtdCarrinho.innerHTML = `${qtdCarrinho}`;
        document.getElementById("DiminQtd").disabled = false;

    }

})

//diminuir qtd de itens ao carrinho
document.getElementById('DiminQtd').addEventListener('click', function diminMenosCarrinho() {
    let spanQtdCarrinho = document.querySelector('.quantidade-add-carrinho');
    qtdCarrinho--;
    spanQtdCarrinho.innerHTML = `${qtdCarrinho}`;

    if (qtdCarrinho == 0) {
        document.getElementById("DiminQtd").disabled = true;
        document.querySelector('.barra-fixa-carrinho').classList.remove('ativada');
    }
})

//add item aos favoritos
document.getElementById('btAddFav').addEventListener('click', function addFavorite() {
    let containerPrincipal = document.getElementById('conteiner-addFavorite');
    containerPrincipal.style.display = 'block';
    let divCad = document.createElement('div');

    divCad.style.display = 'block';
    divCad.setAttribute('class', 'carAddFavorite');
    containerPrincipal.appendChild(divCad);


    let pFrase = document.createElement('p');
    //let txtFrase = document.createTextNode = ('Item adicionado aos Favoritos com sucesso!');
    pFrase.textContent = 'Item adicionado aos Favoritos com sucesso!';
    //pFrase.appendChild(txtFrase);
    divCad.appendChild(pFrase);

    let btFechar = document.createElement('button');

    btFechar.textContent = 'Fechar';
    btFechar.setAttribute('id', 'btFechar');

    let imgCoracaoFav = document.createElement('img');
    imgCoracaoFav.style.width = '60px';

    imgCoracaoFav.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPFJREFUSEvFlW0RwjAQRF8dIAEHgAKQgANAAVpQADhAAjgAB0jAAcx2Qidt03y0DeRX0pvuy17ukoLMo8isz98Aa2ADzI3DJ3AALmat+B6YmvUdOFvxKjFNBxPgCEjANa7m46ojrg3sgNc33gRoJ7OB5yKNhQuwNbsfqF/+LhcnTWwHsr8cQx24AWUabcB7JPFadn4KyJ6i7Ies3I1Rpg+rQVtXhRpNqerbCxJX9XQ2mlz0hbTEm2VqV2kqxCnuA6Q46RQPAWIgXvEYgA8SFI8FuCBR4ikAG6J5rRR9d1jqk6nq0qjqPHRBpgJCeq14dsAHaAYwGXy+lBAAAAAASUVORK5CYII=';

    divCad.appendChild(imgCoracaoFav);
    divCad.appendChild(pFrase);
    divCad.appendChild(btFechar);


    document.getElementById('btFechar').addEventListener('click', function fecharCardAddCarrinho() {
        document.getElementById('conteiner-addFavorite').style.display = 'none';
        document.getElementById('divCard').style.display = 'none';
    })

})

//fechar aba de carrinho
document.getElementById('btComprar').addEventListener('click', function fecharAbaCarrinho() {
    document.querySelector('.barra-fixa-carrinho').classList.remove('ativada');

})