"use strict";
(
  function () {
    let isValidName = false;
    let isValidEmail = false;
    let isValidConfirmEmail = false;

    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirm_email');
    const name = document.getElementById('name');
    const error = document.getElementById('error');

    let emailInserted = false;
    let confirmEmailInserted = false;
    email.addEventListener('blur', (event) => {

      emailInserted = true;
      if (event.target.value === null || event.target.value.trim() === "") {
        error.innerHTML = "Email can not be empty!";
        email.style.background = "pink";
        isValidEmail = false;
      } else {
        if (confirmEmailInserted) {
          const confirmEmail = document.getElementById('confirm_email');
          if (confirmEmail.value !== event.target.value) {
            error.innerHTML = "Confirm Email does not equal to Email";
            email.style.background = "";
            confirmEmail.style.background = "pink";
            isValidConfirmEmail = false;
          } else {
            error.innerHTML = "";
            confirmEmail.style.background = "";
            email.style.background = "";
            isValidEmail = true;
            isValidConfirmEmail = true;
          }
        } else {
          error.innerHTML = "";
          email.style.background = "";
          isValidEmail = true;
        }
      }
    });

    confirmEmail.addEventListener('blur', (event) => {

      confirmEmailInserted = true;
      if (event.target.value === null || event.target.value.trim() === "") {
        confirmEmail.style.background = "pink";
        error.innerHTML = "Confirm Email can not be empty!";
        isValidConfirmEmail = false;
      } else {
        if (emailInserted) {
          const email = document.getElementById('email');
          if (email.value !== event.target.value) {
            error.innerHTML = "Confirm Email does not equal to Email";
            confirmEmail.style.background = "pink";
            isValidConfirmEmail = false;
          } else {
            error.innerHTML = "";
            confirmEmail.style.background = "";
            email.style.background = "";
            isValidEmail = true;
            isValidConfirmEmail = true;
          }
        } else {
          error.innerHTML = "";
          confirmEmail.style.background = "";
          isValidConfirmEmail = true;
        }
      }
    });

    const errorName = document.getElementById('error_name');
    errorName.classList.add('error_name_unshow');
    name.addEventListener('blur', (event) => {

      if (event.target.value === null || event.target.value.trim() === "") {
        name.classList.add('error_backgroud');
        errorName.classList.remove('error_name_unshow');
        errorName.classList.add('error_name_show');
        isValidName = false;
      } else {
        errorName.classList.remove('error_name_show');
        errorName.classList.add('error_name_unshow');
        name.classList.remove('error_backgroud');
        isValidName = true;
      }
    });


    const form = document.getElementById("form");
    form.addEventListener('submit', (event) => {
      if (!(isValidName && isValidEmail && isValidConfirmEmail)) {
        event.preventDefault();

      }
    });

  }

)();