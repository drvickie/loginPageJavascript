function registerUser() {
  let username = prompt("Enter your username (less than 10 characters):");
  if (!username || username.length >= 10) {
    alert("Username must be less than 10 characters.");
    return;
  }

  let password = prompt("Enter your password (more than 6 characters):");
  if (!password || password.length <= 6) {
    alert("Password must be more than 6 characters.");
    return;
  }

  let confirmPassword = prompt("Confirm your password:");
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  const user = {
    username: username,
    password: password,
  };

  displayUser(user);
}

function displayUser(user) {
  const detailsDiv = document.getElementById("user-details");
  detailsDiv.classList.remove("hidden");
  detailsDiv.innerHTML = `
    <h3>User Details</h3>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Password:</strong> ${user.password}</p>
  `;
}