function verifyNumberInFibonacciArray(test_number) {

    if (typeof test_number !== 'number') {
        return console.log('This not a number.')
    }

    let fibonacci_array = [0, 1, 1];

    let array_last_element = fibonacci_array.slice(-1)[0];

    while (array_last_element < test_number) {
        let new_value = fibonacci_array.slice(-1)[0] + fibonacci_array.slice(-2)[0];
        fibonacci_array.push(new_value);
        array_last_element = fibonacci_array.slice(-1)[0];

    }
    if (fibonacci_array.includes(test_number)) {
        return console.log('This number belongs to Fibonacci Sequence.');
    }
    return console.log("This number don't belong to the fibonacci Sequence")

}

verifyNumberInFibonacciArray(3) // This number belongs to Fibonacci Sequence.
verifyNumberInFibonacciArray(6) // This number don't belong to the fibonacci Sequence
verifyNumberInFibonacciArray("w") // 'This not a number.'
