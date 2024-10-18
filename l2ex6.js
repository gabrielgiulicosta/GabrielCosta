let aluno ={
    "Nome": "Gabriel",
    "Idade": 19,
    "Curso": "Engenharia da Computação",
    "Matrícula": 248232,

    mostrarInformações : function(){
        return this.Nome +"\n"+ this.Idade +"\n"+ this.Curso +"\n"+ this.Matrícula;
    }
};

console.log(aluno.mostrarInformações());

