const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/bubz/git/note/note_web/learn/gatsby/gatsby_tut/tutorial-part-four/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/bubz/git/note/note_web/learn/gatsby/gatsby_tut/tutorial-part-four/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/bubz/git/note/note_web/learn/gatsby/gatsby_tut/tutorial-part-four/src/pages/index.js")))
}

