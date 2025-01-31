
const users = [
{ email: "user@example.com", password: "password123" },
{ email: "admin@example.com", password: "admin@123" }
];

document.getElementById("login-form").addEventListener("submit", function (event) {
event.preventDefault();

const email = document.getElementById("login-email").value;
const password = document.getElementById("login-password").value;
const errorDiv = document.getElementById("login-error");

const user = users.find(u => u.email === email);

if (!user) {
 errorDiv.textContent = "Invalid email, Please put the correct email!";
 errorDiv.style.display = "block";
} else if (user.password !== password) {
 errorDiv.textContent = "Incorrect password, Please enter the correct password!";
 errorDiv.style.display = "block";
} else {
 window.location.href = "index.html";
}
});
