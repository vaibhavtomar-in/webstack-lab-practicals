let name1 = document.getElementById("name");
let email = document.getElementById("email");
let username = document.getElementById("username");
let password = document.getElementById("password");
let rePassword = document.getElementById("re-password");
let birthday = document.getElementById("birthday");        
let loginButton = document.getElementById("login");      
let signinButton = document.getElementById("signin");       
const nameRegex = /^[a-zA-Z\s'-]+$/;
const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
const usernameRegex = /^[a-zA-Z0-9.-_]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
var birthdayRegex = /^\d{4}-(\d{2}|\d{1})-(\d{2}|\d{1})$/;
// console.log(name.previousElementSibling.innerText);
name1.addEventListener('input', validateName);
email.addEventListener('input', validateEmail);
username.addEventListener('input', validateUsername);
password.addEventListener('input', validatePassword);
rePassword.addEventListener('input', validateRepassword);
birthday.addEventListener('input', validateBirthday);
loginButton.addEventListener('click', checkLabelsBeforeSubmit);
// signinButton.addEventListener('click', checkLabelsBeforeSubmit);
function validateName(){
    if (nameRegex.test(name1.value)){
        name1.parentElement.previousElementSibling.lastElementChild.innerHTML = " valid";
        name1.parentElement.previousElementSibling.lastElementChild.style.color = "green";
        name1.parentElement.previousElementSibling.firstElementChild.style.color = "green";
        name1.nextElementSibling.innerHTML = " <i class=\"fa-solid fa-check\"></i>"
        name1.nextElementSibling.style.color = "green"
        name1.setAttribute("class", "control-input border border-success border-2 rounded-2");
    }
    else{
        name1.parentElement.previousElementSibling.lastElementChild.innerHTML = " invalid name, numbers & special chars. not allowed";
        name1.parentElement.previousElementSibling.lastElementChild.style.color = "red";
        name1.parentElement.previousElementSibling.firstElementChild.style.color = "red";
        name1.nextElementSibling.innerHTML = " <i class=\"fa-solid fa-xmark\"></i>"
        name1.nextElementSibling.style.color = "red"
        name1.setAttribute("class", "control-input border border-warning border-2 rounded-2");
    }
}
function validateEmail(){
    if (emailRegex.test(email.value)){
        email.parentElement.previousElementSibling.lastElementChild.innerHTML = " valid";
        email.parentElement.previousElementSibling.lastElementChild.style.color = "green";
        email.parentElement.previousElementSibling.firstElementChild.style.color = "green";
        email.nextElementSibling.innerHTML = " <i class=\"fa-solid fa-check\"></i>"
        email.nextElementSibling.style.color = "green"
        email.setAttribute("class", "control-input border border-success border-2 rounded-2");
    }
    else{
        email.parentElement.previousElementSibling.lastElementChild.innerHTML = " invalid email format";
        email.parentElement.previousElementSibling.lastElementChild.style.color = "red";
        email.parentElement.previousElementSibling.firstElementChild.style.color = "red";
        email.nextElementSibling.innerHTML = " <i class=\"fa-solid fa-xmark\"></i>"
        email.nextElementSibling.style.color = "red"
        email.setAttribute("class", "control-input border border-warning border-2 rounded-2");
    }
}
function validateUsername(){
    if (usernameRegex.test(username.value)){
        username.parentElement.previousElementSibling.lastElementChild.innerHTML = " valid";
        username.parentElement.previousElementSibling.lastElementChild.style.color = "green";
        username.parentElement.previousElementSibling.firstElementChild.style.color = "green";
        username.nextElementSibling.innerHTML = " <i class=\"fa-solid fa-check\"></i>"
        username.nextElementSibling.style.color = "green"
        username.setAttribute("class", "control-input border border-success border-2 rounded-2");
    }
    else{
        username.parentElement.previousElementSibling.lastElementChild.innerHTML = " username should not have space";
        username.parentElement.previousElementSibling.lastElementChild.style.color = "red";
        username.parentElement.previousElementSibling.firstElementChild.style.color = "red";
        username.nextElementSibling.innerHTML = " <i class=\"fa-solid fa-xmark\"></i>"
        username.nextElementSibling.style.color = "red"
        username.setAttribute("class", "control-input border border-warning border-2 rounded-2");
    }
}
function validatePassword(){
    if (passwordRegex.test(password.value) ){
        password.parentElement.previousElementSibling.lastElementChild.innerHTML = " valid";
        password.parentElement.previousElementSibling.lastElementChild.style.color = "green";
        password.parentElement.previousElementSibling.firstElementChild.style.color = "green";
        password.nextElementSibling.innerHTML = " <i class=\"fa-solid fa-check\"></i>"
        password.nextElementSibling.style.color = "green"
        password.setAttribute("class", "control-input border border-success border-2 rounded-2");
    }
    else{
        password.parentElement.previousElementSibling.lastElementChild.innerHTML = " use atleast 1 capital letter and number";
        password.parentElement.previousElementSibling.lastElementChild.style.color = "red";
        password.parentElement.previousElementSibling.firstElementChild.style.color = "red";
        password.nextElementSibling.innerHTML = " <i class=\"fa-solid fa-xmark\"></i>"
        password.nextElementSibling.style.color = "red"
        password.setAttribute("class", "control-input border border-warning border-2 rounded-2");
    }
}
function validateRepassword(){
    if (rePassword.value.match(password.value)){
        rePassword.parentElement.previousElementSibling.lastElementChild.innerHTML = " valid";
        rePassword.parentElement.previousElementSibling.lastElementChild.style.color = "green";
        rePassword.parentElement.previousElementSibling.firstElementChild.style.color = "green";
        rePassword.nextElementSibling.innerHTML = " <i class=\"fa-solid fa-check\"></i>"
        rePassword.nextElementSibling.style.color = "green"
        rePassword.setAttribute("class", "control-input border border-success border-2 rounded-2");
    }
    else{
        rePassword.parentElement.previousElementSibling.lastElementChild.innerHTML = " password doesn't match";
        rePassword.parentElement.previousElementSibling.lastElementChild.style.color = "red";
        rePassword.parentElement.previousElementSibling.firstElementChild.style.color = "red";
        rePassword.nextElementSibling.innerHTML = " <i class=\"fa-solid fa-xmark\"></i>"
        rePassword.nextElementSibling.style.color = "red"
        rePassword.setAttribute("class", "control-input border border-warning border-2 rounded-2");
    }
}
function checkLabelsBeforeSubmit(event) {
    // Select all the labels with the class 'col-form-label'
    let labels = document.getElementsByTagName("label");

    // Iterate through each label
    for (i=0;i<labels.length;i++) {
        // Check if the label or its associated icon span is not green
        if (labels[i].style.color !== "green") {
            event.preventDefault();
            alert("Please enter valid values in the form correctly to proceed.");
            return;
        }
    }
}



function validateBirthday() {
    // var birthday = document.getElementById("birthday").value; // Assuming the input element has an id="birthday"
    // var birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;

    // Validate format using regex
    if (!birthdayRegex.test(birthday.value)) {
        birthday.parentElement.previousElementSibling.lastElementChild.innerHTML = " invalid date format";
        birthday.parentElement.previousElementSibling.lastElementChild.style.color = "red";
        birthday.parentElement.previousElementSibling.firstElementChild.style.color = "red";
        birthday.nextElementSibling.innerHTML = " <i class=\"fa-solid fa-xmark\"></i>"
        birthday.nextElementSibling.style.color = "red"
        birthday.setAttribute("class", "control-input border border-warning border-2 rounded-2");
    } else {
        var date = birthday.value.split("-");
        var year = parseInt(date[0]);
        var month = parseInt(date[1]) - 1; // JavaScript months are 0-indexed
        var day = parseInt(date[2]);
        
        var birthDate = new Date(year, month, day);

        // Check if the constructed date is valid
        if (birthDate.getFullYear() !== year || birthDate.getMonth() !== month || birthDate.getDate() !== day) {
            birthday.parentElement.previousElementSibling.lastElementChild.innerHTML = " invalid date";
            birthday.parentElement.previousElementSibling.lastElementChild.style.color = "red";
            birthday.parentElement.previousElementSibling.firstElementChild.style.color = "red";
            birthday.nextElementSibling.innerHTML = " <i class=\"fa-solid fa-xmark\"></i>"
            birthday.nextElementSibling.style.color = "red"
            birthday.setAttribute("class", "control-input border border-warning border-2 rounded-2");
            console.log(birthDate.getFullYear());
            console.log(birthDate.getMonth());
            console.log(birthDate.getDate());
        } 
        // Check if age is more than 18 years
        else {
            var today = new Date();
            var age = today.getFullYear() - birthDate.getFullYear();
            var monthDiff = today.getMonth() - birthDate.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            if (age < 18) {
                birthday.parentElement.previousElementSibling.lastElementChild.innerHTML = " age below 18";
                birthday.parentElement.previousElementSibling.lastElementChild.style.color = "red";
                birthday.parentElement.previousElementSibling.firstElementChild.style.color = "red";
                birthday.nextElementSibling.innerHTML = " <i class=\"fa-solid fa-xmark\"></i>"
                birthday.nextElementSibling.style.color = "red"
                birthday.setAttribute("class", "control-input border border-warning border-2 rounded-2");
                // loginButton.style.background = "grey";
                loginButton.setAttribute('disabled', true);
                loginButton.style.background="grey";
                loginButton.children[0].removeAttribute("href")
                signinButton.setAttribute('disabled', true);
                signinButton.style.background="grey";
                signinButton.children[0].removeAttribute("href")
            } else {
                // If valid, clear any previous error messages
                birthday.parentElement.previousElementSibling.lastElementChild.innerHTML = " valid";
                birthday.parentElement.previousElementSibling.lastElementChild.style.color = "green";
                birthday.parentElement.previousElementSibling.firstElementChild.style.color = "green";
                birthday.nextElementSibling.innerHTML = " <i class=\"fa-solid fa-check\"></i>"
                birthday.nextElementSibling.style.color = "green"
                birthday.setAttribute("class", "control-input border border-success border-2 rounded-2");
                loginButton.setAttribute('disabled', false);
                loginButton.style.background="#fc4c4c";
                loginButton.children[0].setAttribute("href", "home.html")
                signinButton.setAttribute('disabled', false);
                signinButton.style.background="#fc4c4c";
                signinButton.children[0].setAttribute("href", "home.html")
            }
        }
    }
}

