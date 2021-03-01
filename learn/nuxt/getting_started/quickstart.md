ad getting started 

## set up

```sh
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
```

this is for the demo but probably use `create-next-app`

## ok basics

- so far everything seems like regular react jsx
---

## Page navigation

Outline: 
- nuxt have native routing support
- no need for "react-router-dom"

> More docs at
> - [file system routing](https://nextjs.org/docs/routing/introduction)
> - [Link api](https://nextjs.org/docs/api-reference/next/link)

### Content

Routing
- each pages is a component within `pages/`
- the route will be the filename `pages/post/first-post.js` has the `/post/first-post` route


`Link` Component
- use `<a>` for external links
- use `Link` from `next/link` to wrap the `a` tag and do **client side** navigation **within the application**

> Client side nav:
> - faster page transition using js
> - no reloading server contend

### New stuff

Code splitting and prefetching
- 

---
## misc

avaliable in the help page

- [documentation](https://nextjs.org/docs)
- [learn](https://nextjs.org/learn/basics/create-nextjs-app)
- [examples](https://github.com/vercel/next.js/tree/master/examples)
- [deploy](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app)