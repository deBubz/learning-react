- [set up](#set-up)
- [ok basics](#ok-basics)
- [- so far everything seems like regular react jsx](#--so-far-everything-seems-like-regular-react-jsx)
- [Page navigation](#page-navigation)
  - [Content](#content)
  - [New stuff](#new-stuff)
- [assets, metadata and css](#assets-metadata-and-css)
  - [assets](#assets)
  - [meta data](#meta-data)
  - [css](#css)
    - [styling tips](#styling-tips)
- [Pre-rendering and Data fetching](#pre-rendering-and-data-fetching)
  - [pre-rendering](#pre-rendering)
    - [Comparison](#comparison)
    - [static generation with/without data](#static-generation-withwithout-data)
    - [`getStaticProps`](#getstaticprops)
    - [fetching data at request time](#fetching-data-at-request-time)
    - [client side rendering](#client-side-rendering)
    - [SWR](#swr)
    - [recap](#recap)
- [dynamic routes](#dynamic-routes)
  - [path depending on external data](#path-depending-on-external-data)
  - [render markdown](#render-markdown)
  - [dynamic route tips](#dynamic-route-tips)
- [API routes](#api-routes)
  - [creating api](#creating-api)
  - [api details](#api-details)
- [misc](#misc)

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

## Pre-rendering and Data fetching

Outline
- fetching external blog data (can work for both db or headless cms)
- nextjs pre rendering
- static generation & server side rendering
- `getStaticProps` and use it to import external data

---

### pre-rendering

[read more here](https://nextjs.org/docs/basic-features/pages#pre-rendering)

> disable js to check if a site is prerendered

- plain react - no pre-render
- nextjs - pre-render

There are 2 forms of prerendering

**Static generation** - generates html at build time, and is reused for each request

**Server-side generation** - generates html at each user request

> more in [pages](https://nextjs.org/docs/basic-features/pages)

> everything is pre-rendered in development mode

- next allow you to **choose** which pre-rendering type for each page
  - create a *hybrid*

#### Comparison

- recommend using **static** generation for non-dynamic data
  - marketting pages, landing pages, blog posts, help&documentation

#### static generation with/without data

- can be done for both
- static generation with data
  - data fetched only **at build time**
- static generation with data using `getStaticProps`
  - export `async getStaticProps` ths:
    1.  runs at build time
    2.  fetch data and set as props

```js
const Home = (props) => {}

// called on build
export async function getStaticProps() {
  const data = // call data from file system

  return {
    props: {
      // passed into Home
    }
  }
}
export default Home;
```

> something *grey-matter* Yaml front matter parsing for md files

#### `getStaticProps`

- only runs **server side** never client side
- Dev v Production
  - dev - runs on every request
  - prod - only runs at build time
- will not work if you need data **at request time**

limitations
- can only be limited from a page.
- cannot be exported from non-page files.

> static generation is not a good idea if you cannot pre-render pages ahead of user's request.
>
> try static generation

#### fetching data at request time

> server side rendering

use `getServerSideProps`

- called at request time
- the paremer (`context`) contains request parameter
- only if you need to pre-render page where data fetch at request time.

#### client side rendering

- statically render parts of the page that do not require external data
- when page load, fetch external data using js and populate remaining parts.
- good for dashboards

#### SWR

- react hook for data fetching data on client side
- handles caching, revalidation, focus tracking, refetching on interval ...

> [swr](https://swr.vercel.app/)

#### recap

use different rendering style for different pages

- static rendering - basic page, fetch data on build 
- server-side rendering - fetch data on request
- client-side rednering - private data on request

---

## dynamic routes

Objectives
- statically generate pages using dynamic routes with `getStaticPaths`
- fetch data for each blogspot
- render markdown with `remark`
- pretty print date strings
- link page with dynamic routes

### path depending on external data

- same as last part, use `getStaticProps` to gerate dynamic urls

TODO
- make path `posts/<id>` where `id` is the name of the markdown file under the top `posts` directory
- steps overview
  1. create page `[id].js` under `page/posts/` (includes the `[]` for dynamic rendering)
  2. use `getStaticPaths` in this page to get list of possible ids
  3. use `getStaticProps` to fetch the content for the blog page

### render markdown

using `remark`

### dynamic route tips

- works the same if fetching data from an api
- `getStaticPath` works at build time

fallback
- remember this is also returned in `getStaticPath`
- if `false`, any path not returned by `getStaticPath` results in a 404
- if `true`
  - path returned will be rendered into html at build time
  - path not generated at build time will result in 404
  - next serve a fallback version of the page
- if `blocking` new path with will be server-side rendered with `getStaticProps` and cached for future request

catch-all routes
- `pages/posts/[...id].js` will also match `posts/a/b`, `posts/a/b/c`
- for this option `getStaticPath` must return an id of array
- and `params.id` will be an array in `getStaticProps`

router
- checkout `useRouter` hook from `next/router`

custom 404 pages
- create `pages/404.js`

## API routes

next allow theh creation of API endpoints as nodejs serverless function

Objectives
- how to create api routes
- some information

### creating api

- you can create function inside `pages/api`
- pages file does not alway have to be a react component

### api details

- do not fetch api route from `getStaticProps` or `getStaticPath`
- either write the server sided code directly here or call a function
  - only runs serverside and never client side
  - not included in the blundler

USECASE: handle form input
- create a form ono page and `POST` using the serverless API route that sends directly to database
- API route code is **not included** in the bundler so you can safely write server side code

[PREVIEW MODE](https://nextjs.org/docs/advanced-features/preview-mode)

- static generation is good when pages fetch data from a headless CMS
- not ideal for draft writing when you want to preview while writing
- you need next to render at **request time** instead of build time

> save deployment for later

--- 
## misc

avaliable in the help page

- [documentation](https://nextjs.org/docs)
- [learn](https://nextjs.org/learn/basics/create-nextjs-app)
- [examples](https://github.com/vercel/next.js/tree/master/examples)
- [deploy](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app)