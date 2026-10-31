const form = document.querySelector("#eventForm");
const type = document.querySelector("#type");
const studentId = document.querySelector("#studentId");
const accessCode = document.querySelector("#accessCode")
const studentIdInput = document.querySelector("#studentIdInput");
const accessCodeInput = document.querySelector("#accessCodeInput");
const output = document.querySelector("#output");

function typeField() {
  const value = type.value;
  if (value === "one") {
    studentId.hidden = false;
    studentIdInput.required = true;
    accessCode.hidden = true;
    accessCodeInput.required = false;
  } else if (value === "many") {
    studentId.hidden = true;
    studentIdInput.required = false;
    accessCode.hidden = false;
    accessCodeInput.required = true;
  } else {
    studentId.hidden = true;
    studentIdInput.required = false;
    accessCode.hidden = true;
    accessCodeInput.required = false;
  }
}

type.addEventListener("change", typeField);

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const eventDate = form.eventDate.value;

  if (type.value === "one" && studentIdInput.value.length !== 9) {
    output.textContent = "Student I# must be 9 digits";
    return;
}

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Event Date: ${eventDate}</p>
  `;

  form.reset();
  typeField();
});