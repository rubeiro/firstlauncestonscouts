document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var usernameIN = document.getElementById("username").value;
    var passwordIN = document.getElementById("password").value;

    var usernameOUT = "leader@scouts"
    var passwordOUT = "pl159en"

    if (usernameIN === usernameOUT && passwordIN === passwordOUT) {
        window.location.href = "construction.html";
    } else {
        // Display an error message (optional)
        alert("Invalid username or password. Please try again.");
        window.location.href = "login.html";
    }
});