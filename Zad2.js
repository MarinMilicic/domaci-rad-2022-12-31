/* 
2. Napisi funkciju koja ce primiti proizvoljan string kao ulaz. Funkcija ce potom provjeriti jesu li
u tom stringu sve zagrade ispravno napisane. Ukoliko je svaka zagrada zatvorena rezultat funkcije 
ce biti true, ukoliko zagrade nisu ispravno zatvorene rezultat ce biti false.

Primjer 1: 
Input: '(a+b) * (c - d)'
Output: true

Primjer 2: 
Input: '(a+b * (c - d)'
Output: false

Primjer 3: 
Input: '(c * (a+b)) * (x - (y * (c - d)))'
Output: true
*/

function bracketCheck(string) {
    let leftBracket = 0
    let rightBracket = 0

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "(") {
            leftBracket++
        }
        if (string[i] === ")") {
            rightBracket++
        }
        if (rightBracket > leftBracket) {
            return false
        }
    }

    return leftBracket === rightBracket ? true : false
}

console.log(bracketCheck('(a+b) * (c - d)'))
console.log(bracketCheck('(a+b * (c - d)'))
console.log(bracketCheck('(c * (a+b)) * (x - (y * (c - d)))'))