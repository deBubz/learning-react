# tdd with react

- add `cypress`
- add cypress script `"cypress:open": "cypress open"`
- run the script

---

## feature test

- creating end-to-end test describing the features what the users wants to do

---

## implementing component behavior

- after adding te text box and button
- instead of adding the behavior for cypress - clearing the textBox
- step "outside" e2e test to an "inside" compoent test
  - allows us to test specific behavior
  - e2e tests are very slow
  - prevent us from writing rare edge cases
- create `src/__tests__/NewMessageForm.spec.js`
  - even though the test seems familiar to `cypress`, still testing the same thing
  - instead of testing the whole app, only the component is tested

---

## summary

- I think i generally understand te concepts
- the only thing I need to check are
  - testing frameworks - jest, react testing library, cypress
  