let arraynumeros = [10, 20, 30, 40, 50];

function maiorNum(arr){
    let maior = 0;
    for(let i of arr){
        if(i>maior){
            maior = i;
        }
    }
    return maior;
}

console.log(maiorNum(arraynumeros));