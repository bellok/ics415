// Part One
/*
* getClasses(elem)
* Returns the classes of the element 'elem' in an array
*
* elem = the ID of the element
*/
function getClasses(elem) {
    return document.getElementById(elem).className.split(' ');
}

// Part Two
/*
 * addClass(elem, className)
 * Adds a value to the class attribute of the element 'elem'
 *
 * elem = the ID of the element
 * className = the name of the class being added
 */
function addClass(elem, className) {
    document.getElementById(elem).classList.add(className);
    return "Class added";
}

// Part Three
/*
 * validateForm()
 * Validates that all text fields have entries and that Password and
 * Confirm Password entries are the same
 */
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
        document.forms["myForm"]["name"].style.borderColor = "#FF0000";
        error = true;
    }
    else {
        document.forms["myForm"]["name"].style.borderColor = "#DBDBDB";
    }
    // Validates email
    if (email == null || email == "") {
        emsg = "Email must be filled out.\n";
        document.forms["myForm"]["email"].style.borderColor = "#FF0000";
        error = true;
    }
    else {
        document.forms["myForm"]["email"].style.borderColor = "#DBDBDB";
    }
    // Validates password
    if (pass == null || pass == "") {
        pmsg = "Password must be filled out.\n";
        document.forms["myForm"]["password"].style.borderColor = "#FF0000";
        error = true;
    }
    else {
        document.forms["myForm"]["password"].style.borderColor = "#DBDBDB";
    }
    // Validates confirmation password
    if (cpass == null || cpass == "") {
        cpmsg = "Confirm password must be filled out.\n";
        document.forms["myForm"]["confirm"].style.borderColor = "#FF0000";
        error = true;
    }
    else {
        document.forms["myForm"]["confirm"].style.borderColor = "#DBDBDB";
    }
    // Validates passwords are the same
    if (pass != cpass) {
        psamemsg = "\"Password\" and \"Confirm Password\" must be the same.\n";
        document.forms["myForm"]["password"].style.borderColor = "#FF0000";
        document.forms["myForm"]["confirm"].style.borderColor = "#FF0000";
        error = true;
    }
    else {
        if (pass == "" || cpass == "") {
            // do nothing
        }
        else {
            document.forms["myForm"]["password"].style.borderColor = "#DBDBDB";
            document.forms["myForm"]["confirm"].style.borderColor = "#DBDBDB";
        }
    }

    if (error) {
        alert(nmsg + emsg + pmsg + cpmsg + psamemsg);
        event.preventDefault();
    }
}
