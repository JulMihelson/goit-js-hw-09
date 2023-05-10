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
  if (amountEntered <= 0) {
    Notiflix.Notify.failure(`Please enter number more then 0`);
  } else {
    for (let i = 0; i < amountEntered; i += 1) {
      createPromise(i, delay)
        .then(object => {
          Notiflix.Notify.success(
            `Fullfiled promise ${i + 1} in ${object.delay}ms`
          );
        })
        .catch(object => {
          Notiflix.Notify.failure(
            `Rejected promise ${i + 1} in ${object.delay}ms`
          );
        });
      delay += stepDelay;

      event.currentTarget.reset();
    }
  }
});
