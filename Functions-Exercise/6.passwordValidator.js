function password(pass) {
    let isalid = false;
    let digits = 0;

    if(pass.length < 6 || pass.length > 10) {
        console.log("Password must be between 6 and 10 characters")
    } else {
        isValid = true;
    }

    for(let i = 0; i < pass.length; i++) {
        if(pass[i].charCodeAt(0) >= 48 && pass[i].charCodeAt(0) <= 57) {
            digits++;
        } else if ((pass[i].charCodeAt(0) >= 65 && pass[i].charCodeAt(0) <= 90) || (pass[i].charCodeAt(0) >= 97 && pass[i].charCodeAt(0) <= 122)) {
            isValid = true;
       } else {
           isValid = false;
           console.log("Password must consist only of letters and digits")
           break;
       }
    }

    if(digits < 2) {
        isValid = false;
        console.log("Password must have at least 2 digits")
    } 

    if(isValid) {
        console.log("Password is valid")
    }
}
password('Pa$s$s')