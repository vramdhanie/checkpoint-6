/**
 * Drill 1: Write a function named celciusToFahrenheit that accepts
 * a numeric parameter representing a temperature in degrees celcius.
 * Convert the temperature to degrees Fahrenheit and return the converted value.
 *
 * Fahrenheit = degrees celcius multiplied by nine fifths plus thirty two.
 *
 */

function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

/**
 * Drill 2: Write a function named *circleArea* that accepts a single parameter
 * representing the radius of the circle. Calculate and return the area of the circle.
 */
function circleArea(r) {
  return Math.PI * Math.pow(r, 2);
}
/**
 * Drill 3: Write a function named *integerDivision* that accepts two parameters a and b.
 * This function performs an integer division and returns a string in the form "a / b is c with remainder r".
 * For example, if a = 7 and b = 2 the function returns teh string "7 / 2 is 3 with remainder 1".
 */
function integerDivision(a, b) {
  let quotient = Math.trunc(a / b);
  let remainder = a % b;
  return `${a} / ${b} is ${quotient} with remainder ${remainder}`;
}

/**
 * Drill 4: Write a function named *integerDivision2* that accepts two parameters a and b
 * and performs integer division using the function from the previous drill. In this function
 * check to ensure that b is not zero to prevent a division by zero error. If b is zero return the
 * string "Sorry, cannot divide by zero".
 */
function integerDivision2(a, b) {
  if (b == 0) {
    return 'Sorry, cannot divide by zero';
  } else {
    return integerDivision(a, b);
  }
}

/**
 * Drill 5: Write a function named *hypotenuse* that accepts two parameters a and b representing
 * the two sides of a right angled triangle. Calculate the hypotenuse of the triangle using the formula:
 *a^2 + b^2 = c^2*
 */
function hypotenuse(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

/**
 * Drill 6: We say a right angled triangle  can fit in a circle if the length of the hypotenuse of the
 * triangle is less than or equal to the length of the radius of the circle. Write a function named *canFit*
 * that accepts three parameters a, b and r where a and b are the two sides of a right angled triangle and r
 * is the radius of the circle. Return true if the triangle can fit in the circle, false otherwise.
 */
function canFit(a, b, r) {
  const hyp = hypotenuse(a, b);
  return hyp <= r;
}

/**
 * Drill 7: Write a function named *isOdd* that takes a single parameter n and returns true if n is an odd number, false otherwise.
 */
function isOdd(n) {
  return n % 2 == 1;
}

/**
 * Drill 8: Write a function named *pinGenerator* that can generate a random 5 digit personal identification number (PIN).
 * The function should guarantee that the PIN is an even number.
 */
function pinGenerator() {
  const min = 10000;
  const max = 99999;
  let ran = Math.round(Math.random() * (max - min) + min);
  if (isOdd(ran)) {
    ran = ran + 1;
  }
  return ran;
}

/**
 * Drill 9: Write a function named *coinChange* that accepts a value n representing a number of cents between 0 and 100.
 * Calculate the number of quarters, dimes, nickels and cent coins needed to make the change. For example,
 * given n = 74 the function should return the string '2 25 cent pieces, 2 ten cent pieces, 0 five cent pieces and 4 one cent pieces'.
 */
function coinChange(n) {
  const quarters = Math.trunc(n / 25);
  n = n % 25;
  const dimes = Math.trunc(n / 10);
  n = n % 10;
  const nickels = Math.trunc(n / 5);
  const cents = n % 5;
  return `${quarters} 25 cent pieces, ${dimes} ten cent pieces, ${nickels} five cent pieces and ${cents} one cent pieces`;
}

/**
 * Write a function named _greet_ that accepts a user object. The user object will have at least three properties 
 * named _logged_in_, _firstname_ and _lastname_. Return a string that either greets the user by name or 
 * asks them to log in. If the user object is:

```JS
const sam = {
  id: 3224,
  logged_in: true,
  firstname: 'Samwise',
  lastname: 'Gamgee'
};
```

The function will return the string 'Hello Samwise Gamgee'. If the user object is:

```JS
const sam = {
  id: 3224,
  logged_in: false,
  firstname: 'Samwise',
  lastname: 'Gamgee'
};
```

then the function must return the string 'Welcome, please log in'.
 */
function greet(user) {
  if (user.logged_in) {
    return `Hello ${user.firstname} ${user.lastname}`;
  } else {
    return `Welcome, please log in`;
  }
}

/**
 * Drill 11: Write a function named _electricBill_ that accepts the amount of electricity 
 * used in kwh and calculates the total electric bill according to the following schedule:

    The first 400 kwh cost $0.26 per kwh, the next 600 kwh cost $0.32 per kwh, any kwh in excess of 
    this costs $0.37 per kwh.
 */
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
/**
 * 12. Write a function named _creditLimit_ that accepts a user object in the form:

```JS
const user1 = {
  account_number: 12345,
  name: 'Brie Larson',
  balance_beginning_of_month: 300,
  total_charges_in_month: 700,
  total_credits_in_month: 200,
  credit_limit: 500
};
```

    Calculate the final balance at the end of the month and determine if the credit limit has been exceeded. 
    If the credit limit was exceeded return the string 'Credit limit exceeded', 
    otherwise return the string 'Credit available'.
 */
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

/**
 * Drill 13: Write a function named *palindrome* that accepts a single number n.
 * First validate that n is a 5 digit number. If it is not return the string 'Incorrect input'.
 * If it is a 5 digit number determine if it is a palindrome or not.
 * A palindrome is a number that is the same read backward as well as forward.
 * For example the number 12321 is a palindrome. If the number is a palindrome return the string
 * 'Yes, it is a palindrome', otherwise return 'No, not a palindrome'.
 */
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
