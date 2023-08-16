function saveData() {
  // Get form values
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create an object to hold the user data
  const userData = {
    username: username,
    email: email,
    password: password,
  };

  // Convert the object to a JSON string
  const userDataJSON = JSON.stringify(userData);

  // Save the JSON string to the local storage
  localStorage.setItem("userData", userDataJSON);

  // Optionally, you can display a message or redirect the user to another page after saving the data.
  alert("Data saved to local storage successfully!");
}
