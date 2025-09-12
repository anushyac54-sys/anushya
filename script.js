document.getElementById("contactForm").addEventListener("submit", function (e) {

  e.preventDefault();

  // Simple form validation

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const message = document.getElementById("message").value.trim();

  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {

    formMessage.textContent = "Please fill out all fields.";

    formMessage.style.color = "red";

    return;

  }

  // Simulate sending message

  formMessage.textContent = "Message sent successfully!";

  formMessage.style.color = "green";

  // Reset form

  this.reset();

});

//I am writing these contents to increase the size of the java script file.

//I am writing these contents to increase the size of this file.

//I am writing these contents to increase the size of this file.

//am writing these contents to increase the size of this file.

//am writing these contents to increase the size of this file.

//am writing these contents to increase the size of this file.

//I am writing these contents to increase the size of the file.

//I am writing these contents to increase the size of this file