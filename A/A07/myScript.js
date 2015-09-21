// Part One
function getClasses(elem) {
    return document.getElementById(elem).className.split(' ');
}

// Part Two
function addClass(elem, className) {
    document.getElementById(elem).classList.add(className);
    return "Class added";
}

// Part Three
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var nmsg = "";
    var email = document.forms["myForm"]["email"].value;
    var emsg = "";
    var pass = document.forms["myForm"]["password"].value;
    var pmsg = "";
    var cpass = document.forms["myForm"]["confirm"].value;
    var cpmsg = "";
    var psamemsg = "";
    var error = false;

    // Assistance in box highlighting from Tomazi at
    // http://stackoverflow.com/questions/21127083/js-validation-highlight-input-field-red-green

    // Validates user name
    if (name == null || name == "") {
        nmsg = "Name must be filled out.\n";
        document.forms["myForm"]["name"].style.borderColor = "red";
        error = true;
    }
    // Validates email
    if (email == null || email == "") {
        emsg = "Email must be filled out.\n";
        document.forms["myForm"]["email"].style.borderColor = "red";
        error = true;
    }
    // Validates password
    if (pass == null || pass == "") {
        pmsg = "Password must be filled out.\n";
        document.forms["myForm"]["email"].style.borderColor = "red";
        error = true;
    }
    // Validates confirmation password
    if (pass == null || pass == "") {
        cpmsg = "Confirm password must be filled out.\n";
        document.forms["myForm"]["email"].style.borderColor = "red";
        error = true;
    }
    // Validates passwords are the same
    if (pass != cpass) {
        psamemsg = "\"Password\" and \"Confirm Password\" must be the same.\n";
        document.forms["myForm"]["confirm"].style.borderColor = "red";
        error = true;
    }
    if (error) {
        alert(nmsg + emsg + pmsg + cpmsg + psamemsg);
    }
}
