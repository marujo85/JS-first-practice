const myage = 33
document.write(`My age is ${33}y <br/>`)


const num1 = 10
const num2 = 20
const sum = num1 + num2
document.write(`O resultado da soma de ${num1} e ${num2} é ${sum} <br/>`)


const total = 199.99
const parcelas = 24
const valorParcela = total / parcelas
document.write(`O valor total da compra foi R$${total.toString().replace('.',',')} <br/>`)
document.write(`Forma de pagamento: ${parcelas}x de R$${valorParcela.toFixed(2).replace('.' , ',')} <br/>`)


const totalMinutes = 120
const totalSeconds = totalMinutes * 60
document.write(`${totalMinutes} minutos equivale à ${totalSeconds} segundos! <br/>`)


const name = 'Gian' 
const value1 = 7
const value2 = 8
const value3 = 10
const media = (value1+value2+value3)/3

document.write(`O aluno ${name} ficou com média ${media.toFixed(1)}<br>`)

let valueA = 10
let valueB = 20
let valueC = valueA

valueA = valueB
valueB = valueC

document.write(`A: ${valueA} B:${valueB}<br/>`)

let totalVotes = Number(prompt("Total de votos:"))
let whiteVotes = Number(prompt("Total de votos brancos:"))
let nulVotes = Number(prompt("Total de votos nulos:"))

const whitePerCent = (whiteVotes/totalVotes)*100
const nulPerCent = (nulVotes/totalVotes)*100

const validVotes = ((totalVotes - (nulVotes + whiteVotes))/totalVotes)*100

document.write(`Percentual de votos validos é ${validVotes.toFixed(2)}%, percentual de votos nulos é ${nulPerCent.toFixed(2)}% e o percentual de votos brancos é ${whitePerCent.toFixed(2)}% <br/>`)


const first = 33
const second = 13

if(first === second) {
    document.write(`Números iguais!<br/>`)
} else if (first > second) {
    document.write(`O primeiro número é maior!<br/>`)
} else {
    document.write(`O segundo número é maior!<br/>`)
}

const apples = 25

if (apples > 12) {
	document.write (`Valor R$ ${(apples * 0.25).toFixed(2).replace ('.', ',')}<br/>`)
}
	else {
		document.write (`Valor R$ ${(apples * 0.30).toFixed(2).replace ('.',',')} <br/>`) 
		}


const nombre = 'Matheus'
const edad = 3
document.write(`Nome: ${nombre} Idade:${edad} Ano de nascimento:${2023 - edad} <br/>`)



const numero = 15

if (numero % 2 === 0) {
	document.write(`O numero ${numero} é PAR! <br/>`)
} else {
	document.write (`O numero ${numero} é IMPAR! <br/>`)
}


const currentYear = 2023
const birthYear = 1997

const age_1 = currentYear - birthYear 

if(age_1 >= 16) {
	document.write(`Você terá a infelicidade de votar este ano`)
} else {
	document.write(`Você se safou de ter que escolher um candidato`)
}