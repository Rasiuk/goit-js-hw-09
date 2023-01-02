import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  firsDelay: document.querySelector('input[name="delay"'),
  delayStep: document.querySelector('input[name="step"'),
  amount: document.querySelector('input[name="amount"'),
  createPromiseBtn: document.querySelector('button'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        res(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        rej(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
refs.createPromiseBtn.addEventListener('click', onCreatePromiseclick);
function onCreatePromiseclick(evt) {
  evt.preventDefault();
  const firsDelay = refs.firsDelay.value;
  const delay = refs.delayStep.value;
  let position = 1;
  const amount = refs.amount.value;
  setTimeout(() => {
    for (let i = 0; i < amount; i += 1) {
      createPromise(position, delay * i)
        .then(res => onResolve(res))
        .catch(rej => onReject(rej));

      position += 1;
    }
  }, firsDelay);
}
function onResolve(res) {
  Notify.success(res);
}
function onReject(rej) {
  Notify.failure(rej);
}
