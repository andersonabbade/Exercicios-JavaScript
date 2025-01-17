let  notaFinal = 25

if (notaFinal >= 60){
    console.log("parabens vc passou!")
} else if (notaFinal < 60 && notaFinal >=30){
    console.log("prova de recuperação")    
}else  { // notas menores do que 30
    console.log( "reprovado")

}

let PagouBoleto = true
let venceu = true

if (PagouBoleto == true && venceu == false) {
    console.log("compra confirmada")
} else if ( PagouBoleto == false && venceu == true){
    console.log("aguardando pagamento")
} else if (venceu == true){
    console.log("compra cancelada")
}
