/*Crie uma função que ira avaliar as notas de um aluno e sua presença na aula 

Entrada das funçoes :
-porcentagemdePresença: numero de 0 a 100
-notaA: numero de 0 a 10
-notaB: numero de 0 a 10

Para que o aluno passe de ano ele deve ter dois requizitos, os dois requesitos tem que ser satisfeitos. se um deles não for, o aluno reprova 

O aluno passara se 
- A porcentagem de pesença for maior que 75 
e
- A media das notas for maior que 6 

Saida retorno :
se o aluno passou, retornar passou
se o aluno reprovou, retonar reprovou
 */


function avaliarAluno( porcentagemdePresença, notaA, notaB){

  let media = (notaA + notaB) /2
    
  if ( porcentagemdePresença > 75 && media > 6) {
        return "passou"
    }else{
        return "reprovou"

    }

}
console.log (avaliarAluno( 80, 7, 7))

let avaliaçaoDoaluno = avaliarAluno (80,7,7)  // duas maneiras de fazer 
console.log(avaliaçaoDoaluno)

