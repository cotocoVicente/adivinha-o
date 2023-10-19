alert(`Boas vindas ao jogo do numero secreto!!`);
let limite = 1000
let numeroSecreto = parseInt(Math.random() * limite + 1);
console.log(`O numero secreto é ${numeroSecreto}`)
let tentativas = 1;
let chute 

//enquanto != (diferente) enquanto chute for diferente de numero secreto...
while (chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 e ${limite}`)
    if (numeroSecreto == chute ){
        break;
    } else {
        if ( chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}`)
        } else{
            alert(`O numero secreto é maior que ${chute}`)
        }
        tentativas++;

    }
    
}
//              tenativas é maior doq 1? se sim ↓      se não ↓
let palavraTentativa = tentativas > 1 ?'tentativas' : 'tenativa'
alert(`Vc acertou!!! (${numeroSecreto}) com ${tentativas} ${palavraTentativa}`)    


//if(tentativas > 1){
//    alert(`Vc acertou!!! (${numeroSecreto}) com ${tentativas} ${palavraTentativa}`)    
//
//}else{
//    alert(`Vc acertou!!! (${numeroSecreto}) com ${tentativas} ${palavraTentativa}`)    
//
//}