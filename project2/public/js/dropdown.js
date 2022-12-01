"use strict";
(function () {
  const buttons = document.querySelectorAll(".dropdown__button");
  buttons.forEach((button) => {
    const dropdown = button.nextElementSibling;
    button.addEventListener('click', () => {
      dropdown.classList.toggle("open");
    }
    );
  });
})();