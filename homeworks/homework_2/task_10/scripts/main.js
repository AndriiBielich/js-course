const firstNumber = +prompt('Please enter first number');
const secondNumber = +prompt('Please enter second number');

if (firstNumber === secondNumber) {
    console.log('Numbers are equal');
} else {
    const max = firstNumber > secondNumber ? firstNumber : secondNumber;
    console.log(`Max number is ${max}`);
}
