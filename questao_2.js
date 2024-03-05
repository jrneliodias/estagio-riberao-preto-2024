function verifyNumberInFibonacciArray(test_number) {
   
    if (typeof test_number !== 'number') {                                            // Verifica se o argumento da função é um número
        return console.log('This not a number.')                                      // Se não for número, já se retorna que não é um número válido
    }
    let fibonacci_array = [0, 1, 1];                                                  // Criar os primeiros elementos da sequência de fibonacci
    let array_last_element = fibonacci_array.slice(-1)[0];                            // Retira-se o último termo

    while (array_last_element <= test_number) {                                        // Verificas-se o argumento da função é menor que o último termo da sequência
        let new_value = fibonacci_array.slice(-1)[0] + fibonacci_array.slice(-2)[0];  // Calcula-se o novo termo da sequência como sendo a soma dos últimos números
        fibonacci_array.push(new_value);                                              // insere-se o na última posição da sequência
        array_last_element = new_value;                                               // Armazena-se o último valor na variável array_last_number para comparar com o argumento na próxima iteração.

    }
    if (fibonacci_array.includes(test_number)) {                                      // Verifica-se o argumento 'test_number' da funcão pertence ao array 
        return console.log('This number belongs to Fibonacci Sequence.');
    }
    return console.log("This number don't belong to the fibonacci Sequence")          // Já que não retornou dentro do if, então não é um elemento da sequência de fibonacci.

}

verifyNumberInFibonacciArray(3) // This number belongs to Fibonacci Sequence.
verifyNumberInFibonacciArray(6) // This number don't belong to the fibonacci Sequence
verifyNumberInFibonacciArray("w") // 'This not a number.'
