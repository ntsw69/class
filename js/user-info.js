document.addEventListener("DOMContentLoaded", function () {
  const email = localStorage.getItem("userEmail");
  const password = localStorage.getItem("userPassword");

  // Ensure both email and password exist before allowing access
  if (!email || !password || email.trim() === "" || password.trim() === "") {
      window.location.href = "https://class.noteswift.in/sign-in.html"; // Redirect if user is not logged in
  }
});

function logout() {
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userPassword");
  window.location.href = "https://class.noteswift.in/sign-in.html"; // Redirect after logout
}
