# Checkpoint 6 : Application Logic

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/checkpoint-6)

## Objective 
By the end of this checkpoint, students can implement logical assertions and conditionals.

 - Introduce problems that require if/else statements
 - State that JavaScript will skip lines when executing
 - Should have diagrams with arrows over the top of code showing which directions it executes
 - Introduce function arguments
 - Data types and the purpose or use cases for each.
    - strings, functions, arrays, objects, numbers, booleans
 - Introduce problems involving mathematical operators (*, +, -, /)
 - Introduce "truthiness" and "falsiness"
 - Introduce some problems using null, empty strings, undefined, etc...

(conditionals become way more useful when working with event handling, this is a good place to practice writing utility functions)


### level of complexity
#### A little bit for when using conditionals related to the DOM:

```
let randomHour = Math.random() * 24

function getGreeting(hour) {
  if (hour < 12) {
    return 'good morning'
  } else if (hour < 18) {
    return 'good afternoon'
  } else {
    return 'good evening'
  }
}
```

 - document.querySelector('.content').innerHTML = getGreeting(randomHour)
 - working with JavaScript when not related to the DOM:

```
function isOdd(num) {}
function celsiusToFahrenheit(celsius) {}
function milesToKm(miles) {}
function isValidHonourific(str) {}
function splitTheBill(total, numberOfPeople) {}
function isLessThanXCharacter(str, numberOfCharacters) {}
function isEmail(str) {}
```

## Assignment:
 - drills, lots of drills.
   - Drills involving writing functions without the DOM
   - arithmetic related functions
   - predicate functions
   - string concat functions, etc...

 - can use mocha in the browser here in koans format so students only need to implement the functions in a script.js file
 - This way they'll be able to use console.log to debug in devtools etc...
