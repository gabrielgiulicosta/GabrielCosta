let produto ={
    "Nome": "Doritos",
    "Preço": 15.90,
    "Quantidade": 24,

    CalcularTotal : function(){
        return this.Preço*this.Quantidade;
    }
};

console.log(produto.CalcularTotal());