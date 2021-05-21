
function convertFahrToCelcius() {

    let fahrValue = prompt("enter a valid number");

    let celcius = fahrValue - 32;
    let result = celcius * 0.555556;
    let finalResult = result.toFixed(4);

    console.log(finalResult + "degC");

}
convertFahrToCelcius();