function impares(num){
    let jun=0;

    for(let i of num){
        if(i%2!=0){
            console.log(i);
        }
    }
}
const arraynumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado =impares(arraynumeros);
console.log(resultado);