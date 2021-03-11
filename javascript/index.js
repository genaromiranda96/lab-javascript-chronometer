const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
  // ... your code goes here
}

function printMinutes() {
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = min[0]
  minUni.innerHTML = min[1]
  // ... your code goes here
}

function printSeconds() {
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = sec[0]
  secUni.innerHTML = sec[1]
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  let miliSegundos = chronometer.twoDigitsNumber(chronometer.miliseconds)
  console.log(miliSegundos)
  milDec.innerHTML = miliSegundos[0]
  minDec.innerHTML = miliSegundos[1]
  // ... your code goes here
}

function printSplit() {
  splits.innerHTML += `<li>${chronometer.splitClick()}</li>`
  // ... your code goes here
}

function clearSplits() {
    splits.innerHTML = ''
    minDec.innerHTML = 0
    minUni.innerHTML = 0
    secDec.innerHTML = 0
    secUni.innerHTML = 0
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP'
  btnLeft.style.backgroundColor = 'red'
  // ... your code goes here
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT'
  btnRight.style.backgroundColor = 'blue'
  // ... your code goes here
}

function setStartBtn() {
  btnLeft.innerHTML = 'START'
  btnLeft.style.backgroundColor = 'green'
  // ... your code goes here
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET'
  btnRight.style.backgroundColor = 'gray'
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.innerHTML === 'START') {
    chronometer.startClick(printTime, printMilliseconds);
    setStopBtn()
    setSplitBtn()
  } else if (btnLeft.innerHTML === 'STOP') {
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
  }
  // ... your code goes here
});
console.log(btnLeft.innerHTML)
// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerHTML === 'RESET') {
    chronometer.resetClick()
    clearSplits()
  } else {
    printSplit()
  }
  // ... your code goes here
});

