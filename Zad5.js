/* 
5. Istrazi kako se koristi reduce metoda. Koristeci reduce metodu napisi dvije funkcije:
a) Prva funkcija racuna sumu niza brojeva

Primjer:
Input: [1,2,3,4]
Output: 10

b) Druga funkcija zbraja sve brojeve vece od 4, a oduzima sve manje

Primjer:
Input: [2,4,10,20]
Output: 24
*/

function arrAdd(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

function arrCC(arr) {
    return arr.reduce((accumulator, currentValue) => {
        if (currentValue > 4) {
            return accumulator + currentValue
        }
        return accumulator - currentValue
    }, 0)
}

const input = [2, 4, 10, 20]

console.log(arrAdd(input))
console.log(arrCC(input))