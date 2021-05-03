# Authentication strategies for small organizations

- [Authentication strategies for small organizations](#authentication-strategies-for-small-organizations)
  - [session based authentication](#session-based-authentication)
    - [Http headers](#http-headers)
    - [How Cookies Works](#how-cookies-works)
    - [Sessions](#sessions)
  - [Session code work through](#session-code-work-through)
    - [How passport local strategy works](#how-passport-local-strategy-works)
    - [conceptual overview of session based authentication](#conceptual-overview-of-session-based-authentication)

> [source](https://zachgoll.github.io/blog/2019/choosing-authentication-strategy/#Session-Based-Authentication-Implementation)

- walk through for jwt
- some good authentication techniques for small - medium projects are 
  - session based authentication - use browser cookies with backend session top manage logged in/ out users
  - JWT - stateless auth method using jwt stored in `localStorage`

---

## session based authentication

- one of the oldest method of authentication,
- **server sided** authentication
- to understand the basic tenets of server-sided based auth, you need to understand:
  - basic HTTP header protocols
  - cookie (browser)
  - session (server)
  - how session and cookie interacts to auth

### Http headers

Most HTTP request would have:
1. General header
2. Request Header

```
General Headers
  Request URL: https://www.google.com/
  Request Method: GET
  Status Code: 200

Request Headers
  Accept: text/html
  Accept-Language: en-US
  Connection: keep-alive
```

These headers are `key: value` pair that contains information for the client/browser to help completing the request.

> Learn more about the `key: value` pair in the headers [on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

**General header** can be a mix of both **request** and **response** data.
Clearly seeing `Request URL` and `Request Method` is part of the **request**,
and `Status Code` is part of the response.

**Request Header** only contains header included with the **request object**.
Think of it as "instructions" for the server.
In the case of the request above:
- only sends html/text data
- only send english if possible
- dont close connection after request is over

After sending a request, the server will read your request, create a response that will contain:
- HTML data sent from browser
- HTTP headers

The response will also contain a **Response Headers** created by the server that may look like this

```
Response Headers
  Content-Length: 41485
  Content-Type: text/html; charset=UTF-8
  Set-Cookie: made_up_cookie_name=some value; expires=Thu, 28-Dec-2020 20:44:50 GMT;
```

### How Cookies Works

If we have protected webpage that we want users to log in to access, without cookies, users will have to login every refresh.
That is because HTTP protocol is by default **stateless**.

Cookies allow the concept of **psrsistent state** and allow the browser to **remember** something that the server told it to remember.
This is what the `Set-Cookie` in the `Response Header` does, telling the browser to set a value.
You can check this out using the dev tool.

Hence this is how it would work:
1. Log into a site on a form
2. Visit the protected page
3. Browser send request with cookie attached on the header
4. The server receive the request and "remembers" the user was authenticated.

### Sessions

very similar to cookies and is often confused because they can be used together. The differences is the *location* of the storage.
- cooke set by server but stored on the browser
- if the server wants to store the "state" of the user. It will need a scheme to keep track of that the cookie in the browser looks like.

The process may look like this:
- **server** hey browser, user is authenticated so store this `cookie`
- **browser** ok, this `cookie` is attached to request header
- **browser** hey server here is my request with `cookie` in header
- **server** i see your request, can you update the cookie
- **browser** ok cookie updated

So in stead of having the browser keeping all the data
> Why doesnt the server keep a record of this information and use a "sessionID" to identify the user

This is what a `session` is for, a `session` is stored on a datastore, containing sensitive information. Where as a cookie would be highly insecure.
Though it could get confusing when talking about using `cookies` and `session` together.
Since `cookies` are the way the client and server communicate metadata, sessions must use cookies. 

---

## Session code work through

Whats new:
- MongoStore to keep session data.
- see Express-Session note in code.

understanding `express-session` process:
1. when loading a route, it checks if there is a session in the store (MONGODB).
2. IF there is a session, the middleware validates and tell the browser whether the session is valid or not.
   - if valid, browser attaches the `connect.sid` cookie to the HTTP request
3. if no session, it creates a new session, takes a cryptographic hash of the session and stored into the cookie `connect.sid` in the `res` object with the hash value in `Set-Cookie: connect.sid=hashed val`

### How passport local strategy works

- passportJS is consist of 2+ modules (base + strategy)
- it is a middleware
- `passport-local` is a middleware that modifies another object 
> yep passport docs need work
- lots of [notes in the passport file](./session_serv/passport.js)

### conceptual overview of session based authentication

1. Express app starts
2. User visit page on browser
3. `express-session` middleware checks for `cookie`,
   - since its the first visit, express server return a path with `Set-Cookie` in header.
   - cookie string is generated by `express-session` according set options

> user go somewhere else and comeback

4. returns to login page again, this time the request containing user cookie
5. `express-session` takes `connect.sid` value from the cookie header and search in `MongoStore`
   - since session exist, `express-session` does not do anything
   - the HTTP header value and `MongoStore` db entry in `session` stays the same
6. user login with `username` and `password`
7. send `POST` request to `/login` calling the `passport.authenticate()` middleware

> `passport.initialize()` and `passport.session()` has been called every request.
> Each request, these middleware are checking `req.session` (from `express-session`) for `req.session.passport.user`
> - if `passport.authenticate` has NOT been called yet, the `req.session` would not have a passport property.

8. we assume user is already registered. Passport callback validate the user correctly
9. `passport.authenticate()` returns validated `user` object, attaches `req.session.passport` prop ann is serialized.
10. attach full user object to `req.user`

user visit the page again on the next day

11. `express-session` checks `cookie` header, find the valid sessionID.
12. Since the sessionID is still valid, the middleware re-init the `req.session` object and set the value returned from `MongoStore`
13. `passport.initialize()` checks `req.session.passport` for `user` object
    - uses it to ren-init `req,user` object to be the same as the user attached to the session from `passport.deserializeUser`

user visit again after 2 months
14. `express-session` checked and found an expired cookie, replacing it with a new one.
15. `passport` middleware runs, but `express-session` had to create a `req.session.passport` object
16. user need to log in again because of missing `req.session.passport.user` object

> NOTE: have a look at express-session and connect-mongo for options

---

