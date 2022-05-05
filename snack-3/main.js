//Creo due div e creo un ID per ognuno
const divRed = document.createElement("div")
divRed.setAttribute(`id`, `red`)
const divGreen = document.createElement("div")
divGreen.setAttribute(`id`, `green`)
//Inserisco le proprietà richiesta ai div
divRed.style.color = `red`
divGreen.style.color = `green`
//Creo la variabile per il contenitore dei due div
const container = document.querySelector("div.container")
//Creo un array casualmente sia per n. di elementi che per numeri al suo interno
let numbers = []
for (let i = 0; i < (Math.floor(Math.random() * 50) + 10); i++ ) {
    numbers.push(Math.floor(Math.random() * 10))
    //Se il numero creato è pari, allora andrà inserito all'interno del div verde... se è dispari in quello rosso
    if (numbers[i] % 2 == 0) {
        divGreen.innerHTML += (`${numbers[i]} `)
    } else {
        divRed.innerHTML += (`${numbers[i]} `)
    }
}
console.log(numbers)
container.append(divRed, divGreen)

