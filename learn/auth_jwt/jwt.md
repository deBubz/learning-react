[some stuff on jwt here](https://medium.com/@weinberger.ariel/json-web-token-jwt-the-only-explanation-youll-ever-need-cf53f0822f50)

Simple usage

- http request via API - `jwt` is pmuch for auth, perform role checks
- good in *distributed systems* & *microservices architecture* using Pub-Priv architeture

## P1: JWT standard

- `json web token` consist
  - **header** - meta information
    - (algo) to sin the token
    - (typ) type of token (always have the `JWT` value)
  - **payload** - payload containing the claims of a token there are different recommended [standard fields](https://tools.ietf.org/html/rfc7519#section-4.1)
    - (iss) Issuer to generate/issue the jwt (auth service or OAuth provider)
    - (sub) Subject, entity identified by this token. (could be userId)
    - (aud) target Audience for JWT. if intended to be used by beta testers user pool, you could specify that as audience. should **reject** tokens with no audience
    - (exp) expiry time stamp
    - (iat) specified date the token was issued
  - **signature** - created from encoded header, encoded payload, a secret(private key) and crypto alg
    - should not store sensitive data on the key
    - when Verifying, your client take the headers and claims, generate signature. Compare it with the old signature.
    - JWT sigs are not decrypted but reproduced and comapred (hashing)

## p2 misconceptions

### JWT as Passports

- often used as passport, All I need to send request on your behalf is your JWT. Need to ensure token is kept safe from any impersonator
- Make sure to serve via HTTPS. secure from MitM

### Short lived JWT & invalidating Token

- quickly expired tokens are advised, after refresh, the auth servers will issue a new token (token refresh). Short lived token serves
  - incase it was compromised, it limits the window the attacker have
  - JWT are stateless, cannot invalidate tokens. Hence short lived tokens is the closest we get to keep consistency over stuff like perms and roles

### JWT advantages

**why stateless is good**

- not stored in a db. In a distributed system, you might have back-end services for different purpose and business domains. All these need is a PK to verify tokens from incoming requests.
- no need to send a request to auth server every requests (good for performance)

**should i trust my token**

- for now your call
- honestly for now lets keep it simple

**refreshing tokens**

- very simple? after initial auth, user will get
  - AccessToken: regular JWT that sent with every request
  - RefreshToken: this persisted in a db mostly owned by an Auth service. often not JWT - a hash
- at some point the token will expire, then front end will send a refresh request with the refresh token. The auth server will generate a new AccessToken with the most updated claim,
  - send back to user to used until it needs to be refreshed
  - Refresh token can be valid for months. Then the user will be signed out and needs to auth again. (fb, twitter auth)

**secret public key pair**

2 ways to sign JWTm lets consider auth, warehouse, order and notification service

- **SECRET**
  - could use any string as a secret, and the same will be used to verify the sig. (pick a hard to brute secret)
  - this is risky when multiple services since they need to know that secret
- **KEY PAIR**
  - the issuer will use a PrivKey to sign (not shared)
  - any other service will get the public key

### Where to store JWT

> not sec expert

- remember JWT is passport, if someone get the user token ITSA BAD
- storing in LOCALSTORAGE is popular but its vulnerable to XSS
- storing in HttpOnly cookie is preferable, better against XSS but not CSRF

> [see this](https://stackoverflow.com/questions/34817617/should-jwt-be-stored-in-localstorage-or-cookie/37427233#37427233)

### encrypting token??

also an avenue

aight lets probably get some examples
