let currentNumber = '';
let previousNumber = '';
let operator = null;

function appendNumber(number) {
  if (currentNumber.includes('.') && number === '.') return;
  currentNumber = currentNumber + number;
  updateDisplay(currentNumber);
}

function updateDisplay(number) {
  const display = document.getElementById('display');
  display.textContent = number;
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operator = null;
  updateDisplay('0');
}

function setOperator(op) {
  if (currentNumber === '') return;
  if (previousNumber !== '') calculate();
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  operator = null;
  previousNumber = '';
  updateDisplay(currentNumber);
}

function invert() {
  if (currentNumber === '') return;
  currentNumber = (parseFloat(currentNumber) * -1).toString();
  updateDisplay(currentNumber);
}

function percent() {
  if (currentNumber === '') return;
  currentNumber = (parseFloat(currentNumber) / 100).toString();
  updateDisplay(currentNumber);
}
