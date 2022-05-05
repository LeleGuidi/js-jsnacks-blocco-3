//Creare un'array vuoto
let numbers = [];
let flag = true 
let sum = 0
//Chiedere all'utente un numero e inserirlo nell'array fino a quando la loro somma è inferiore a 50
while (flag) {
    const number = Number(prompt("Inserisci un numero"))
    //Se la somma più il numero è inferiore a 50 allora il numero dell'utente va inserito alla somma e all'array
    if ((sum + number) < 50) {
        sum += number 
        numbers.push(number)
    //Altrimenti il flag diventa falso e si esce dal ciclo
    } else {
        flag = false
    }
}
console.log(numbers, sum)
