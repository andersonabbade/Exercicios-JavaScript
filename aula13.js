let pessoa = {
    idade:18,
    estudar (){
        console.log("estudando")

    },
    altura:100
}

let pessoa2 = {
    idade:20,
    estudar (){
        console.log("estudando")

    },
    altura:160
}

console.log(pessoa.altura)
console.log(pessoa.idade)
pessoa.estudar()

let lista = [ pessoa, pessoa2]

console.log(lista)

