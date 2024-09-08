let currentExpression = ''; // This will store the entire expression
let currentInput = ''; // This will store the current number being typed

function appendNumber(number) {
    currentInput += number; // Append the clicked number to the current input
    currentExpression += number; // Add the number to the full expression
    updateDisplay(currentExpression); // Update the display with the full expression
}

function setOperator(op) {
    if (currentInput === '' && currentExpression === '') return; // Prevents setting operator without a number

    // If the user tries to enter two operators in a row, prevent this
    if (currentExpression.slice(-1) === '+' || currentExpression.slice(-1) === '-' || 
        currentExpression.slice(-1) === '*' || currentExpression.slice(-1) === '/') {
        return;
    }

    currentExpression += op; // Add the operator to the full expression
    currentInput = ''; // Reset the current input for the next number
    updateDisplay(currentExpression); // Update the display with the full expression
}

function calculate() {
    if (currentExpression === '') return;

    try {
        const result = eval(currentExpression); // Evaluate the full expression
        updateDisplay(result);
        currentExpression = result.toString(); // Set the result as the new expression
        currentInput = ''; // Reset current input
    } catch (error) {
        updateDisplay('Error'); // Handle any errors (e.g., invalid expressions)
        currentExpression = '';
        currentInput = '';
    }
}

function clearDisplay() {
    currentExpression = '';
    currentInput = '';
    updateDisplay('0');
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}
