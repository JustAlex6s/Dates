const calculateFutureDateTime = () => {
    const hoursInput = document.getElementById('hours');
    const resultElement = document.getElementById('result');
    const hours = parseFloat(hoursInput.value);

    if (!isNaN(hours)) {
        const futureDate = new Date(Date.now() + hours * 3600000);
        resultElement.textContent = `Future Date and Time: ${futureDate.toLocaleString()}`;
    } else {
        resultElement.textContent = 'Please enter a valid number of hours.';
    }
};

document.getElementById('hours').addEventListener('keyup', calculateFutureDateTime);