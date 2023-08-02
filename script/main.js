const numberInput = document.getElementById('numberInput');
const identifyButton = document.getElementById('identifyButton');
const resultText = document.getElementById('resultText');

identifyButton.addEventListener('click', function () {
  const number = parseFloat(numberInput.value);
  if (isNaN(number) || !Number.isInteger(number)) {
    resultText.textContent = 'Invalid number. Please enter a valid integer number.';
  } else if (number % 2 === 0) {
    resultText.textContent = `${number} is an even number.`;
  } else {
    resultText.textContent = `${number} is an odd number.`;
  }
});
