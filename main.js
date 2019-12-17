
function getHistory() {
   return document.getElementById('history-value').innerText
}

function printHistory(num) {
    document.getElementById('history-value').innerText=num;
}

// printHistory('99')
function getOutput() {
    return document.getElementById('output-value').innerText;
}

function printOutput(num) {
    if (num === '') {
        document.getElementById('output-value').innerText=num;
    } else {
        document.getElementById('output-value').innerText=getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    let n = Number(num)
    let value = n.toLocaleString('en')
    return value
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''));
}

const operators = document.getElementsByClassName('operator');
for(let i=0; i < operators.length; i++) {
    operators[i].addEventListener('click', function() {
        if (this.id==='clear') {
            printHistory('')
            printOutput('')
        }
        if (this.id==='backspace') {
            let removePreviousNumber = reverseNumberFormat(getOutput()).toString();
            if (removePreviousNumber) {
                removePreviousNumber = removePreviousNumber.substr(0,removePreviousNumber.length-1)
                printOutput(removePreviousNumber)
            }
        }
    })
}

const numbers = document.getElementsByClassName('number');
for (let i=0; i< numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        let consecutiveNumbers = reverseNumberFormat(getOutput());
        if (consecutiveNumbers != NaN) { // if consecutiveNumbers is a number 
            consecutiveNumbers = consecutiveNumbers+this.innerText;
            printOutput(consecutiveNumbers)
        }
    })
}

