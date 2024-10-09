function first_last(name, error) {
    const input = document.getElementById(name);
    const msg = document.getElementById(error);
    const value = input.value;
    const pattern = /^[a-zA-Z]+$/;

    if (pattern.test(value)) {
        msg.textContent = "Valid name!";
        msg.style.color = "green";
        msg.style.fontSize = '16px';
        validationResults[0] = true;
    } else {
        msg.textContent = "Invalid name!";
        msg.style.color = "red";
        msg.style.fontSize = '14px';
        validationResults[0] = false;
    }
}

function email(emailId, messageId) {
    const input = document.getElementById(emailId);
    const msg = document.getElementById(messageId);
    const value = input.value;
    const pattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-zA-Z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/;

    if (pattern.test(value)) {
        msg.textContent = "Valid email!";
        msg.style.color = "blue";
        msg.style.fontSize = '12px';
        validationResults[1] = true;
    } else {
        msg.textContent = "Invalid email!";
        msg.style.color = "red"; // Changed to red for invalid email
        msg.style.fontSize = '12px';
        validationResults[1] = false;
    }
}

// Password validation
function passw(name, error) {
    const passwordInput = document.getElementById(name);
    const errorMessage = document.getElementById(error);
    const password = passwordInput.value;

    // Updated regex for password strength
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*]).{8,}$/;

    if (passwordRegex.test(password)) {
        errorMessage.textContent = 'Strong password!';
        errorMessage.style.color = 'green';
        errorMessage.style.fontSize = '14px';
    } else {
        errorMessage.textContent = 'Password must contain: lowercase, uppercase, digit, and special character.';
        errorMessage.style.color = 'red';
        errorMessage.style.fontSize = '14px';
    }

    // Ensure P_check function exists if you're calling it
    if (typeof P_check === 'function') {
        P_check();
    }
}

// Confirmed password validation
function C_PASSWORD_() {
    const password = document.getElementById('pass').value;
    const confirmPassword = document.getElementById('cpass').value;
    const errorElement = document.getElementById('passError');

    if (password.length > 0 && confirmPassword.length > 0) {
        if (password !== confirmPassword) {
            errorElement.textContent = 'Passwords do not match!';
            errorElement.style.color = 'red';
            errorElement.style.fontSize = '14px';
        } else {
            errorElement.textContent = 'Passwords match!';
            errorElement.style.color = 'green';
            errorElement.style.fontSize = '14px';
        }
    } else {
        errorElement.textContent = 'Please enter both passwords!';
        errorElement.style.color = 'red';
        errorElement.style.fontSize = '14px';
    }
}

// DOB validation
function dob_() {
    const dob = document.getElementById('ddob').value;
    const dobError = document.getElementById('edob');
    const dobSuccess = document.getElementById('dobSuccess');

    // Check if date is selected
    if (dob === '') {
        dobError.textContent = 'Please select a date!';
        dobError.style.display = 'block';
        dobSuccess.style.display = 'none';
    } else {
        // Check if date is in the past (not future)
        const date = new Date(dob);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Clear time for accurate comparison
        if (date < today) {
            dobError.style.display = 'none';
            dobSuccess.textContent = 'Valid date!';
            dobSuccess.style.display = 'block';
        } else {
            dobSuccess.style.display = 'none';
            dobError.textContent = 'Date cannot be in the future!';
            dobError.style.color = 'red';
            dobError.style.display = 'block';
        }
    }
}

// Qualification validation
function validateQualifications() {
    const qualifications = document.getElementById('qualifications').value;

    if (qualifications === 'Select your Qualifications..') {
        document.getElementById('qualificationsError').textContent = 'Error! Please select a qualification.';
        document.getElementById('qualificationsError').style.display = 'block';
        return false;
    } else {
        document.getElementById('qualificationsError').style.display = 'none';
    
        return true;
    }
}



// Address validation
function ADDRESS_() {
    const address = document.getElementById('addressd').value;
    const addressError = document.getElementById('eaddress');
    const addressSuccess = document.getElementById('addresssuccess');
    const addressRegex = /^[a-zA-Z0-9\s,/ '".-]+$/;

    if (addressRegex.test(address)) {
        addressError.style.display = 'none';
        addressSuccess.textContent = 'Valid address!';
        addressSuccess.style.display = 'block';
        addressSuccess.style.fontSize = '14px';
    } else {
        addressSuccess.style.display = 'none';
        addressError.textContent = 'Invalid address. Only letters, numbers, and special characters (",.-\') allowed.';
        addressError.style.color = 'red';
        addressError.style.display = 'block';
        addressError.style.fontSize = '14px';
    }
}
// Mobile Number Validation
function Phonenumber_(name, error) {
    let a = document.getElementById(name);
    let Msg = document.getElementById(error);
    let p = /^[6789][0-9]\d{8}$/;
    let c = a.value;         
    let result = p.test(c);

    if (result) {
        Msg.textContent = 'Success';
        Msg.style.color = 'green';
    } else {
        Msg.textContent = 'Enter the correct format! (10 digits, starts with 6, 7, 8, or 9)';
        Msg.style.color = 'red';
    }
}




  