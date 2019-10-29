const chronometer = new Chronometer();
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const minDec = document.getElementById('min-dec');
const minUni = document.getElementById('min-uni');
const secDec = document.getElementById('sec-dec');
const secUni = document.getElementById('sec-uni');
const milDec = document.getElementById('mil-dec');
const milUni = document.getElementById('mil-uni');

/*
function printTime(chronometer) {
  const minutes = chronometer.getMinutes();
  const seconds = chronometer.getSeconds();
  printMinutes(minutes);
  printSeconds(seconds);
}

function printMinutes(minutes) {
  const digits = chronometer.twoDigitsNumber(minutes).split("");
  minDec.innerText = digits[0];
  minUni.innerText = digits[1];
}

function printSeconds(seconds) {
  const digits = chronometer.twoDigitsNumber(seconds).split("");
  secDec.innerText = digits[0];
  secUni.innerText = digits[1];
}
*/

function printTime(chronometer) {
  const minutes = chronometer.getMinutes();
  const seconds = chronometer.getSeconds();
  printMinutes(minutes);
  printSeconds(seconds);
}

function printMinutes(minutes) {
  const value = chronometer.twoDigitsNumber(minutes).split('');
  minDec.innerText = value[1];
  minUni.innerText = value[0];
}

function printSeconds(seconds) {
  const value = chronometer.twoDigitsNumber(seconds).split('');
  secUni.innerText = value[1];
  secDec.innerText = value[0];
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button

// the click only works from Start to stop, but not back:
/*
btnLeft.addEventListener("click", () => {
  if (this.IntervalId == 0) {
    btnLeft.innerText = "START";
    btnLeft.className = "btn start";
    btnRight.innerText = "RESET";
    btnRight.className = "btn reset";
    chronometer.stopClick();
  } else {
    btnLeft.innerText = "STOP";
    btnLeft.className = "btn stop";
    btnRight.innerText = "SPLIT";
    btnRight.className = "btn split";
    chronometer.startClick();
  }
});
*/

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  const isRunning = typeof chronometer.intervalId !== 'undefined';
  if (isRunning) {
    btnLeft.innerText = 'START';
    btnLeft.className = 'btn start';
    btnRight.innerText = 'RESET';
    btnRight.className = 'btn reset';
    chronometer.stopClick();
  } else {
    btnLeft.innerText = 'STOP';
    btnLeft.className = 'btn stop';
    btnRight.innerText = 'SPLIT';
    btnRight.className = 'btn split';
    chronometer.startClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ..
});