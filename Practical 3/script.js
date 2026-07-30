// ==============================
// Regular Expressions
// ==============================

// PRN: Any 10-15 numeric digits
const prnRegex = /^\d{10,15}$/;

// Password: Exactly 8 characters (letters and numbers only)
const passRegex = /^[A-Za-z0-9]{8}$/;


// ==============================
// Login Authentication
// ==============================
function handleLogin() {

    let prnInput = document.getElementById("prn").value.trim();
    let passInput = document.getElementById("password").value.trim();

    // Check if fields are empty
    if (prnInput === "" || passInput === "") {
        alert("Please fill in all login fields!");
        return;
    }

    // Validate PRN
    if (!prnRegex.test(prnInput)) {
        alert("PRN must contain only 10 to 15 digits.");
        return;
    }

    // Validate Password
    if (!passRegex.test(passInput)) {
        alert("Password must be exactly 8 characters long and contain only letters and numbers.");
        return;
    }

    // Login Successful
    alert("Login Successful!");

    document.getElementById("loginCard").style.display = "none";
    document.getElementById("gradingCard").style.display = "block";
}


// ==============================
// Logout Function
// ==============================
function handleLogout() {

    document.getElementById("prn").value = "";
    document.getElementById("password").value = "";
    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";

    document.getElementById("output").style.display = "none";
    document.getElementById("output").innerHTML = "";

    document.getElementById("gradingCard").style.display = "none";
    document.getElementById("loginCard").style.display = "block";
}


// ==============================
// Student Grading System
// ==============================
function gradeSystem() {

    let name = document.getElementById("name").value.trim();
    let marksInput = document.getElementById("marks").value;
    let marks = Number(marksInput);

    // Validation
    if (name === "") {
        alert("Please enter Student Name.");
        return;
    }

    if (marksInput === "") {
        alert("Please enter Marks.");
        return;
    }

    if (marks < 0 || marks > 100) {
        alert("Please enter marks between 0 and 100.");
        return;
    }

    let grade = "";
    let result = "";

    // Grade Calculation
    if (marks >= 90) {
        grade = "A+";
        result = "Excellent";
    }
    else if (marks >= 80) {
        grade = "A";
        result = "Very Good";
    }
    else if (marks >= 70) {
        grade = "B";
        result = "Good";
    }
    else if (marks >= 60) {
        grade = "C";
        result = "Average";
    }
    else if (marks >= 40) {
        grade = "D";
        result = "Pass";
    }
    else {
        grade = "F";
        result = "Fail";
    }

    // Display Result
    let outputDiv = document.getElementById("output");

    outputDiv.style.display = "block";

    outputDiv.innerHTML =
        "<h3>Result</h3>" +
        "<p><b>Student Name:</b> " + name + "</p>" +
        "<p><b>Marks:</b> " + marks + "</p>" +
        "<p><b>Grade:</b> " + grade + "</p>" +
        "<p><b>Result:</b> " + result + "</p>";
}