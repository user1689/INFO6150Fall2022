"use strict";
(function () {

  let modal = document.getElementById("myModal");

  let btns = document.querySelectorAll(".myBtn");

  let cancel_button = document.querySelector(".button__cancel");
 
  btns.forEach((e) => {
    e.addEventListener('click', () => {
      modal.style.display = "block";
      
    });
  });

  cancel_button.addEventListener('click', (event) => {
    modal.style.display = "none";
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.keyCode == '27') {
      modal.style.display = "none";
    }
  });


})();
