
function getHistory() {
    return document.getElementById('history-value').innerText;
}

function printHistory(num) {
    document.getElementById('history-value').innerText=num;
}

function getOutput() {
    return document.getElementById('output-value').innerText;
}

function printOutput(num) {
    if (num === "") {
        document.getElementById('output-value').innerText=num
    } else {
        document.getElementById('output-value').innerText=getFormattedNumber(num);
    }
}

function getFormattedNumber(num) { //This adds commas to the numbers
    if (num === '-') {
        return '';
    }
    const n = Number(num);
    const value = n.toLocaleString('en');
    return value;
}

function reverseNumberFormat(num) { //removes the comma from numbers
    return Number(num.replace(/,/g,''));
}

const operator = document.getElementsByClassName('operator');
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        if (this.id == 'clear') {
            printHistory('');
            printOutput('');

        } else if (this.id === 'backspace') {
            let output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length-1);
                printOutput(output)
            }

        } else {
            let output = getOutput()
            let history = getHistory()
            if (output == '' && history != '') {
                if (isNaN(history[history.length-1])) {
                    history = history.substr(0, history.length-1)
                }
            }
            if (output != '' || history != '')  { //output is not empty
                output = output == '' ? output:reverseNumberFormat(output);
                history = history + output;
                if (this.id === 'equal') {
                    console.log(history)
                    const result = eval(history);
                    printOutput(result)
                    printHistory('')

                } else {
                    history = history+this.innerText;
                    printHistory(history);
                    printOutput('')
                }
            }
        }
    })
}

const number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        let output = reverseNumberFormat(getOutput());
        if (output != NaN) { //if output is a number
            output = output+this.innerText
            printOutput(output)
        }
    })
}
