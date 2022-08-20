    let qtdcards = parseInt(prompt('Com quantas cartas você deseja jogar?'));
        
    while((qtdcards < 4 || qtdcards>14) || (qtdcards%2 != 0 )  || (qtdcards == undefined)){
        qtdcards = prompt('Digite um valor numérico par entre 4 e 14.');
    }

    mostrarcartas();

    function mostrarcartas(){
        const jogo = document.querySelector('.container');
        jogo.classList.remove('esconder');  
        
        //embaralhar as cartas
        let cartas = [ 
            './img/bobrossparrot.gif',
            './img/explodyparrot.gif',
            './img/fiestaparrot.gif',
            './img/metalparrot.gif',
            './img/revertitparrot.gif',
            './img/tripletsparrot.gif',
            '/img/unicornparrot.gif'
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

        console.log(embaralhar(cartasjogo));

        

    }

    function embaralhar(array){
        array.sort(comparador);
        function comparador() { 
            return Math.random() - 0.5; 
        }
    }





    
   
