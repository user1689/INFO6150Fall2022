"use strict";
(
  function () {
    let isValidEmail = false;
    let isValidConfirmEmail = false;

    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirm_email');
    const errorEmail = document.getElementById('error_email');
    const errorConfirmEmail = document.getElementById('error_confirmemail');

    let emailInserted = false;
    let confirmEmailInserted = false;
    var pattern = new RegExp("@");
    

    email.addEventListener('blur', (event) => {

      emailInserted = true;
      if (event.target.value === null || event.target.value.trim() === "") {
        errorEmail.innerHTML = "This field is required";
        email.style.borderColor = "red";
        isValidEmail = false;
      } else {
    
        var res = pattern.test(event.target.value);
        errorEmail.innerHTML = "&nbsp;";
        email.style.borderColor = "";
        isValidEmail = true;
        if (!res) {
          errorEmail.innerHTML = "This field be a valid email address including a @";
          email.style.borderColor = "red";
          isValidEmail = false;
        } else if (confirmEmailInserted) {
          const confirmEmail = document.getElementById('confirm_email');
          if (confirmEmail.value == null || confirmEmail.value.trim() === "") {
            confirmEmail.style.borderColor = "red";
            errorConfirmEmail.innerHTML = "This field is required";
            isValidConfirmEmail = false;
          } else if (confirmEmail.value !== event.target.value) {
            errorConfirmEmail.innerHTML = "This field must match the provided email address";
            email.style.borderColor = "";
            confirmEmail.style.borderColor = "red";
            isValidConfirmEmail = false;
          } else {
            errorConfirmEmail.innerHTML = "&nbsp;";
            confirmEmail.style.borderColor = "";
            email.style.borderColor = "";
            isValidEmail = true;
            isValidConfirmEmail = true;
          }
        } 
      }
    });

    confirmEmail.addEventListener('blur', (event) => {

      confirmEmailInserted = true;
      if (event.target.value === null || event.target.value.trim() === "") {
        confirmEmail.style.borderColor = "red";
        errorConfirmEmail.innerHTML = "This field is required";
        isValidConfirmEmail = false;
      } else {
        // @
        errorConfirmEmail.innerHTML = "&nbsp;";
        var res = pattern.test(event.target.value);
        if (!res) {
          errorConfirmEmail.innerHTML = "This field be a valid email address including a @";
          confirmEmail.style.borderColor = "red";
          isValidConfirmEmail = false;
        } else if (emailInserted) {
          const email = document.getElementById('email');
          if (email.value !== event.target.value) {
            errorConfirmEmail.innerHTML = "This field must match the provided email address";
            confirmEmail.style.borderColor = "red";
            isValidConfirmEmail = false;
          } else {
            errorConfirmEmail.innerHTML = "&nbsp;";
            confirmEmail.style.borderColor = "";
            email.style.borderColor = "";
            isValidEmail = true;
            isValidConfirmEmail = true;
          }
        } else {
          confirmEmail.style.borderColor = "";
          isValidConfirmEmail = true;
        }
      }
    });

    const form = document.getElementById("form");
    form.addEventListener('submit', (event) => {
      console.log(isValidEmail);
      console.log(isValidConfirmEmail);
      if (!(isValidEmail && isValidConfirmEmail)) {
        const emailValue = email.value;
        const confirmEmailValue = confirmEmail.value;
        
        if (emailValue === null || emailValue.trim() === "" || isValidEmail) {
          if (emailValue === null || emailValue.trim() === "") {
            errorEmail.innerHTML = "This field is required";
            email.style.borderColor = "red";
          } else {
            var res = pattern.test(emailValue);
            if (!res) {
              errorEmail.innerHTML = "This field be a valid email address including a @";
              email.style.borderColor = "red";
            } else {
              if (emailValue !== confirmEmailValue) {
                email.style.borderColor = "";
              }
            }
          }
        }
        
        if (confirmEmailValue === null || confirmEmailValue.trim() === "" || isValidConfirmEmail) {
          
          if (confirmEmailValue === null || confirmEmailValue.trim() === "") {
            errorConfirmEmail.innerHTML = "This field is required";
            confirmEmail.style.borderColor = "red";
          } else {
            var res = pattern.test(confirmEmailValue);
            if (!res) {
              errorConfirmEmail.innerHTML = "This field be a valid email address including a @";
            } else {
              if (emailValue !== confirmEmailValue) {
                if (pattern.test(emailValue)) {
                  email.style.borderColor = "";
                } else {
                  email.style.borderColor = "red";
                }
                errorConfirmEmail.innerHTML = "This field must match the provided email address";
              }
            }
            confirmEmail.style.borderColor = "red";
          }
        }
        
        event.preventDefault();
      }
    });

  }

)();