# code analysis

analyse authentication code from [mealternative](https://github.com/kazhala/mealternative-backend)

4 related files are found

- router
- controller
- validator 
- model

npm package used

- express router (normal)
- bcrypt - hashing
- sgMail
- jwt
- express-jwt
- md5
- express-validator
- mongoose

## ROUTER

import:
- controllers as middleware
- validators as middleware

sign in routes
- P `pre-signup` -> preValidator -> runValidation -> controller
- P `signup` -> signupValidator -> runValidation -> controller
- P `signin` -> signinValidator -> runValidation -> controller
- G `signout` -> signoutValidator -> runValidation -> controller

passwords routes
- P `forgot-password` -> forgotValidator -> runValidation -> controller
- R `reset-password` -> resetValidator -> runValidation -> controller

## VALIDATOR

- set validation requirements to run (see runValidattion)
- if fails, return a message `withMessage()`, in a json with api status `422`
- `next()` trigger the nest callback

## CONTROLLER

good stuff here?

**presignup**

- check duplicated username
- check duplicated email
- if new account
  - generate jwt token for account actvation
  - send email
- *return* activation instruction message
- *catch* error message

**signup**

