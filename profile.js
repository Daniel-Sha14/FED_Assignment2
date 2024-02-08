
$(document).ready(function () {
    // Retrieve user information from local storage
    var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    // Check if user information exists in local storage
    if (loggedInUser) {
        // Populate input boxes with user information after the DOM has loaded
        $(window).on('load', function () {
            $("#usernameInput").val(loggedInUser.name);
            $("#emailInput").val(loggedInUser.email);
            $("#genderInput").val(loggedInUser.gender);
            $("#passwordInput").val(loggedInUser.password);
            // Add more fields as necessary
        });
    } else {
        // Redirect the user to the login page if user information is not found
        // window.location.href = "login.html"; // Change the URL to your login page
    }
});


document.getElementById("saveButton").addEventListener("click", function() {
    location.reload(); // Reloads the page
});
