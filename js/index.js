function getValues() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  return { num1, num2 };
}

function showResult(message) {
  document.getElementById("result").innerText = message;
}

function add() {
  let { num1, num2 } = getValues();
  if (isNaN(num1) || isNaN(num2)) {
    showResult("Please enter both numbers.");
    return;
  }
  showResult("Addition Result: " + (num1 + num2));
}

function subtract() {
  let { num1, num2 } = getValues();
  if (isNaN(num1) || isNaN(num2)) {
    showResult("Please enter both numbers.");
    return;
  }
  showResult("Subtraction Result: " + (num1 - num2));
}

function multiply() {
  let { num1, num2 } = getValues();
  if (isNaN(num1) || isNaN(num2)) {
    showResult("Please enter both numbers.");
    return;
  }
  showResult("Multiplication Result: " + (num1 * num2));
}

function divide() {
  let { num1, num2 } = getValues();
  if (isNaN(num1) || isNaN(num2)) {
    showResult("Please enter both numbers.");
    return;
  }
  if (num2 === 0) {
    showResult("Cannot divide by zero.");
    return;
  }
  showResult("Division Result: " + (num1 / num2));
}

function squareRoot() {
  let num1 = parseFloat(document.getElementById("num1").value);
  if (isNaN(num1)) {
    showResult("Please enter the first number.");
    return;
  }
  if (num1 < 0) {
    showResult("Square root of negative number is not allowed.");
    return;
  }
  showResult("Square Root Result: " + Math.sqrt(num1));
}

function cubeRoot() {
  let num1 = parseFloat(document.getElementById("num1").value);
  if (isNaN(num1)) {
    showResult("Please enter the first number.");
    return;
  }
  showResult("Cube Root Result: " + Math.cbrt(num1));
}

function power() {
  let { num1, num2 } = getValues();
  if (isNaN(num1) || isNaN(num2)) {
    showResult("Please enter both numbers.");
    return;
  }
  showResult("Power Result: " + (num1 ** num2));
}

function clearFields() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  showResult("Your result will appear here");
}
