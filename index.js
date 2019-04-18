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

function coinChange(n) {
  const quarters = Math.trunc(n / 25);
  n = n % 25;
  const dimes = Math.trunc(n / 10);
  n = n % 10;
  const nickels = Math.trunc(n / 5);
  const cents = n % 5;
  return `${quarters} 25 cent pieces, ${dimes} ten cent pieces, ${nickels} five cent pieces and ${cents} one cent pieces`;
}

const drill_9 = document.getElementById('drill_9');
drill_9.innerHTML = `
   <h2>Coin Change</h2>
   <div class="result">$1.00: ${coinChange(100) == '4 25 cent pieces, 0 ten cent pieces, 0 five cent pieces and 0 one cent pieces' ? 'Passed' : 'Failed'}</div>
   <div class="result">$0.75: ${coinChange(75) == '3 25 cent pieces, 0 ten cent pieces, 0 five cent pieces and 0 one cent pieces' ? 'Passed' : 'Failed'}</div>
   <div class="result">$0.74: ${coinChange(74) == '2 25 cent pieces, 2 ten cent pieces, 0 five cent pieces and 4 one cent pieces' ? 'Passed' : 'Failed'}</div> 
   <div class="result">$0.37: ${coinChange(37) == '1 25 cent pieces, 1 ten cent pieces, 0 five cent pieces and 2 one cent pieces' ? 'Passed' : 'Failed'}</div>  
   <div class="result">$0.57: ${coinChange(57) == '2 25 cent pieces, 0 ten cent pieces, 1 five cent pieces and 2 one cent pieces' ? 'Passed' : 'Failed'}</div>
   <div class="result">$0.19: ${coinChange(19) == '0 25 cent pieces, 1 ten cent pieces, 1 five cent pieces and 4 one cent pieces' ? 'Passed' : 'Failed'}</div>
`;

function greet(user) {
  if(user.logged_in) {
    return `Hello ${user.firstname} ${user.lastname}`;
  } else {
    return `Welcome, please log in`;
  }
}

const drill_10 = document.getElementById('drill_10');
const sam = {
  id: 3224,
  logged_in: true,
  firstname: "Samwise",
  lastname: "Gamgee"
}
drill_10.innerHTML = `
   <h2>Personalized Greeting</h2>
   <div class="result">Samwise Gamgee: ${greet(sam) == 'Hello Samwise Gamgee' ? 'Passed' : 'Failed'}</div>
   <div class="result">No one: ${greet({id:1,logged_in: false}) == 'Welcome, please log in' ? 'Passed' : 'Failed'}</div>  
`;

function electricBill(kwh) {
  let total = 6;
  if(kwh > 1000) {
    total = total + ((kwh - 1000)* 0.37);
    kwh = 1000;
  } 

  if(kwh > 400) {
    total = total + ((kwh - 400) * 0.32);
    kwh = 400;
  } 

  total = total + (kwh * 0.26);
  
  return total;

}

const drill_11 = document.getElementById('drill_11');
drill_11.innerHTML = `
   <h2>Electric Bill</h2>
   <div class="result">0kWh => $6: ${electricBill(0) == 6 ? 'Passed' : 'Failed'}</div>
   <div class="result">400kWh => $110: ${electricBill(400) == 110 ? 'Passed' : 'Failed'}</div>
   <div class="result">1000kWh => $302: ${electricBill(1000) == 302 ? 'Passed' : 'Failed'}</div>
   <div class="result">1200kWh => $376: ${electricBill(1200) == 376 ? 'Passed' : 'Failed'}</div>
   <div class="result">200kWh => $58: ${electricBill(200) == 58 ? 'Passed' : 'Failed'}</div>
   <div class="result">600kWh => $174: ${electricBill(600) == 174 ? 'Passed' : 'Failed'}</div>
`;