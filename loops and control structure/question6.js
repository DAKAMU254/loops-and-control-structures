// Write a JavaScript program that takes two numbers and an operator (+, -, *, /) as input
// and performs the corresponding operation using the switch statement
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            console.log(`The result is ${num1 + num2}.`);
            break;
        case '-':
            console.log(`The result is ${num1 - num2}.`);
            break;
        case '*':
            console.log(`The result is ${num1 * num2}.`);
            break;
        case '/':
            if (num2 !== 0) {
                console.log(`The result is ${num1 / num2}.`);
            } else {
                console.log('Division by zero is not allowed.');
            }
            break;
        default:
            console.log('Invalid operator.');
    }
}

// Example usage:
calculate(10, 5, '+'); // The result is 15.
calculate(10, 5, '-'); // The result is 5.
calculate(10, 5, '*'); // The result is 50.
calculate(10, 0, '/'); // Division by zero is not allowed.
