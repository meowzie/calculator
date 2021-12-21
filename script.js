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

function operate(num1, operator, num2) {
    let answer;
    switch (operator) {
        case "+":
            answer = add(num1, num2);
            break;
        case "-":
            answer = subtract(num1, num2);
            break;
        case "×":
            answer = multiply(num1, num2);
            break;
        case "÷":
            answer = divide(num1, num2);
    };
    return answer;
}

let buttons = document.querySelectorAll('.button');
let numbers = document.querySelectorAll('.numbers')
let operators = document.querySelectorAll('.operators')
let paraNum1 = document.querySelector('.para-num1');
let paraOperator = document.querySelector('.para-operator');
let paraNum2 = document.querySelector('.para-num2');
let num1 = '';
let num2 = '';
let counter = 0;




numbers.forEach(number => number.addEventListener('click', () => {
    if (counter>counterAtOperator) return;
    let inputNum
    if (number.classList.contains('1')) {
        inputNum = `1`;
    } else if (number.classList.contains('2')) {
        inputNum = `2`;
    } else if (number.classList.contains('3')) {
        inputNum = `3`;
    } else if (number.classList.contains('4')) {
        inputNum = `4`;
    } else if (number.classList.contains('5')) {
        inputNum = `5`;
    } else if (number.classList.contains('6')) {
        inputNum = `6`;
    } else if (number.classList.contains('7')) {
        inputNum = `7`;
    } else if (number.classList.contains('8')) {
        inputNum = `8`;
    } else if (number.classList.contains('9')) {
        inputNum = `9`;
    } else if (number.classList.contains('0')) {
        inputNum = `0`;
    } else if (number.classList.contains('dot')) {
        inputNum = `.`;
    }
    num1 += inputNum
    paraNum1.textContent = num1;
    counter++;
}));

let counterAtOperator;
function inputSecondNum() {
    if (counter===counterAtOperator+1) return true;
}

let theOperator;

operators.forEach(operator => operator.addEventListener('click', () => {
    if (counter<1) return;
    
    if (operator.classList.contains('plus')) {
        theOperator = `+`;
    } else if (operator.classList.contains('minus')) {
        theOperator = `-`
    } else if (operator.classList.contains('multiply')) {
        theOperator = `×`
    } else if (operator.classList.contains('divide')) {
        theOperator = `÷`
    }
    paraOperator.textContent = theOperator;
    counterAtOperator = counter;
    counter++
    if (inputSecondNum()) {
        numbers.forEach(number => number.addEventListener('click', () => {
            let inputNum
            if (number.classList.contains('1')) {
                inputNum = `1`;
            } else if (number.classList.contains('2')) {
                inputNum = `2`;
            } else if (number.classList.contains('3')) {
                inputNum = `3`;
            } else if (number.classList.contains('4')) {
                inputNum = `4`;
            } else if (number.classList.contains('5')) {
                inputNum = `5`;
            } else if (number.classList.contains('6')) {
                inputNum = `6`;
            } else if (number.classList.contains('7')) {
                inputNum = `7`;
            } else if (number.classList.contains('8')) {
                inputNum = `8`;
            } else if (number.classList.contains('9')) {
                inputNum = `9`;
            } else if (number.classList.contains('0')) {
                inputNum = `0`;
            } else if (number.classList.contains('dot')) {
                inputNum = `.`;
            }
            num2 += inputNum
            paraNum2.textContent = num2;
        }))
    }
}));

let equal = document.querySelector('.equal');
let display = document.querySelector('.display');
let answer = document.createElement('p');
answer.classList.add('para');

equal.addEventListener('click', () => {
    num1 = Number(num1);
    num2 = Number(num2);
    paraNum1.textContent = ""
    paraNum2.textContent = ""
    paraOperator.textContent = ""
    display.appendChild(answer);
    answer.textContent = `${operate(num1, theOperator, num2)}`
})

let clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    if (answer.textContent===`${operate(num1, theOperator, num2)}`) {
        display.removeChild(answer);
        num1 = '';
        num2 = '';
        theOperator = '';
    } else {
        paraNum1.textContent = ""
        num1 = ''
        paraNum2.textContent = ""
        num2 = ''
        paraOperator.textContent = ""
        theOperator = ''
    }
})