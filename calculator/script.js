var _a;
(_a = document.getElementById("calculate")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a, _b, _c;
    var num1 = +((_a = document.getElementById("num1")) === null || _a === void 0 ? void 0 : _a.value);
    var num2 = +((_b = document.getElementById("num2")) === null || _b === void 0 ? void 0 : _b.value);
    var operator = (_c = document.getElementById("operator")) === null || _c === void 0 ? void 0 : _c.value;
    var result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = NaN;
    }
    var resultElement = document.getElementById("result");
    if (resultElement) {
        if (!isNaN(result)) {
            resultElement.textContent = "Result: " + result;
        }
        else {
            resultElement.textContent = "Invalid input or operation.";
        }
    }
});
