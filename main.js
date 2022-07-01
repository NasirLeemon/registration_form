// Project
// name ( must be more than 5 characters, must not contain any number,special character)         /[a-zA-Z]{5,}/
// username (must be 5 character) /[a-zA-Z0-9]{5}/
// email ( must be valid)
// phone number (Bd based Phone)
// slug (.,-,_,letter,number)  /[-_0-9a-z]/i
// generate strong password (search online how to generate strong password) - copy
// button -  2 ta 
    //1. generate password
    // 2. copy password
// validate strong password
// website address url()  /((https:|http)://)?(www\.)?[a-z{2,8}.[a-z]{3-6}/

// 

// submit 

// form e novalidate likhe dibo 

// https://webdeveloperbd.net/courses/mastering-javascript-fundamentals-with-projects/?swcfpc=1

// https://webdeveloperbd.net/register-login/



// selecting 

const formElm = document.querySelector('form');
const fullNameInput = document.querySelector('.full-name')
const userNameInput = document.querySelector('.user-name');
const emailInput = document.querySelector('.email') 
const phoneInput = document.querySelector('.phone')
const websiteInput = document.querySelector('.website')
// const password=document.getElementById("password");



formElm.addEventListener('submit',(evt)=> {
    evt.preventDefault();
    // console.log(evt.target);

    const fullNameInputValue = receiveInput();
    const userNameInputValue = receiveUserNameInput();
    const emailInputValue = receiveEmailInput();
    const phoneInputValue = receivePhoneInput();
    const websiteInputValue = receiveWebsiteInput();
    
    // console.log(websiteInputValue);
    // console.log(emailInputValue);
    // console.log(userNameInputValue);


    // validate fullName
    const isError = validateFullNameInput(fullNameInputValue)
    if (!fullNameInputValue || isError === false && fullNameInputValue.length < 5) {
        alert('Full Name should be contain more than 5 Characters')
    } else {
        fullNameInput.value = '';
    }
    
 

    // validate UserName
    const userNameError = validateUserNameInput(userNameInputValue)
    if ( userNameError === true || userNameInputValue.length > 5) {
        console.log(userNameError);
        alert('username must be contain only 5 character')  
    } else {
         userNameInput.value = '';
    }
   
      

    // validate Email
    const emailError = validateEmailInput(emailInputValue)
    if (!emailError && emailError === false) {
        alert('Please Provide Valid Email')
    } else {
        emailInput.value = ''
    }
    


    // validate phone
    const phoneError = validatePhoneInput(phoneInputValue)

    // console.log(phoneError);
    if (!phoneInputValue ||phoneError === false || phoneInputValue.length > 14 || phoneInputValue.length < 11  ) {
        alert('Please Provide Valid Phone Number')
    }  else {
        phoneInput.value = ''
    }
    

    // validate Website url
    const websiteError = validateWebsite(websiteInputValue)
    // console.log(websiteError);
    if (websiteError === false || !websiteInputValue) {
        alert('Please Provide valid Website url')
    }  else {
        websiteInput.value = '';
            }

})

// receive Websiteinput Value
function receiveWebsiteInput(){
    const websiteInputValue = websiteInput.value;
    return websiteInputValue;
}

// validate website Input
function validateWebsite(value) {
    const regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
    return websiteInputValue = regex.test(value)
}

//validate phone regex
function validatePhoneInput(value) {
    const regex = /^(?:\+88|88)?(01[3-9]\d{8})$/
    return phoneInputValue = regex.test(value)
}

//Receive input from phone
function receivePhoneInput() {
    const phoneInputValue = phoneInput.value
    return phoneInputValue;
}

// receive Input from email
function receiveEmailInput() {
    const emailInputValue = emailInput.value
    return emailInputValue;
}

// Validate email value
function validateEmailInput(value) {
    const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
    return validateEmail = regex.test(value);
  
}

//Receive input from full Name
function receiveInput() {
    const fullNameInputValue = fullNameInput.value;
    return fullNameInputValue;
}

// validate Full Name Input
function validateFullNameInput(value){
    const regex = /[a-zA-Z0-9]{5,}/;
    return validateFullName = regex.test(value);
    // console.log(validateFullName);
}


// receive input from userName
function receiveUserNameInput() {
    const userNameInputValue = userNameInput.value;
    return userNameInputValue;
}

// validate user Name Input
function validateUserNameInput(value){
    const userRegex = /[a-zA-Z0-9]{6}/;
    validateUserName = userRegex.test(value);
 return validateUserName ;
    
    
}



var password=document.getElementById("password");

 function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
 }

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}