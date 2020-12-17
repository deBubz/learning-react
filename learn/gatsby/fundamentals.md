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

- alright functional react components wiff jsx
- the tut shows basic jsx nothing new
- somethings i havent noticed
  - for SPAs component they are built to be self contained and tightly coupled within the same file
  - that explains css messing stuff up at some part

### building pages

- any component defined in `src/pages/*.js` becomes a page
- lets try with `about.js`
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

- using `css module` to containerize your css in its seperated component
- prevent name clashing

OK 
- About is using the style from Container

### style a component with css modules

- create user component and style it
- create `src/pages/about-css-modules.module.css`
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
