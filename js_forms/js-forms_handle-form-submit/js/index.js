console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  const targetElements = event.target.elements;
  event.preventDefault();
  const data = {
    firstName: targetElements.firstName.value,
    lastName: targetElements.lastName.value,
    age: targetElements.age.value,
    email: targetElements.email.value,
    complaint: targetElements.complaint.value,
    details: targetElements.details.value,
    badness: targetElements.badness.value,
  };
  console.log("Userdata: ", data);

  const ageBadnessSum =
    Number(targetElements.age.value) + Number(targetElements.badness.value);

  console.log(
    `The age badness sum of ${targetElements.firstName.value} is ${ageBadnessSum}`
  );
  form.reset();
  targetElements.firstName.focus();
});
