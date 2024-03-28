function convert() {
  const inputArea = parseFloat(
    (document.getElementById("input_area") as HTMLInputElement).value
  );
  const selectUnit = (
    document.getElementById("select_unit") as HTMLSelectElement
  ).value;
  let result: { [key: string]: number } = {};

  switch (selectUnit) {
    case "square_meters":
      result = {
        squareMeters: inputArea,
        squareFeet: inputArea * 10.764,
        acres: inputArea * 0.000247105,
      };
      break;
    case "square_feet":
      result = {
        squareMeters: inputArea / 10.764,
        squareFeet: inputArea,
        acres: (inputArea / 10.764) * 0.000247105,
      };
      break;
    case "acres":
      result = {
        squareMeters: inputArea / 0.000247105,
        squareFeet: (inputArea / 0.000247105) * 10.764,
        acres: inputArea,
      };
      break;
    default:
      break;
  }

  document.getElementById("result")!.innerHTML = `
      <p><strong>Square Meters:</strong> ${result.squareMeters.toFixed(2)}</p>
      <p><strong>Square Feet:</strong> ${result.squareFeet.toFixed(2)}</p>
      <p><strong>Acres:</strong> ${result.acres.toFixed(2)}</p>
    `;
}
