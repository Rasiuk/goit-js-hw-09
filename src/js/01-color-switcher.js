const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
let timerId = null;

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

function onStartClick(evt) {
  timerId = setInterval(changeColor, 1000);
  refs.startBtn.disabled = true;
}
function onStopClick(evt) {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
}

function changeColor() {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = `${color}`;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
