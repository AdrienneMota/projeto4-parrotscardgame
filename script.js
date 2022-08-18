    let qtdcards = prompt('Com quantas cartas você deseja jogar?');
    
    while((qtdcards%2 !== 0) && (qtdcards > 4 || qtdcards < 14)){
        qtdcards = prompt('Digite um valor par menor ou igual a 14.')
    }

    alert('você pode jogar!')
    

