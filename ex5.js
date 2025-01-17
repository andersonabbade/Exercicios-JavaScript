/* crie duas listas :

- uma de compras vazia
- uma de frutas com as seguintes frutas :
maça banana abacaxi uva melao  

voce devera adicionar comidas do seu gosto na lista de comprar. Porem, ao final, voce devera checar se a sua lista de compras contem pelo menos tres frutas da lista de frutas 

caso isso não seja verdade, printe no terminal deve haver pelo menos 3 frutas */

let compras = []

let frutas = ["maça", "banana","abacaxi","uva","melao"]

compras.push ("carne","feijão", "uva","abacaxi","banana")

let numeroDefrutas = 0



compras.map((elemento) => {
    if(frutas.includes(elemento)){
        numeroDefrutas = numeroDefrutas + 1
    }
})

if (numeroDefrutas >=3){
    console.log("deu certo, eu tenho 3 ou mais frutas")   
}else{
    console.log("preciso de mais frutas")
}

