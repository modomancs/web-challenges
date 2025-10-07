console.clear();
const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

inputColor.addEventListener("input", () => {
  box.style.backgroundColor = `hsl(${inputColor.value}, 100%, 50%)`;
});

inputRadius.addEventListener("input", () => {
  if (inputRadius.value == inputRadius.max) {
    box.style.borderRadius = "50%";
  } else {
    box.style.borderRadius = `${inputRadius.value}px`;
  }
});

inputRotation.addEventListener("input", () => {
  box.style.transform = `rotate(${inputRotation.value}deg)`;
});
