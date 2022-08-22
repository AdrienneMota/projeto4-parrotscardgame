let qtdcards = parseInt(prompt('Com quantas cartas você deseja jogar? (Digite um número par maior igual a 4 e menor igual a 14)'));
let contadorjogadas = 0;
let carta1;
let carta2;
let cartasviradas = [];
        
while((qtdcards < 4 || qtdcards>14) || (qtdcards%2 != 0 )  || (qtdcards == undefined)){
    qtdcards = prompt('Digite um valor numérico par entre 4 e 14.');
}

mostrarcartas();

function mostrarcartas(){
    const painel = document.querySelector('.container');
    painel.classList.remove('esconder');  
    
    //embaralhar as cartas
    let cartas = [ 
        './img/bobrossparrot.gif',
        './img/explodyparrot.gif',
        './img/fiestaparrot.gif',
        './img/metalparrot.gif',
        './img/revertitparrot.gif',
        './img/tripletsparrot.gif',
        './img/unicornparrot.gif'
    ];
    
    embaralhar(cartas);

    //selecionar cartas

    let cartasselecionas = [];
    let copiacarta = [];
    let cartasjogo = [];

    for(let i = 0; i< (qtdcards/2); i++){
        cartasselecionas.push(cartas[i]);
        copiacarta.push(cartas[i]);
    }

    cartasjogo = cartasselecionas.concat(copiacarta);

    const jogo = document.querySelector('.cartas')
    
    for(let i=0; i<qtdcards;i++){
        jogo.innerHTML = jogo.innerHTML + 
        `<li class="card" onclick="virarcarta(this)">
        <div class="front face">
            <img src="./img/front.png" alt="">
        </div>
        <div class="back face">
            <img src="${cartasjogo[i]}">
        </div>
        </li>`;
    }
} 

function embaralhar(array){
    array.sort(comparador);
    function comparador() { 
        return Math.random() - 0.5; 
    }
}

function virarcarta(cartaselecionada){
    if(cartasviradas == 0 && (cartaselecionada.classList.contains('selecionada') == false)){
        cartaselecionada.classList.add('selecionada')
            carta1 = cartaselecionada;
            cartasviradas.push(cartaselecionada.innerHTML)
            contadorjogadas += 1;
        
    }
    else{
        cartaselecionada.classList.add ('selecionada')
            carta2 = cartaselecionada;
            cartasviradas.push(cartaselecionada.innerHTML)
            setTimeout(compararcartas,1000)
            contadorjogadas+=1;
    }
}

function compararcartas(){

    if (cartasviradas[0] == cartasviradas[1]){
        cartasviradas = [];
        carta1="";
        carta2="";                  
    } else{ 
        cartasviradas = [];    
        carta1.classList.remove ('selecionada');
        carta2.classList.remove ('selecionada');
        carta1="";
        carta2="";
        
    }
    
    varificarfimdejogo();
    
}
    
    function varificarfimdejogo(){
        let totcartas = document.querySelectorAll (".selecionada");

        if(totcartas.length == qtdcards){
            alert(`Parabéns! Você ganhou o jogo com ${contadorjogadas} jogadas.` );

            let msgfinal = parseInt(prompt("Deseja jogar novamente? (Digite 1 para Sim ou 2 para Não)"));
            
            if (msgfinal == 1) {
                location.reload();
            }
            else{
                    alert('Obrigada por jogar!');
            }
        }
    }
















