console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const newElement = document.createElement("li");
  newElement.classList.add("toast-container__message");
  newElement.textContent = "text";
  toastContainer.append(newElement);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});
