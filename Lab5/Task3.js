document.getElementById("signupForm").addEventListener("submit", function(event) {

    event.preventDefault(); // stop form submission

    let isValid = true;

    // Clear old error messages
    document.querySelectorAll(".error").forEach(function(el) {
        el.innerHTML = "";
    });

    // Name Validation
    let name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Please fill Name field";
        isValid = false;
    }

    // Gender Validation
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("genderError").innerHTML = "Please select Gender";
        isValid = false;
    }

    // Email Validation
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter Email";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerHTML = "Invalid Email format";
        isValid = false;
    }

    // Address Validation
    let address = document.getElementById("address").value.trim();
    if (address === "") {
        document.getElementById("addressError").innerHTML = "Please enter Address";
        isValid = false;
    }

    // Login ID Validation
    let login = document.getElementById("login").value.trim();
    if (login === "") {
        document.getElementById("loginError").innerHTML = "Please enter Login ID";
        isValid = false;
    }

    // Password Validation
    let password = document.getElementById("password").value.trim();
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Please enter Password";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters";
        isValid = false;
    }

    // Policy Checkbox Validation
    let policy = document.getElementById("policy").checked;
    if (!policy) {
        document.getElementById("policyError").innerHTML = "You must agree to policy";
        isValid = false;
    }

    // If all fields valid
    if (isValid) {
        alert("Form Submitted Successfully!");
        document.getElementById("signupForm").submit();
    }

});