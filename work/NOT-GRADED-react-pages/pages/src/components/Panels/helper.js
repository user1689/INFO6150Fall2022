"use strict";

function callback() {
  let panel = document.querySelector('.panel');
  if (panel !== null || panel !== undefined) {
    let attribute = getComputedStyle(panel, null)['display'];

    const element = document.getElementById('panel__block');

    if (attribute === 'block') {
      const targetDiv = document.querySelector('.panel');
      targetDiv.appendChild(element);
    } else if (attribute === 'flex') {
      const targetDiv = document.querySelector('.panel');
      const latterDiv = document.querySelector('.panel__wrapper');
      targetDiv.insertBefore(element, latterDiv);
    }
  }

}

export default function changeStyle() {
  callback();
  window.addEventListener('resize', callback);
}
 


