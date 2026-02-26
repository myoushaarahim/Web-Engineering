function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }



    let num1 = parseFloat(prompt("Enter first number:"));
    let operator = prompt("Enter operator (+, -, *, /):");
    let num2 = parseFloat(prompt("Enter second number:"));

    let operations = {
        "+": add,
        "-": subtract,
        "*": multiply,
        "/": divide
    };

    let result = operations[operator](num1, num2);

    alert("Result = " + result);
