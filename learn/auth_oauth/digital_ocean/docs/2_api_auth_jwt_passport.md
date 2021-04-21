# API auth using JWT and PassportJS

## Introduction

yay more API auth tutorials
- jwt - standard defines a "secure" way of transmitting info between parties in JSON

we building
- sign up - create account
- log in - sign and return valid token
- (this good)use the token to access secure routes
- (this good, prolly just middleware)verify token, allow access

---

## step 1 - setup server

some essential dependencies
- express
- cors
- mongoose
- bcrypt
- jsonwebtoken
- passport
- passport-local
- passport-jwt

---
## step 2 - setting up db

- setting up mongoose model schema
- setting up mongodb database

you can use `Schema.pre()` pre-hook, which will execute before the user information is saved in the database

> may not be needed if things are handled in the call?

adding in a method hook to validate the password

---
## step 3 - setting up registration and log in middleware

using `passport` local strategy to authenticate **requests**.
All is done in `auth` folder

---

## step 4 - creating the endpoint

creating the route in `routes/route.js`

--- 

## step 5 - login endpoint and signing the JWT

set up `{ session: false }` because you don't want to store user detail in a session. You expect the user to send a token on each request to the secure routes.

> good for APIs, not recommended for web apps for performance reasons

At the moment the app does not use the token yet

---

## step 6 - verifying the JWT

- use `passport-jwt` to extract the jwt from query.
- verify token, if it is valid move on to next 

> if you need

---

## step 7 - creating secure routes

how is this secure????

## step 8 - putting everything together











