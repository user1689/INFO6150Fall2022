"use strict";
(function () {
  const buttons = document.querySelectorAll(".dropdown__button");
  buttons.forEach((button, id) => {
    // const dropdown = button.nextElementSibling;
    const dropdown = document.querySelector(".dropdown__content__" + id);
    button.addEventListener('click', () => {
      dropdown.classList.toggle("open");
    }
    );
  });
})();