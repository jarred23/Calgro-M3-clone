const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});






//email input

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();


    const formData = new FormData(form);
    const name = formData.get("Name");
    const email = formData.get("Email");
    const phone = formData.get("Phone");
    const message = formData.get("Message");

    const emailData = {
      to: "jarredcockett2003@mail.com", 
      subject: "New Client from Young Properties",
      body: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    // Send the data to the email API or backend for processing
    // This part depends on the email service or server-side technology you are using

    // For example, you can use fetch API to send the data to a server
    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => {
        // Handle the response here if needed
        // For example, show a success message to the user
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch
      });
  });
});
