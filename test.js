const drill_1 = document.getElementById('drill_1');
if (typeof celciusToFahrenheit === 'function') {
  drill_1.innerHTML = `
   <div class="result">-40C = -40F: ${
     celciusToFahrenheit(-40) === -40 ? 'Passed' : 'Failed'
   }</div>
   <div class="result">0C = 32F: ${
     celciusToFahrenheit(0) === 32 ? 'Passed' : 'Failed'
   }</div>
   <div class="result">21C = 69.8F: ${
     celciusToFahrenheit(21) === 69.8 ? 'Passed' : 'Failed'
   }</div> 
   <div class="result">100C = 212F: ${
     celciusToFahrenheit(100) === 212 ? 'Passed' : 'Failed'
   }</div>   
`;
} else {
  drill_1.innerHTML = "Write the function named 'celciusToFahrenheit'";
}

const drill_2 = document.getElementById('drill_2');
if (typeof circleArea === 'function') {
  drill_2.innerHTML = `
   <div class="result">r=0 => 0: ${
     circleArea(0) === 0 ? 'Passed' : 'Failed'
   }</div>
   <div class="result">r=1 => PI: ${
     circleArea(1) === Math.PI ? 'Passed' : 'Failed'
   }</div>
   <div class="result">r=10 => 314: ${
     Math.round(circleArea(10)) === 314 ? 'Passed' : 'Failed'
   }</div> 
`;
} else {
  drill_2.innerHTML = "Write the function named 'circleArea'";
}

const drill_3 = document.getElementById('drill_3');
if (typeof integerDivision === 'function') {
  drill_3.innerHTML = `
   <div class="result">4 / 2 => 2 r 0: ${
     integerDivision(4, 2) === '4 / 2 is 2 with remainder 0'
       ? 'Passed'
       : 'Failed'
   }</div>
   <div class="result">5 / 2 => 2 r 1: ${
     integerDivision(5, 2) === '5 / 2 is 2 with remainder 1'
       ? 'Passed'
       : 'Failed'
   }</div>
   <div class="result">27 / 9 => 3 r 0: ${
     integerDivision(27, 9) === '27 / 9 is 3 with remainder 0'
       ? 'Passed'
       : 'Failed'
   }</div> 
   <div class="result">31 / 9 => 3 r 4: ${
     integerDivision(31, 9) === '31 / 9 is 3 with remainder 4'
       ? 'Passed'
       : 'Failed'
   }</div>   
`;
} else {
  drill_3.innerHTML = "Write the function named 'integerDivision'";
}

const drill_4 = document.getElementById('drill_4');
if (typeof integerDivision2 === 'function') {
  drill_4.innerHTML = `
   <div class="result">4 / 2 => 2 r 0: ${
     integerDivision2(4, 2) === '4 / 2 is 2 with remainder 0'
       ? 'Passed'
       : 'Failed'
   }</div>
   <div class="result">4 / 0 => ERROR: ${
     integerDivision2(4, 0) === 'Sorry, cannot divide by zero'
       ? 'Passed'
       : 'Failed'
   }</div>   
`;
} else {
  drill_4.innerHTML = "Write the function named 'integerDivision2'";
}

const drill_5 = document.getElementById('drill_5');
if (typeof hypotenuse === 'function') {
  drill_5.innerHTML = `
   <div class="result">3, 4, 5: ${
     hypotenuse(3, 4) === 5 ? 'Passed' : 'Failed'
   }</div>
   <div class="result">5, 12, 13: ${
     hypotenuse(5, 12) === 13 ? 'Passed' : 'Failed'
   }</div>
   <div class="result">11, 60, 61: ${
     hypotenuse(11, 60) === 61 ? 'Passed' : 'Failed'
   }</div> 
   <div class="result">19, 180, 181: ${
     hypotenuse(19, 180) === 181 ? 'Passed' : 'Failed'
   }</div>   
`;
} else {
  drill_5.innerHTML = "write the function named 'hypotenuse'";
}

const drill_6 = document.getElementById('drill_6');
if (typeof canFit === 'function') {
  drill_6.innerHTML = `
   <div class="result">3, 4, 5: ${canFit(3, 4, 5) ? 'Passed' : 'Failed'}</div>
   <div class="result">5, 12, 20: ${
     canFit(5, 12, 20) ? 'Passed' : 'Failed'
   }</div>
   <div class="result">11, 60, 50: ${
     canFit(11, 60, 50) ? 'Failed' : 'Passed'
   }</div> 
   <div class="result">19, 180, 100: ${
     canFit(19, 180, 100) ? 'Failed' : 'Passed'
   }</div>   
`;
} else {
  drill_6.innerHTML = "Write the function named 'canFit'";
}

const drill_7 = document.getElementById('drill_7');
if (typeof isOdd === 'function') {
  drill_7.innerHTML = `
   <div class="result">20: ${isOdd(20) ? 'Failed' : 'Passed'}</div>
   <div class="result">21: ${isOdd(21) ? 'Passed' : 'Failed'}</div>
   <div class="result">0: ${isOdd(0) ? 'Failed' : 'Passed'}</div>   
`;
} else {
  drill_7.innerHTML = "Write the function named 'isOdd'";
}

const drill_8 = document.getElementById('drill_8');
if (typeof pinGenerator === 'function') {
  drill_8.innerHTML = `
   <div class="result">1: ${pinGenerator() % 2 == 0 ? 'Passed' : 'Failed'}</div>
   <div class="result">2: ${pinGenerator() % 2 == 0 ? 'Passed' : 'Failed'}</div>
   <div class="result">3: ${
     pinGenerator() % 2 == 0 ? 'Passed' : 'Failed'
   }</div>   
`;
} else {
  drill_8.innerHTML = "Write the function named 'pinGenerator'";
}

