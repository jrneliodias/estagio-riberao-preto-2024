function reverseString(inputString) {


    let reversedString = ""                         // Cria uma string vazia

    for (let i = inputString.length; i > 0; i--) {  // Faz um for loop para pegar o última letra e concatenar com a reversedString
        reversedString += inputString[i - 1]

    }

    return reversedString                           // retorna a string ao contrário
}

console.log(reverseString('array')) // yarra
console.log(reverseString("ball"))  // llab
console.log(reverseString("w"))     // w
console.log(reverseString(""))      // ""
console.log(reverseString("abcde")) // edcba
