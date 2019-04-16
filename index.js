// Import stylesheets
import './style.css';

function celciusToFahrenheit(celcius) {
    return (celcius * 9/5) + 32;
}

const drill_1 = document.getElementById('drill_1');
drill_1.innerHTML = `
   <h2>Celcius Converter</h2>
   <div class="result">-40C = -40F: ${celciusToFahrenheit(-40) === -40 ? 'Passed' : 'Failed'}</div>
   <div class="result">0C = 32F: ${celciusToFahrenheit(0) === 32 ? 'Passed' : 'Failed'}</div>
   <div class="result">21C = 69.8F: ${celciusToFahrenheit(21) === 69.8 ? 'Passed' : 'Failed'}</div> 
   <div class="result">100C = 212F: ${celciusToFahrenheit(100) === 212 ? 'Passed' : 'Failed'}</div>   
`;

function circleArea(r) {
  return Math.PI * Math.pow(r, 2);
}

const drill_2 = document.getElementById('drill_2');
drill_2.innerHTML = `
   <h2>Area of Circle</h2>
   <div class="result">r=0 => 0: ${circleArea(0) === 0 ? 'Passed' : 'Failed'}</div>
   <div class="result">r=1 => PI: ${circleArea(1) === Math.PI ? 'Passed' : 'Failed'}</div>
   <div class="result">r=10 => 314: ${Math.round(circleArea(10)) === 314 ? 'Passed' : 'Failed'}</div> 
`;


function integerDivision(a, b) {
  let quotient = Math.trunc(a / b);
  let remainder = a % b;
  return `${a} / ${b} is ${quotient} with remainder ${remainder}`;
}

const drill_3 = document.getElementById('drill_3');
drill_3.innerHTML = `
   <h2>Integer Division</h2>
   <div class="result">4 / 2 => 2 r 0: ${integerDivision(4, 2) === '4 / 2 is 2 with remainder 0' ? 'Passed' : 'Failed'}</div>
   <div class="result">5 / 2 => 2 r 1: ${integerDivision(5, 2) === '5 / 2 is 2 with remainder 1' ? 'Passed' : 'Failed'}</div>
   <div class="result">27 / 9 => 3 r 0: ${integerDivision(27, 9) === '27 / 9 is 3 with remainder 0' ? 'Passed' : 'Failed'}</div> 
   <div class="result">31 / 9 => 3 r 4: ${integerDivision(31, 9) === '31 / 9 is 3 with remainder 4' ? 'Passed' : 'Failed'}</div>   
`;

function integerDivision2(a, b) {
  if(b == 0) {
    return 'Sorry, cannot divide by zero';
  } else {
    return integerDivision(a, b);
  }
}

const drill_4 = document.getElementById('drill_4');
drill_4.innerHTML = `
   <h2>Integer Division with Validation</h2>
   <div class="result">4 / 2 => 2 r 0: ${integerDivision2(4, 2) === '4 / 2 is 2 with remainder 0' ? 'Passed' : 'Failed'}</div>
   <div class="result">4 / 0 => ERROR: ${integerDivision2(4, 0) === 'Sorry, cannot divide by zero' ? 'Passed' : 'Failed'}</div>   
`;

function hypotenuse(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

const drill_5 = document.getElementById('drill_5');
drill_5.innerHTML = `
   <h2>Hypotenuse</h2>
   <div class="result">3, 4, 5: ${hypotenuse(3, 4) === 5 ? 'Passed' : 'Failed'}</div>
   <div class="result">5, 12, 13: ${hypotenuse(5, 12) === 13 ? 'Passed' : 'Failed'}</div>
   <div class="result">11, 60, 61: ${hypotenuse(11, 60) === 61 ? 'Passed' : 'Failed'}</div> 
   <div class="result">19, 180, 181: ${hypotenuse(19, 180) === 181 ? 'Passed' : 'Failed'}</div>   
`;

function canFit(a, b, r) {
  const hyp = hypotenuse(a, b);
  return hyp <= r;
}

const drill_6 = document.getElementById('drill_6');
drill_6.innerHTML = `
   <h2>Can Fit</h2>
   <div class="result">3, 4, 5: ${canFit(3, 4, 5) ? 'Passed' : 'Failed'}</div>
   <div class="result">5, 12, 20: ${canFit(5, 12, 20) ? 'Passed' : 'Failed'}</div>
   <div class="result">11, 60, 50: ${canFit(11, 60, 50) ? 'Failed' : 'Passed'}</div> 
   <div class="result">19, 180, 100: ${canFit(19, 180, 100) ? 'Failed' : 'Passed'}</div>   
`;

function isOdd(n) {
  return n % 2 == 1;
}

const drill_7 = document.getElementById('drill_7');
drill_7.innerHTML = `
   <h2>Odd</h2>
   <div class="result">20: ${isOdd(20) ? 'Failed' : 'Passed'}</div>
   <div class="result">21: ${isOdd(21) ? 'Passed' : 'Failed'}</div>
   <div class="result">0: ${isOdd(0) ? 'Failed' : 'Passed'}</div>   
`;

function pinGenerator() {
  const min = 10000;
  const max = 99999;
  const ran = Math.round(Math.random() * (max - min) + min);
  if (isOdd(ran)) {
    ran = ran + 1;
  }
  return ran;
}

const drill_8 = document.getElementById('drill_8');
drill_8.innerHTML = `
   <h2>Pin Generator</h2>
   <div class="result">1: ${pinGenerator() % 2 == 0 ? 'Passed' : 'Failed'}</div>
   <div class="result">2: ${pinGenerator() % 2 == 0 ? 'Passed' : 'Failed'}</div>
   <div class="result">3: ${pinGenerator() % 2 == 0 ? 'Passed' : 'Failed'}</div>   
`;