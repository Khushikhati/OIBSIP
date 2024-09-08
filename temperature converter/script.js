function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result = '';

    if (isNaN(temperature)) {
        alert("Please enter a valid number");
        return;
    }

    switch (unit) {
        case 'Fahrenheit':
            result = `${((temperature - 32) * 5 / 9).toFixed(2)} °C`;
            break;
        case 'Celsius':
            result = `${(temperature * 9 / 5 + 32).toFixed(2)} °F`;
            break;
        case 'Kelvin':
            result = `${(temperature - 273.15).toFixed(2)} °C`;
            break;
        default:
            result = 'Invalid unit';
            break;
    }

    document.getElementById('result').textContent = `Result: ${result}`;
}