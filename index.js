const firstInput = document.querySelector('.js-calculator__input_first');
const secondInput = document.querySelector('.js-calculator__input_second');
const operationsSelect = document.querySelector('.js-calculator__select');
const resultButton = document.querySelector('.js-calculator__button');
const output = document.querySelector('.js-calculator__output');

console.log(typeof operationsSelect.value);

resultButton.addEventListener('click', () => {
  firstNumber = parseInt(firstInput.value, 10);
  secondNumber = parseInt(secondInput.value, 10);

  let result = null;

  switch (operationsSelect.value) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
    case '*':
      result = firstNumber * secondNumber;
  }
});
