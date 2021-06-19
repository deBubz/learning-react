# intro to test driven development

Basically this is a development approach to **write test** before writing production code to fulfil that test and refactoring.

Few views of TDD is:
- Specification not validation
- Write clean code that works

---

## What is TDD?

Steps of test first development (TFD) is:
- quickly add enough test dor code to fail
- run code and ensure the new test does fail
- update the code to pass the new test

![TFD](assets/tddSteps.jpg)

so **TDD** = refactoring + TFD

When you implement a new feature:
- ask if the existing design is the best possible design to implement
- YES - proceed TDD
- NO - refactor the portion of the design affected by the new feature
  - allowing you to add that feature as simple as possible
  - improving the quality of the design

Write tests before code
- in very small steps, one test - one function at a time
- should not write a new function until there is a first failed test since the function does not exist.

> it is very easy to "slip" writing code first before test.

**two level of TDD**
1. Acceptance TDD (ATTD)
   - write a single acceptance test or behavioral specification depending on you
   - write enough code to fulfill that test
   - GOAL: specify detailed, executable requirements for solution in Just-in-Time basis
2. Developer TDD (DTDD)
   - write single dev test(unit test?)
   - write enough code to fulfill that test
   - GOAL: specify detailed executable design for JIL solution

Good unit tests should be able to:
- run fast (short setups, runtimes, breakdowns)
- run in isolation
- use that makes it easy to read & understand
- use real data (copy of production data)
- represent one step towards the overall goal

---

## TTD and traditional testing

> if it's worth building, its worth testing

---

## TDD and documentation

- programmers dont read docs
- well written unit tests can also acts as your **technical docs**

---

## Test-Driven Db development



---

## Scaling TDD via Agile model driven development

---

## Why TDD

- significant advantage is it lets you take **small steps** writing software
- emulating decomposition
- more productive identifying small functions rather than the whole project

> the act of writing a unit test is more an act of design than of verification.
> It is also more of an act of documentation than verification

---


## Myths and misconception

---

## summary
