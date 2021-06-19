# How to use JWT in Express

- [How to use JWT in Express](#how-to-use-jwt-in-express)
  - [intro](#intro)
  - [step 1 - generating secret token](#step-1---generating-secret-token)
  - [step 2 - authenticating token](#step-2---authenticating-token)
  - [step 3 - handling client-side tokens](#step-3---handling-client-side-tokens)

## intro

why use this 
- jwt supports auth and information exchanges
- learn how to use JWT in a server-client relationship in `nodejs6` server

---

## step 1 - generating secret token

the purpose is to sing and make the token valid.
you need 3 piece of info to sign a token
- secret (random string to generate a token)
- payload (data to be hashed)
- token expire time

> theres more you can read more in jwt docs

have a look at how to sign / verify token in `/utils/jwt`

> **NOTE**: ok no matter what the secret is, the payload is always visible

## step 2 - authenticating token

Looking at `autenticateToken` function in `/utils/jwt` 
- written as an express middleware

example calling a request using this middleware 
```
GET https://example.com:4000/api/userOrders
Authorization: Bearer JWT_ACCESS_TOKEN
```

example coding up (simple middleware)
```js
app.get("/path", authenticateToken, (req, res) => {
    // what the api do
})
```

## step 3 - handling client-side tokens

- when client receive toke, they want to store for data gathering in future request
- **store it in `HttpOnly` cookie** [wiki](https://en.wikipedia.org/wiki/HTTP_cookie)

storing client side
```js
// lame
// get token from request
const token = apiCall;
document.cookie = `token=${token`}`
```

> this seems bad? pretty much the same thing


