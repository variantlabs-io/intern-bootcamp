function Validate() {
    //this code is for validation of name
    function ValidateName() {
        let inputName= document.getElementById("name").value;
        var nameformat = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
        if (inputName.match(nameformat)) {
            return true;
        } else {
            alert("You have entered an invalid name!")
            return false;
        }
    }
    //this code is for validation of Username
    function ValidateUsername() {
        let inputText= document.getElementById("username").value;
        var usernameFormat = /^[a-zA-Z0-9]+$/;
        if (inputText.match(usernameFormat)) {
            return true;
        } else {
            alert("You have entered an invalid username!")
            return false;
        }
    }
    //this code is for validation of email
    function ValidateEmail() {
        let inputEmail=document.getElementById("email").value;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputEmail.match(mailformat)) {
            return true;
        } else {
            alert("You have entered an invalid email address!")
            return false;
        }
    }
    ValidateName();
    ValidateEmail();
    ValidateUsername();
}