const drill_9 = document.getElementById('drill_9');
if (typeof coinChange === 'function') {
  drill_9.innerHTML = `
   <div class="result">$1.00: ${
     coinChange(100) ==
     '4 25 cent pieces, 0 ten cent pieces, 0 five cent pieces and 0 one cent pieces'
       ? 'Passed'
       : 'Failed'
   }</div>
   <div class="result">$0.75: ${
     coinChange(75) ==
     '3 25 cent pieces, 0 ten cent pieces, 0 five cent pieces and 0 one cent pieces'
       ? 'Passed'
       : 'Failed'
   }</div>
   <div class="result">$0.74: ${
     coinChange(74) ==
     '2 25 cent pieces, 2 ten cent pieces, 0 five cent pieces and 4 one cent pieces'
       ? 'Passed'
       : 'Failed'
   }</div> 
   <div class="result">$0.37: ${
     coinChange(37) ==
     '1 25 cent pieces, 1 ten cent pieces, 0 five cent pieces and 2 one cent pieces'
       ? 'Passed'
       : 'Failed'
   }</div>  
   <div class="result">$0.57: ${
     coinChange(57) ==
     '2 25 cent pieces, 0 ten cent pieces, 1 five cent pieces and 2 one cent pieces'
       ? 'Passed'
       : 'Failed'
   }</div>
   <div class="result">$0.19: ${
     coinChange(19) ==
     '0 25 cent pieces, 1 ten cent pieces, 1 five cent pieces and 4 one cent pieces'
       ? 'Passed'
       : 'Failed'
   }</div>
`;
} else {
  drill_9.innerHTML = "Write the function named 'coinChange'";
}

const drill_10 = document.getElementById('drill_10');
const sam = {
  id: 3224,
  logged_in: true,
  firstname: 'Samwise',
  lastname: 'Gamgee'
};
if (typeof greet === 'function') {
  drill_10.innerHTML = `
   <div class="result">Samwise Gamgee: ${
     greet(sam) == 'Hello Samwise Gamgee' ? 'Passed' : 'Failed'
   }</div>
   <div class="result">No one: ${
     greet({ id: 1, logged_in: false }) == 'Welcome, please log in'
       ? 'Passed'
       : 'Failed'
   }</div>  
`;
} else {
  drill_10.innerHTML = "Write the function named 'greet'";
}

const drill_11 = document.getElementById('drill_11');
if (typeof electricBill === 'function') {
  drill_11.innerHTML = `
   <div class="result">0kWh => $6: ${
     electricBill(0) == 6 ? 'Passed' : 'Failed'
   }</div>
   <div class="result">400kWh => $110: ${
     electricBill(400) == 110 ? 'Passed' : 'Failed'
   }</div>
   <div class="result">1000kWh => $302: ${
     electricBill(1000) == 302 ? 'Passed' : 'Failed'
   }</div>
   <div class="result">1200kWh => $376: ${
     electricBill(1200) == 376 ? 'Passed' : 'Failed'
   }</div>
   <div class="result">200kWh => $58: ${
     electricBill(200) == 58 ? 'Passed' : 'Failed'
   }</div>
   <div class="result">600kWh => $174: ${
     electricBill(600) == 174 ? 'Passed' : 'Failed'
   }</div>
`;
} else {
  drill_11.innerHTML = "Write teh function named 'electricBill'";
}

const drill_12 = document.getElementById('drill_12');
if (typeof creditLimit === 'function') {
  const user1 = {
    account_number: 12345,
    name: 'Brie Larson',
    balance_beginning_of_month: 300,
    total_charges_in_month: 700,
    total_credits_in_month: 200,
    credit_limit: 500
  };

  const user2 = {
    account_number: 12345,
    name: 'Brie Larson',
    balance_beginning_of_month: 300,
    total_charges_in_month: 700,
    total_credits_in_month: 200,
    credit_limit: 900
  };

  drill_12.innerHTML = `
   <div class="result">No credit: ${
     creditLimit(user1) == 'Credit limit exceeded' ? 'Passed' : 'Failed'
   }</div>
   <div class="result">Credit: ${
     creditLimit(user2) == 'Credit available' ? 'Passed' : 'Failed'
   }</div>
`;
} else {
  drill_12.innerHTML = "Write the function named 'creditLimit'";
}

const drill_13 = document.getElementById('drill_13');
if (typeof palindrome === 'function') {
  drill_13.innerHTML = `
   <div class="result">12321: ${
     palindrome(12321) == 'Yes, it is a palindrome' ? 'Passed' : 'Failed'
   }</div>
   <div class="result">12345: ${
     palindrome(12345) == 'No, not a palindrome' ? 'Passed' : 'Failed'
   }</div>
   <div class="result">11111: ${
     palindrome(11111) == 'Yes, it is a palindrome' ? 'Passed' : 'Failed'
   }</div>
   <div class="result">121: ${
     palindrome(121) == 'Incorrect input' ? 'Passed' : 'Failed'
   }</div>
   <div class="result">1234321: ${
     palindrome(1234321) == 'Incorrect input' ? 'Passed' : 'Failed'
   }</div>
`;
} else {
  drill_13.innerHTML = "Write the function named 'palindrome'";
}
