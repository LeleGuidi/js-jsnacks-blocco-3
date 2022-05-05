let numbers = [];
let sum = 0
do {
    const number = Number(prompt("Inserisci un numero"))
    numbers.push(number)
    sum += number
} while (sum < 50)
console.log(numbers, sum)