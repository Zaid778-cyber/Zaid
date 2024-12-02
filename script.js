// Handle form submission
const form = document.getElementById("signupForm");
        
form.addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Validate user input
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();

    if (username === "" || password === "" || email === "") {
        alert("Please fill out all fields.");
    } else {
        // Redirect to another page
        window.location.href = "success.html";
    }
});