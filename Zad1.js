/* 
1. Koristeci dvije ugnjezdene for petlje napisi funkciju koja kao ulazni parametar prima niz brojeva,
te kao rezultat vraca sortirani niz brojeva od veceg prema manjem. 

Primjer:
Input: [4,2,6,4,2,1]
Output: [1,2,2,4,4,6]

Dodatno: Pokusaj analizirati koliki bi bio ukupni broj iteracija za niz proizvoljne duzine.
*/

NumArr = [4, 2, 6, 4, 2, 1, 0, -5, 11]

function sort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let x = 0; x < i; x++) {
            if (arr[i] < arr[x]) {
                [arr[i], arr[x]] = [arr[x], arr[i]]
            }
        }
    }
    return arr
}

console.log(sort(NumArr))

// Broj iteracija bi odgovarao Triangular number-u za index zadnjeg broja u array-u