function soma(num){
    let jun=0;

    for(let i of num){
        jun += i;
    }

    return jun;
}
const arraynumeros = [10, 20, 30, 40, 50];
let resultado =soma(arraynumeros);
console.log(resultado);