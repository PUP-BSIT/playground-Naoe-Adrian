document.getElementById("calculate")?.addEventListener("click", function () {
  const num1 = +(document.getElementById("num1") as HTMLInputElement)?.value;
  const num2 = +(document.getElementById("num2") as HTMLInputElement)?.value;
  const operator = (document.getElementById("operator") as HTMLSelectElement)
    ?.value;
  let result: number;

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

  const resultElement = document.getElementById("result");
  if (resultElement) {
    if (!isNaN(result)) {
      resultElement.textContent = "Result: " + result;
    } else {
      resultElement.textContent = "Invalid input or operation.";
    }
  }
});
