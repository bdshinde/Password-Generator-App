const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|",
    ":", ";", "<", ">", ".", "?",
    "/"];
let firstPassEl = document.getElementById("pass1")
let secondPassEl = document.getElementById("pass2")

function generatePasswords() {
    if (firstPassEl.textContent === "" && secondPassEl.textContent === "") {
        for (let i = 0; i < 13; i++) {
            let randomIndex = Math.round(Math.random() * characters.length)
            firstPassEl.textContent += characters[randomIndex]
            console.log(characters[randomIndex])
        }
        for (let i = 0; i < 13; i++) {
            let randomIndex = Math.round(Math.random() * characters.length)
            secondPassEl.textContent += characters[randomIndex]
            console.log(characters[randomIndex])
        }
    }

}