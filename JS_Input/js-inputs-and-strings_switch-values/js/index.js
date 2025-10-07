console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const secondInput = document.querySelector('[data-js="second-input"]');
const switchButton = document.querySelector('[data-js="button-switch"]');

const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
  secondInput.value = secondInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
  secondInput.value = secondInput.value.toLowerCase();
});

switchButton.addEventListener("click", () => {
  [firstInput.value, secondInput.value] = [secondInput.value, firstInput.value];
});
