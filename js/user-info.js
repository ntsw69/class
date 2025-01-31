
document.addEventListener("DOMContentLoaded", function () {
    const email = sessionStorage.getItem("userEmail");
    const password = sessionStorage.getItem("userPassword");

    // Ensure both email and password exist before allowing access
    if (!email || !password || email.trim() === "" || password.trim() === "") {
        window.location.href = "sign-in.html"; // Redirect if user is not logged in
    }
});

function logout() {
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("userPassword");
    window.location.href = "sign-in.html";
}

