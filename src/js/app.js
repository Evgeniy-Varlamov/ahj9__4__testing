import getPaySystem from './getPaySystem';
import luhnAlgorithm from './luhnAlgorithm';

document.addEventListener('DOMContentLoaded', () => {
  const paySystems = Array.from(document.getElementsByClassName('img-card'));
  const input = document.getElementById('input');
  const button = document.getElementById('btn-validate');
  const valid = document.getElementById('valid');

  input.addEventListener('input', (event) => {
    paySystems.forEach((element) => {
      if (element.id === getPaySystem(event.target.value)) {
        /* eslint no-param-reassign: ["error", { "props": false }] */
        element.style.opacity = '1';
      } else {
        /* eslint no-param-reassign: ["error", { "props": false }] */
        element.style.opacity = '0.4';
      }
    });
  });

  button.addEventListener('click', (event) => {
    event.preventDefault();
    if (luhnAlgorithm(input.value)) {
      valid.textContent = 'Number car is valid';
      valid.style.color = 'green';
    } else {
      valid.textContent = 'Number car is not valid';
      valid.style.color = 'red';
    }
  });
});
