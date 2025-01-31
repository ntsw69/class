document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const errorDiv = document.getElementById("login-error");

  const users = [
    { email: "acharyaprasiddha6@gmail.com", password: "12345678" }, // Admin
    { email: "mathteacher@example.com", password: "admin@123" }, // Math Teacher
    { email: "mathteacher@example.com", password: "admin@123" } // Math Teacher
  ];

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    // Check if email exists
    const user = users.find(u => u.email === email);

    if (!user) {
      errorDiv.textContent = "Invalid email, Please put the correct email!";
      errorDiv.style.display = "block";
    } else if (user.password !== password) {
      errorDiv.textContent = "Incorrect password, Please enter the correct password!";
      errorDiv.style.display = "block";
    } else {
      // Save credentials to session storage if valid
      sessionStorage.setItem("userEmail", email);
      sessionStorage.setItem("userPassword", password);

      // Redirect to index page after successful login
      window.location.href = "index.html";
    }
  });
});
