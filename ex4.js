 /*faça um programa que declare uma lista de alunos de uma escola, com seus respectivos nomes 

depois, voce ira tentar adicionar um aluno novo na lista de alunos. voce deve checar o seguinte :

se a lista de alunos ja contem 10 alunos, então voce deve printar que o limite maximo ja foi atingido se não, adicione o novo aluno na lista */

let listaDealunos = ["maria","jose","cassio","catia","bia","jo","bianca","bruna","luis","ana"]
let alunoNovo = "joel"

// A propriedade (length) serve para checar o tamanho de uma lista, de um arrey.
if (listaDealunos.length < 10){
    listaDealunos.push(alunoNovo)
    console.log("conseguiu adicionar o aluno")
    
} else {
    console.log("atingiu o numero maximo de alunos")
}