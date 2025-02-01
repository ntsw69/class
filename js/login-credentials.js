document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const errorDiv = document.getElementById("login-error");

  const users = [
    { email: "acharyaprasiddha6@gmail.com", password: "12345678" },
    { email: "bikashpandey486@gmail.com", password: "admin@123" },
    { email: "jagdishbhatt@noteswift.in", password: "admin@eco123" },
    { email: "jayrajbhatt@noteswift.in", password: "admin@account" },
    { email: "bishalbhatta@noteswift.in", password: "admin@english" }
  ];

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    const user = users.find(u => u.email === email);

    if (!user) {
      errorDiv.textContent = "Invalid email, Please put the correct email!";
      errorDiv.style.display = "block";
    } else if (user.password !== password) {
      errorDiv.textContent = "Incorrect password, Please enter the correct password!";
      errorDiv.style.display = "block";
    } else {
      // Save credentials in localStorage instead of sessionStorage
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);

      // Redirect to index page after successful login
      window.location.href = "index.html";
    }
  });
});
