# Learn TDD

> [source](https://github.com/dwyl/learn-tdd)

## what is TDD

- test first development
- write enough test before development code to fulfill the test
- refactor the test
- encourage thinking about the code 

TDD follows a 3-step process
1. **Write a failing test**
   - understand user requirements/story well enough to write a test
   - what do you expect the code to do
   - should initially fail as here is no code
2. **Make the test pass**
   - write the code you need to pass the test
   - ensure everything else still pass
3. **Refactor your code**
   - take time to refactor to make it easier for the future

The habit is write test first and watch it fail, then make it pass

> - the **test** is the **question** you are asking
> - your **code** is answer

[harder tute](https://github.com/dwyl/javascript-todo-list-tutorial)

---

## Vending machine change calculator

- vending machine accepts coin and calculate change
- machine accept coins, calculate the change to be return to the customer, given price and cash

> single file app

> using QUnit 

---

## Test

tests have 3 parts: 
1. **description** first parameter of `test()`, describing what the test is
2. **computation** 2nd param callback method
3. **assertion** verify the result of computation stage

---

## requirements gathering stage

> as a customer I want to buy a selected item from the vending machine and see what my change is as a result into the various coin so that i can select one of the options and receive my change

acceptance criteria:
- successfully call `getChange` and return the change value in the various coins available.
- Unit tests should exist when the function is ready
- Selection of desired return is out of scope

> **more user story view**
> - given **price** and **cash** from customer
> - return change to customer

### what is needed

- `getChange` func with 2 params `totalPayable` and `cashPaid`
- should return an array of coins dispensed

---

## notes

- Why deliberately write a test you know it is going to fail
  - get used to the idea of only writing code required to pass the failing test
  - proves the test will fail if the code does not behave as expected

code coverage
- how much of the code is tested
- the cold could be tampered with backdoors not tested for

> this case try blanket.js 
> - blanketjs would not cover all cases
> - one liners would pass the test

> IstanbulJs