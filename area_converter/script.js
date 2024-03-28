function convert() {
    var inputArea = parseFloat(document.getElementById("input_area").value);
    var selectUnit = document.getElementById("select_unit").value;
    var result = {};
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
    document.getElementById("result").innerHTML = "\n      <p><strong>Square Meters:</strong> ".concat(result.squareMeters.toFixed(2), "</p>\n      <p><strong>Square Feet:</strong> ").concat(result.squareFeet.toFixed(2), "</p>\n      <p><strong>Acres:</strong> ").concat(result.acres.toFixed(2), "</p>\n    ");
}
