import Notiflix from 'notiflix';

const fisrtDelay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const submit = document.querySelector('button[type="submit"]');
const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  let delay = Number(fisrtDelay.value);
  const stepDelay = Number(step.value);
  const amountEntered = Number(amount.value);

  for (let i = 0; i <= amountEntered; i += 1) {
    createPromise(i, delay)
      .then(object => {
        Notiflix.Notify.success(`${i} in ${object.delay}ms`);
      })
      .catch(object => {
        Notiflix.Notify.failure(`Rejected promise ${i} in ${object.delay}ms`);
      });
    delay += stepDelay;
  }
  event.currentTarget.reset();
});
