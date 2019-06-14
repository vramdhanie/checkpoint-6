function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

function circleArea(r) {
  return Math.PI * Math.pow(r, 2);
}

function integerDivision(a, b) {
  let quotient = Math.trunc(a / b);
  let remainder = a % b;
  return `${a} / ${b} is ${quotient} with remainder ${remainder}`;
}

function integerDivision2(a, b) {
  if (b == 0) {
    return 'Sorry, cannot divide by zero';
  } else {
    return integerDivision(a, b);
  }
}

function hypotenuse(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

function canFit(a, b, r) {
  const hyp = hypotenuse(a, b);
  return hyp <= r;
}

function isOdd(n) {
  return n % 2 == 1;
}

function pinGenerator() {
  const min = 10000;
  const max = 99999;
  let ran = Math.round(Math.random() * (max - min) + min);
  if (isOdd(ran)) {
    ran = ran + 1;
  }
  return ran;
}

function coinChange(n) {
  const quarters = Math.trunc(n / 25);
  n = n % 25;
  const dimes = Math.trunc(n / 10);
  n = n % 10;
  const nickels = Math.trunc(n / 5);
  const cents = n % 5;
  return `${quarters} 25 cent pieces, ${dimes} ten cent pieces, ${nickels} five cent pieces and ${cents} one cent pieces`;
}

function greet(user) {
  if (user.logged_in) {
    return `Hello ${user.firstname} ${user.lastname}`;
  } else {
    return `Welcome, please log in`;
  }
}

function electricBill(kwh) {
  let total = 6;
  if (kwh > 1000) {
    total = total + (kwh - 1000) * 0.37;
    kwh = 1000;
  }

  if (kwh > 400) {
    total = total + (kwh - 400) * 0.32;
    kwh = 400;
  }

  total = total + kwh * 0.26;

  return total;
}

function creditLimit(user) {
  const new_balance =
    user.balance_beginning_of_month +
    user.total_charges_in_month -
    user.total_credits_in_month;
  if (new_balance > user.credit_limit) {
    return 'Credit limit exceeded';
  } else {
    return 'Credit available';
  }
}

function palindrome(n) {
  if (n > 99999 || n < 10000) {
    return 'Incorrect input';
  }

  const first_digit = Math.trunc(n / 10000);
  const last_digit = n % 10;
  const first_and_last = first_digit === last_digit;

  n = n % 10000;
  n = Math.trunc(n / 10);

  const second_digit = Math.trunc(n / 100);
  const second_to_last_digit = n % 10;
  const second_digits = second_digit === second_to_last_digit;

  if (first_and_last && second_digits) {
    return 'Yes, it is a palindrome';
  } else {
    return 'No, not a palindrome';
  }
}
