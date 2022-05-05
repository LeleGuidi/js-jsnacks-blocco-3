//Creo una variabile per inserire il numero dell'utente
let N = 0
//Chiedo il numero all'untente e finchè non inserisce un valore numerico continuo a chiederglielo
do {
    N = prompt("Inserisci un numero")
} while (isNaN(N))

//Creo tanti array quanti il numero inserito dall'utente
while (N != 0) {
    N--
    let array = []
    //In ogni array inserisco 10 numeri da 1 a 100
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 100) + 1)
    }
    //Per ogni array creato e riempito faccio una stampa
    console.log(array)
}
