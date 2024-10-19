let endereço ={
    "Rua": "Rua Florença",
    "Numero": 558,
    "Bairro": "Bondergard",
    "Cidade": "Sorocaba",

    MostrarInformaçoes : function(){
        return this.Rua +"\n"+ this.Numero +"\n"+ this.Bairro +"\n"+ this.Cidade;
    }
};

console.log(endereço.MostrarInformaçoes());