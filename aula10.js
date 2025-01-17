

function rotinadamanha(){

console.log("escovar os dentes")
console.log("tomar banho")
console.log("ir para o trabalho")

}
rotinadamanha() // Nunca esquecer de chamar a fução pro codigo funcionar.



function totaldenotas(){
let nota1 = 20
let nota2 = 60
let soma = nota1 + nota2
console.log(soma)

}
totaldenotas() // Nunca esquecer de chamar a função para o codigo funcionar


//Parametro 

function liquidificador( ingrediente1 , ingrediente2,ingrediente3){
    let mistura = ingrediente1 + ingrediente2 + ingrediente3
    let resultado = mistura
    //console.log(resultado)
    return resultado  
    
    
}
let resultado = liquidificador("banana","uva" ,"pera")
console.log(resultado)





function calculaMedia ( notaA,notaB,notaC)  { // entrada 
    let soma = notaA + notaB + notaC          // processamento
    let media = soma/3                        
    //console.log("a media é: " +media)       //retorno
    return media 

}
let media = calculaMedia( 10, 20 ,30)

console.log( "a media é: " + media)




 