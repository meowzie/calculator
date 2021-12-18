function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
};
function subtract(num1, num2) {
    let difference = num1 - num2;
    return difference;
};
function multiply(num1, num2) {
    let product = num1*num2;
    return product;
};
function divide(num1, num2) {
    let quotient = num1/num2;
    return quotient;
};

function operate (num1, operator, num2) {
    let answer;
    switch (operator) {
        case "+":
            answer = add(num1, num2);
            break;
        case "-":
            answer = subtract(num1, num2);
            break;
        case "*":
            answer = multiply(num1, num2);
            break;
        case "/":
            answer = divide(num1, num2);
    };
    return answer;
}