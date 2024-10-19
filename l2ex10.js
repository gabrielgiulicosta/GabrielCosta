let alunoi={
    nome: "Gabriel",
    idade:20,
    curso:" Engenharia",
    matricula:" 247653",
    }
    
let aluno2={
    nome:"Joao",
    idade:18,
    curso:" Engenharia",
    matricula:" 242081",
    }
    
let aluno3={
    nome: "Andre",
    idade:17,
    curso:" Engenharia",
    matricula:" 240291",
    }

let aluno4={
        nome:"Felipe",
        idade:19,
        curso:" Engenharia",
        matricula:" 248923",
        }
        
let aluno5={
        nome:"Guilherme",
        idade:15,
        curso:" Engenharia",
        matricula:" 247657",
        }
        
let aluno6={
        nome: "Mariana",
        idade:16,
        curso:" Engenharia",
        matricula:" 243479",
        }
        
        let turma=[aluno1, aluno2, aluno3, aluno4, aluno5, aluno6];

        function Maior (array) {
            let resposta=[]
            let indice=0
            for(let i=0;i<array.length; i++) {
                if(array[i].idade>=18) {
                    resultado[indice]=array[i]
                    indice++
                }
            }
            console.log(resultado[0])
            console.log(resultado[1])
            console.log(resultado[2])
            return resultado
        }
        
        console.log(Maior(turma))