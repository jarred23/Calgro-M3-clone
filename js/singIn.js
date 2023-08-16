let loginAttempts = 0;

function checkLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("userpassword").value; // Corrected ID

  const userDataJSON = localStorage.getItem("userData");

  if (userDataJSON === null) {
    alert("No user data found. Please sign up first.");
    return;
  }

  const userData = JSON.parse(userDataJSON);

  if (userData.username === username && userData.password === password) {
     
    //alert("Login successful!");//
    window.location.href = "home.html";
  } else {
    loginAttempts++;
    if (loginAttempts >= 3) {
      alert(
        "You have reached the maximum number of login attempts. Please try again later."
      );
      document.getElementById("username").disabled = true;
      document.getElementById("userpassword").disabled = true;
      document.getElementById("button-enter").disabled = true;
    } else {
      alert(
        `Invalid username or password. You have ${
          3 - loginAttempts
        } attempts left.`
      );
    }
  }
}

function movePage() {
  document.getElementById("homeEnter").click();
}

