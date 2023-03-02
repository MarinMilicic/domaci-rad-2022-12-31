/* 
6. Istrazi kako se koristi metoda sort. Koristeci tu metodu pomozi Barba Anti da sortira voce
na svom standu na pazaru. Voce je predstavljeno nizom objekata oblika: {name: string, price: number}
Barba Ante zeli prvo staviti najskuplje voce, dakle funkcija mora vracati niz objekata sortiran od veceg
prema manjem. 

Primjer: 
Input: [{name: 'banane', price:20}, {name: 'jagode', price:30}, {name: 'jabuke', quantity:15}]
Output: [{name: 'jagode', price:30}, {name: 'banane', price:20}, {name: 'jabuke', quantity:15}]

*/

function sortFruit(arr) {
    return arr.sort((a, b) => b.price - a.price)
}

const input = [
    { name: 'banane', price: 20 },
    { name: 'jagode', price: 30 },
    { name: 'jabuke', price: 15 },
]

console.log(sortFruit(input))