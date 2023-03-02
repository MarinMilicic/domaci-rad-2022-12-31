/* 
3. Napisi funkciju koja ce primiti niz sljedecih tokena proizvoljnog redoslijeda:
hello_world, winter_assignment, first_week, second_week, success_result, fail_result

a) Funkcija ce svaki token zamijeniti sa sljedecim recenicama i kao rezultat ih spojiti u string:
hello_world - Pozdrav svima, mi smo studenti!
winter_assignment - Za praznike smo dobili domaci.
first_week - Prvi tjedan smo odmarali.
second_week - Drugi tjedan smo radili.
success_result - Svi koji su uspjesno rjesili su odmarali i dalje.
fail_result - Oni koji nisu uspjesno rjesili radili su vise. 

Ako niz sadrzi token koji nije prepoznat, funkcija ce ga zamjeniti sa: 'ERROR: UNDEFINED TOKEN'

b) File ce kao ulazni parametar (process.argv) primati jezik. Ukoliko je jezik en funkcija ce tokene
zamjeniti sa engleskim recenicama. Ukoliko je jezik hr ili bilo koji drugi, funkcija ce tokene zamjeniti 
sa prethodno navedenim hrvatskim recenicama.
*/

function trans(arr) {
    const locale = process.argv[2]

    const language = {
        hr: {
            hello_world: "Pozdrav svima, mi smo studenti!",
            winter_assignment: "Za praznike smo dobili domaci.",
            first_week: "Prvi tjedan smo odmarali.",
            second_week: "Drugi tjedan smo radili.",
            success_result: "Svi koji su uspjesno rjesili su odmarali i dalje.",
            fail_result: "Oni koji nisu uspjesno rjesili radili su vise.",
        },
        en: {
            hello_world: "Hello everyone, we are students!",
            winter_assignment: "We got homework for the holidays.",
            first_week: "The first week we rested.",
            second_week: "The second week we worked.",
            success_result: "All those who successfully solved it continued to rest.",
            fail_result: "Those who did not solve it successfully worked harder.",
        }
    }

    const translation = language[locale] || language.hr

    let string = ""

    for (const val of arr) {
        string += translation[val] || 'ERROR: UNDEFINED TOKEN'
    }

    return string
}

let array = ["nešto", "winter_assignment", "first_week", "još nešto", "second_week", "success_result", "hello_world"]

console.log(trans(array))