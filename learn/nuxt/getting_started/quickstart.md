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
- next automatically do code splitting
  - each page only load what is necessary
  - only current page is rendered initially
  - home page load more quickly 
- when ever `Link` appear in the browser viewport, Next will prefetch the code for the Linked page 

--- 

## assets, metadata and css

Outline
- add static files
- customize `<head>`
- create reusable components using css modules
- add global css in `pages/_app.js`

### assets

- next can serve static assets under the top levevl `public` dir
- files can be referenced from the **root** of the app similar to `pages/`
- `public` is also good for robot.txt

> to do this grab a profile pic and chuck in public/images

- next js provide `Image` to handle responsive image, optimizing image, only load when it might enter the view port
- `Image` component
  - lazy load by default (load as within viewport)

### meta data

- to set the page metadata, use the nuxt component `Head`
- to cusomize `<html>` tag, learn more about [custom `Document`](https://nextjs.org/docs/advanced-features/custom-document)

### css

- by default you can use `styled-css` within the component
- next also support `css modules` and `sass`
- but you can also use `styled-component` or `emotion` or `Tailwind Css` **Libraries**

css modules
- file must end with `.module.css`
- Global styles
  - code in `pages/_app.js`

> styling still feels terrible to do

#### styling tips

- use `classname` the **library** to toggle classes
- with no config, nuxtJS uses PostCss, customize it by creating `postcss.config.js`

> this section is a mess

---


---
## misc

avaliable in the help page

- [documentation](https://nextjs.org/docs)
- [learn](https://nextjs.org/learn/basics/create-nextjs-app)
- [examples](https://github.com/vercel/next.js/tree/master/examples)
- [deploy](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app)