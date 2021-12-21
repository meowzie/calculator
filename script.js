function add(num1, num2) {
    return num1 + num2;
};
function subtract(num1, num2) {
    return num1 - num2;
};
function multiply(num1, num2) {
    return num1*num2;
};
function divide(num1, num2) {
    return num1/num2;
};
function operate(object) {
    let answer;
    inputs.operandOne = Number(inputs.operandOne);
    inputs.operandTwo = Number(inputs.operandTwo);
    switch (object.operator) {
        case "+":
            answer = add(object.operandOne, object.operandTwo);
            break;
        case "-":
            answer = subtract(object.operandOne, object.operandTwo);
            break;
        case "×":
            answer = multiply(object.operandOne, object.operandTwo);
            break;
        case "÷":
            answer = divide(object.operandOne, object.operandTwo);
    };
    return answer;
};

let numbers = document.querySelectorAll('.numbers');
let operators =  document.querySelectorAll('.operators');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let para = document.querySelector('.para');

let inputs = {
    operandOne: '',
    operator: '',
    operandTwo: ''
};
let answer = '';
let counter = 0;

para.textContent = '0';

function appendToPara(string) {
    if (shouldReset(para)) reset();
    answer = '';
    para.textContent += string;
};

function shouldReset(paragraph) {
    if (paragraph.textContent==='0' || answer!=='') return true;
    else return false;
};

function decideIfFirst(decider) {
    if (decider%2===0) return true;
    else return false;
};

function reset() {
    para.textContent = '';
    answer = ''
    counter = 0;
    inputs = {
        operandOne: '',
        operator: '',
        operandTwo: ''
    };
};

numbers.forEach(number => number.addEventListener('click', e => {
    appendToPara(number.textContent);
    if (decideIfFirst(counter)) inputs.operandOne += number.textContent;
    else inputs.operandTwo += number.textContent;
}))

operators.forEach(operator => operator.addEventListener('click', e => {
    appendToPara(operator.textContent);
    inputs.operator = operator.textContent;
    counter++;
}))

equal.addEventListener('click', e => {
    answer = `${operate(inputs)}`
    para.textContent = answer;
})

clear.addEventListener('click', e => {
    reset();
    para.textContent = `0`;
})