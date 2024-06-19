function validatePasswords() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        // Set custom validity message for the confirm password field
        document.getElementById("confirm-password").setCustomValidity("invalid");
        document.getElementById("password").setCustomValidity("invalid");

    } else {
        // Clear custom validity message and remove invalid class
        document.getElementById("confirm-password").setCustomValidity("");
        
        document.getElementById("password").setCustomValidity("");


    }
}

document.getElementById("password").addEventListener("input", validatePasswords);
document.getElementById("confirm-password").addEventListener("input", validatePasswords);