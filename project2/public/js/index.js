"use strict";

function callback() {
  var card = document.querySelector('.card');  
  var attribute = getComputedStyle(card, null)['display'];
  const element = document.getElementById('card__block');

  if (attribute === 'block') {
    const targetDiv = document.querySelector('.card');
    targetDiv.appendChild(element);
  } else if (attribute === 'flex'){
    const targetDiv = document.querySelector('.card');
    const latterDiv = document.querySelector('.card__wrapper');
    console.log("backtoweb");
    targetDiv.insertBefore(element, latterDiv);
  }
}

(
  function changeStyle() {
    callback();
    window.addEventListener('resize', callback);
  }
)();
