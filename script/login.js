// step 1:event listener to the submit button

document.getElementById("btn-submit").addEventListener("click", function () {
  // step 2: get the email address inside the email input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  const passField = document.getElementById("user-pass");
  const pass = passField.value;
  if (email === "said@mail.com" && pass === "1234") {
    location.href = "bank.html";
  } else {
    alert('Wrong Input')
  }
});
