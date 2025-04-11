// Button elements
const Zero = document.getElementById("0");
const One = document.getElementById("1");
const Two = document.getElementById("2");
const Three = document.getElementById("3");
const Four = document.getElementById("4");
const Five = document.getElementById("5");
const Six = document.getElementById("6");
const Seven = document.getElementById("7");
const Eight = document.getElementById("8");
const Nine = document.getElementById("9");
const Division = document.getElementById("division");
const Multiple = document.getElementById("multiple");
const Add = document.getElementById("add");
const Sub = document.getElementById("sub");
const Equal = document.getElementById("equal");
const Clear = document.getElementById("clear");
const Decimal = document.getElementById("decimal");
const Backspace = document.getElementById("backspace");

// Display elements
const displayHistory = document.getElementById("history");
const displayCurrent = document.getElementById("in1");
const displayOperation = document.getElementById("operation");

// Initialize display
displayCurrent.textContent = "0";
let currentInput = "0";
let previousInput = "";
let currentOperator = "";
let calculationPerformed = false;

// Number button event listeners
Zero.addEventListener("click", () => appendNumber(0));
One.addEventListener("click", () => appendNumber(1));
Two.addEventListener("click", () => appendNumber(2));
Three.addEventListener("click", () => appendNumber(3));
Four.addEventListener("click", () => appendNumber(4));
Five.addEventListener("click", () => appendNumber(5));
Six.addEventListener("click", () => appendNumber(6));
Seven.addEventListener("click", () => appendNumber(7));
Eight.addEventListener("click", () => appendNumber(8));
Nine.addEventListener("click", () => appendNumber(9));
Decimal.addEventListener("click", () => appendDecimal());

// Operator button event listeners
Division.addEventListener("click", () => handleOperator("/"));
Multiple.addEventListener("click", () => handleOperator("*"));
Sub.addEventListener("click", () => handleOperator("-"));
Add.addEventListener("click", () => handleOperator("+"));
Equal.addEventListener("click", () => calculateResult());
Clear.addEventListener("click", () => clearCalculator());
Backspace.addEventListener("click", () => handleBackspace());

// Function to append a number to the current input
function appendNumber(num) {
  // If a calculation was just performed, start fresh
  if (calculationPerformed) {
    currentInput = "0";
    calculationPerformed = false;
  }
  
  // Replace the initial 0 or start fresh after operator
  if (currentInput === "0") {
    currentInput = num.toString();
  } else {
    currentInput += num.toString();
  }
  
  updateDisplay();
}

// Function to append decimal point
function appendDecimal() {
  // If a calculation was just performed, start fresh
  if (calculationPerformed) {
    currentInput = "0";
    calculationPerformed = false;
  }
  
  // Only add decimal if it doesn't already contain one
  if (!currentInput.includes('.')) {
    currentInput += '.';
  }
  
  updateDisplay();
}

// Function to handle operator clicks
function handleOperator(operator) {
  // If there's already an input and operator, calculate the result first
  if (previousInput !== "" && currentInput !== "" && currentOperator !== "") {
    calculateResult();
  }
  
  // Store the current input as previous input
  previousInput = currentInput;
  
  // Set the current operator
  currentOperator = operator;
  
  // Update the display
  displayOperation.textContent = getOperatorSymbol(operator);
  displayHistory.textContent = previousInput;
  
  // Reset current input for next number
  currentInput = "0";
  updateDisplay();
}

// Function to calculate the result
function calculateResult() {
  // Only calculate if we have both inputs and an operator
  if (previousInput === "" || currentInput === "" || currentOperator === "") {
    return;
  }
  
  // Convert inputs to numbers
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  
  // Perform calculation
  let result;
  switch (currentOperator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      // Check for division by zero
      if (current === 0) {
        clearCalculator();
        displayCurrent.textContent = "Error";
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }
  
  // Update history display
  displayHistory.textContent = `${previousInput} ${getOperatorSymbol(currentOperator)} ${currentInput}`;
  
  // Update current display with result
  currentInput = result.toString();
  updateDisplay();
  
  // Clear operator and previous input
  previousInput = "";
  currentOperator = "";
  displayOperation.textContent = "";
  
  // Mark that a calculation was performed
  calculationPerformed = true;
}

// Function to clear the calculator
function clearCalculator() {
  currentInput = "0";
  previousInput = "";
  currentOperator = "";
  calculationPerformed = false;
  
  displayCurrent.textContent = "0";
  displayHistory.textContent = "";
  displayOperation.textContent = "";
}

// Function to handle backspace button
function handleBackspace() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }
  
  updateDisplay();
}

// Function to update the current display
function updateDisplay() {
  displayCurrent.textContent = currentInput;
}

// Function to get the appropriate operator symbol
function getOperatorSymbol(operator) {
  switch (operator) {
    case "+":
      return "+";
    case "-":
      return "−";
    case "*":
      return "×";
    case "/":
      return "÷";
    default:
      return "";
  }
}