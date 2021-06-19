# fundamentals

## set up environment

- get `node`, `npm`
- install npm `gatsby-cli`, `gatsby`

### create gatsby site

- create new with `gatsby new [project] [starting server]`
- cd in the project and start dev mode `gatsby develop`

> with the tute, the skeleton they used is more clean than what a plain 
> `gatsby new` would create

---

## basic building blocks

- alright functional react components with jsx
- the tut shows basic jsx nothing new
- somethings i havent noticed
  - for SPAs component they are built to be self contained and tightly coupled within the same file
  - that explains css messing stuff up at some part

### building pages

- any component defined in `src/pages/*.js` becomes a page
- lets try with `about.js`
- use `Link` from `"gatsby"`
- aight so best not to touch `pages` if its not a page
- linking is done using gatsby's own component
  - > looks similar to react router dom

### deploy

- look at gatsby cloud - later
- install setup `surge`
- run `gatsby build`
- run `surge public/` on the build file

--- 

## styling

> restart with gatsby tut part 2

### creating a global style sheet

- lets create `styles/global.css`
- create `gatsby-browser.js` outside of `src` and import the stylesheet
- https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/

> more on [global styling](https://www.gatsbyjs.com/docs/how-to/styling/global-css/)

### component scoped css

- using `css module` to containerize your css in its separated component
- prevent name clashing as the bundler will set a unique class name on compile

OK 
- About is using the style from Container

```
STUFF on css module

create a css file with file name
  componentName.module.css
import * as varName from module.css

use in className by calling varName.class
```

### style a component with css modules

- create user component and style it
- create `./src/pages/about-css-modules.module.css`
- create `./gatsby-browser.js`
- import that to About


### other css options

- css in js
- css in js with gatsby (Emotion, styled components)
- typography.js
- sass
- jss
- stylus
- postcss

---

## nested layout component

> using tut 03

- learn about using plugins, creating *layout* component, reusaable components


### using plugins

- very cool theres a plugins library
- install and config `gatsby-plugin-typography`
- edit `gatsby-config.js` to use the new plugin
  ```js
  module.exports = {
    plugins: [
      {
        resolve: `gatsby-plugin-typography`,
        options: { pathToConfigModule: `src/utils/typography` },
      }
    ]
  }
  ```

### creating layout component

- simple enough
- basically a reusable react component

### adding site title

- oh just an extra header

### navigation links

- yep more component stuff

----

## Data 

> OH BOY [GRAPHQL](https://www.howtographql.com/)

- look at the data layer, Gatsby enable content built from Markdown, WordPress Headless CMS,...

> is this like regular data binding in REACT

### unstructured data v GraphQL

- GraphQL is not needed to get data, use the node `createPages` to pull unstructured data
- [gatsby without graphql](https://www.gatsbyjs.com/docs/how-to/querying-data/using-gatsby-without-graphql/)

when to use either

- unstructured would be more ideal in smaller projects
- for more complex projects, you could check PluginLibrary to check if there is a plugin for your data source.
  - OR [CREATE YOUR OWN](https://www.gatsbyjs.com/docs/creating-plugins/)

### VIA GRAPHQL

- graphql is a query language, works similar like sql but with its own syntax

> we using example 4

- again use `typographyjs` and trying `emotion` css
- so first setup a `layout` page similar to part 3


### First GraphQL Query

- so youll eventually reuse common bits of data > site title
- what happens when you want to change that.
- Youd then need to search and edit each titles in each page components
- its better to store title in one location and reference that in other titles

the place to store this common data is `siteMetaData` object stored in `gatsby-config.js`

### use page query

- now to query the title using a [page query](https://www.gatsbyjs.com/docs/how-to/querying-data/page-query/)
- ok so theres `staticQuery` allowing non page components to query data, lets use the hook `useStaticQuery`