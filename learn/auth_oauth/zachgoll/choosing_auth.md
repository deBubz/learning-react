# Authentication strategies for small organizations

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

Hence this is how it would work

### The reality of the situation





---

