# Setup

## Statuc HTML File

Firstly, this in an ncommon way to setup React by importing scripts straight to the `html`

> The actual code is in [here](./staticfile/index.html)

so the loadded library includes

- **React** base react API
- **React DOM** add DOM specific methods
- **Bable** js compiler that allows the use of `ES6+` in old browsers

The app entry point is thhe `root` *div* element (named by convention). Also the `type="text/babel"` script type, mandatory for using **Babel**

Lets first start create the first **React Component** called `App`

```js
class App extends React.Component {
    // code
}
```

add `render()`, the only **required** method in a class component to reder DOM nodes

```js
class App extends React.Component {
    render(){
        return()
    }
}
```

in `return` were adding a simple HTML element, This is called `JSX`

```js
class App extends React.Component {
    render(){
        return <h1>Hello World</h1>
    }
}
```

Finally were using the *React DOM* `render()` to render the `App` class into the `root` div of the HTML

```js
ReactDom.render(<App/>, document.getElementById('root'))
```

`h1` should be rendered in the DOM when `index.html` is launched in the browser

---

## Create React App

In this part, we use the [Create React App](), a preconfigured environment.
It will create a live development server, uses `Webpack` to automatically compile `React`, `JSX` and `ES6`, auto-prefix css files and uses `ESLint` to test and warn about mistakes in code

To set up `create-react-app` run in the terminal

```shell
npx create-react-app react-tutorial
```
then move to the created directory and start the projetct with
```shell
npm start
```
Once you run that, a new window will pop up at `localhost:3000` with your React App

We can start delete all files in the `/src` to create our own boilerplate file without bloat. Just keep `index.css` and `index.js`

for `index.css` use whatever library you want but the guide uses [primitive css](https://taniarascia.github.io/primitive/css/main.css)

in `index.js`, were importing `React`, `ReactDOM` and the css file
```js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
```

create the `App` component again, now also add an attribute to the div element

```js
class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> Hello </h1>
            </div>
        )
    }
}
```

---

## React Dev tools

Theres an extension `React Dev Tools for Chrome`

The app might seem simple element inspection, but the app gradually becomes more essential 

---

## JSX: Javascript + XML

with `JSX` we can write what looks like HTML, also we cab create, use our own XML like tags. This is what `JSX` looks like assinged to a var

```js
// jsx
const heading = <h1 className="site-heading">Hello</h1>
```

`JSX` is not mandatory for Ract. Under the hood its running `createElement` which takes the tag, object containing the properties, and choldren of the component and reder the same information.

Below code will have the same output as the `JSX` above

```js
// no jsx
const heading = React.createElement('h1', { classname: 'site-heading' }, 'Hello')
```

`JSX` is closer to javascript, theres a few key differencce to note while writing

- `className` s used insteam of `class` for adding `css` classes, as `class` is a reserved keyword in Javascript
- properties and methods in `JSX` are `camelCase` - `onclick` becomes `onClick`
- self closign tags(single tags) must end in a slash `<img />

javascript expressios can also be embedded inside `JSX` using curly braces, including vars, func and properties

```js
const name = 'Tania'
const heading = <h1> Hello {name} </h1>
```

`JSX` is easier to write/read than creating and appendin many elements in vanilla js

---

## Components

Almost everything in React consists of components, which can be *class components* or *simple components*

Most React apps have **many** small components, and everything loads into the main `App` component. 
Components also often get their own fle so
```js
// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDom.render(<App />, document.getElementById('root'))
```

We then create `App.js` and put the component in there
```js
// src.App.js
import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> Hey </h1>
            </div>
        )
    }
}

// export
export default App
```
we `export` the component as `App` and load it in `index.js`. Its not mandatory to seperate components into files, It`ll get messy if you dont as the application gets bigger

---

## Class Components

Letsa create another component to create a table. So Make `Table.js`

This component we created is a custom class component. We Capitalize Custom Components to Differentiate them from regular HTML elems.
We can then load Table in `App.js` with

```js
// src/App.js
import Table from './Table'
```

Then by loading it into the `render()` of `App`, we also changed the class of the outer container

```js
// src/App.js
render() {
    return (
        <div className="container">
            <Table />
        </div>
    )
}
```
---

## Simple Components

Another type of component is the `simple component` which is a function.
This component doesn't use `class` keyword.
Lets use `Table` previously and make *2 simple component*, Table Header and Table Body

Letts try  with ES6 arrow func

```js
// src/Table.js
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Jobs</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return(
        <tbody>
            <tr>
                <td>Charlie</td>
                <td>janitor</td>
            </tr>
            <tr>
                <td>Mac</td>
                <td>Bouncer</td>
            </tr>
            <tr>
                <td>Dee</td>
                <td>Actress</td>
            </tr>
        </tbody> 
    )
}
```

now `Table` file will look like this

```js
// src/Table.js
const TableHeader = () => {}
const TableBody = () => {}

class Table extends Component {
    render () {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}
```

> OK
>
> so class components must include `render()` and `return` can only return **one** parent element

---

## Props

So the `Table` component, but the data is hardcoded.
One of the big deals with React is how it handles data, and it does so with properties, refered as `prop``
Well focus on handling data with props

lets Remove all data from `TableBody` so:

```js
// src/Table.js
const TableBody = () => {
    return <tbody />
}
```

Then move all that data to an array og obj.
Like as if we were bringing in a JSON-based API.
We need to create the `arr` inside `render()`

```js
// src/App.js

class App extends Component {
    render () {
        const chars = [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ]

        return (
            <div className="container">
                <Table characterData={chars} />
            </div>
        )
    }
}
```

So new we will pass data through to the child component `Table` with properties.
lets call it `characterData`

```js
// src/App.js

return (
    <div className="container">
        <Table characterData={chars}>
    </div>
)
```

now that data is being passed to `Table`, we have to work on from the other side

```js
// src/Table.js

class Table extends Component {
    render () {
        const { characterData } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData}>
            </table>
        )
    }
}
```

if you open up React DevTools, inspect the `Table` component, you`ll see the array of data in the property.
The data stored here is known as the `virtual DOM`, which is a fast and efficient way of syncing data with the actual DOM

So now we'll use `ES6` property shorthand to create a var that contains `this.props.characterData`

```js
const { characterData } = this.props
```

since our `Table` component actually consists of two simmilar components, we'll pass it through the `TableBody`, once again through props

```js
// src/Table.js
class Table extends Component {
    render() {
        const { characterData } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData}>
            </table>
        )
    }
}
```

So now `TableBody` takes no params and returns a single tag
We'll pass the props through as a parameter, and [map through the array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
This map will be contained in the `rows` variable, which is returned as expression

```js
// src/Table.js
const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
}

```

So in the view, everything will be now loaded.

You notice, ther added a key index to each table row.
You should always use [keys](https://reactjs.org/docs/lists-and-keys.html#keys) when making a list in react, they help identify each list item.

Next, we'll learn how to use `State` to have further control over handling data in React

---

## Slate

Now, character data is stored in an array in a variable, and passing through as prop
So imagine if we want to be able to delete an item from array.
With props, we have **one way** data flow, but with state we can **update** private data from a component

**State** can be think of as any data that should be saved and modified without necessarily being added to a Database
`e.g` adding and removing items from a shopping cart before committing.

Lets start to create a `state` object.
The obj will contain *properties* for everything you want to store in the state. For us, its **characters**

```js
// src/App.js
class App extends Component {
    state = {
        characters: [],
    }
}
```

so the data is officially contained in the state.
Since we want to be able to remove a character from the table, we're going to create a `removeChar` method on the parent `App` class

To retrieve the state, we'll get `this.state.characters` using the same ES6 method as before.
To update the state, we'll use `this.setState()`, built in method to manifulate the state
We'll [filter the array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) based on `index` passed through, and return new array

> you must use `this.setState()` to modify the array. Simply applying a new value to `this.state.property` will not work


```js
// src/App.js
removeChar() = index => {
    const { characters } = this.state

    this.setState({
        characters: characters.filter((character, i) => {
            return i !== index
        }),
    })
}
```

`filter` does not mutate but rather creates a new array, and is a preferred method for modifying in JS
This particular method is testing an index v all the indicies in the array, and returning all bit the one that is passed through.

Now we have to pass that function through the component, and render a button next to each char that can invoke the function.
We'll pass the `removeChar()` function through as a prop to `Table`

```js
// src/App.js
render () {
    const { characters } = this.state

    return (
        <div className="container">
            <Table characterData={characters} removeChars={this.removeChars} />
        </div>
    )
}
```

Since we pass it down to `TableBody` from `Table`, we're going to have to pass it through again as a prop, just as the character data

```js
// src/Table.js
class Table extends Component {
    render() {
        const { characterData, removeChars } = this.props

        return (
            <table>
                <TableHeader /> 
                <TableBody characterData={characterData} removeCharacter={removeChars} />
            </table>
        )
    }
}
```

Heres where that index defined in the `removeChars()` method comes in.
In the `TableBody` component, we'll pass the **Key/Index** through as a param, so the filter Func knows which item to remove.
We'll create a button with an `onClick` and pass it through


```js
// src/Table.js
<tr keys={index}>
    <td>{row.name}</td>
    <td>{row.job}</td>
    <td>
        <button onClick={() => props.removeCharacter(index)}> Delete </button>
    </td>
</tr>
```

> the `onClick` function must pass through a function that returns the `removeCharacter()` method, otherwise it'll try to run automatically

---

## Submitting Form Data

Now we have data stored in `state`, and we can remove any item from the state.
What if we want to add new data?
In a real world, youre more likely to start with empty state and add to it, (to-do list, shopping cart)

Ok lets first remove the hard-coded data from `state.characters`

Lets create a `From` component in `Form.js`
We'll create a class component and within we'll use a `constructor()`, we need it to use `this` and to receive the `props` of the parent

We're going to set the initial state of the `Form` to be an object with some empty properties, and asssign that initial state to `this.state`


```js
// src/Form.js
import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            job: '',
        }
        this.state = this.initialState
    }
}
```

Our goal for this form will be to update the state of `Form` every time a field is changed in the form,
and when its submitted, all that data will pass to the `App` state, which will then update the `Table`

We'll first make the function that runs every time a change is made to an input.
The `event` will be passed through, and we'll set te sate of `Form` to have the name (`key`) and `value` of the input


```js
// src/Form.js
handleChange = event => {
    const { name, value } = event.target

    this.setState({
        [name]: value,
    })
}
```

lets get this working before moving on to submitting the `form`.
In the `render`, lets get out 2 properties from state, and assign them as values hat correspond to the proper form keys.
We'll run the `handleChange()` method as the `onChange` of the input, and finally we'll export the `Form` component


```js
// src/Form.js
render() {
    const { name, job } = this.state

    return (
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange} />
          <label>Job</label>
          <input
            type="text"
            name="job"
            value={job}
            onChange={this.handleChange} />
        </form>
    )
}

export default Form
```

in `App.js`, render the form below the table


```js
// src/App.js
return (
    <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />

        <Form />
    </div>
)
```

So going back to the app, you'll see a form without a submit button.
Update the field and you'll see local state of `Form` beign updated

The last step would be actually *submitting* the data and update the parent state
Create `handleSubmit()` on `App` that will update the state by taking existing `this.state.characters` and adding the new `character` params, using [ES6 spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)


```js
// src/App.js
handleSubmit = character => {
    this.setState({
        characters: [...this.state.characters, character]
    })
}
```

and pass that through as a parameter on `Form`

```js
// src/Form.js
<Form handleSubmit={this.handleSubmit}>
```

now in `Form`, create method `submitForm()` that will call that function, and pass the `Form` state through as the `character` parameter we defined earlier.
It wil also reset the state to the initial state, to clear form after submitting

```js
// src/Form.js
submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
}
```
Finally add a `submit` button.
We're using `onClick` instead of an `onSubmit` since we're not using the standard submit functionality.
The click will call the `submitForm` just made
```js
<input type="button" value="Submit" onClick={this.submitForm} />
```

---

## Pulling API Data

Common features of webapps is pulling data from APIs
Read this later - [How to connect to an API with js](https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/) - 

As a test, we can create an `Api.js` fle, create a new `App` in there.
A public TPI we can test with is the [Wikipedia API](https://en.wikipedia.org/w/api.php) with this [URL endpoint](https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*) for a `random*` search.
Its nice to have the **JSONView** browser ext

We will use [JS built-in Fetch](https://www.taniarascia.com/how-to-use-the-javascript-fetch-api-to-get-json-data/) to get data from the url endpoint and display it.
You can switch between the created app and this test file by just changing the URL in `index.js` - `import App from './Api`

OK, the new stuff in this is `componentDidMount()`, a react life cycle method.
**LifeCycle** is the order in which methods are called in React. **Mounting** refers to an item being inserted into DOM

When pulling API data, we want to use `componentDidMount`, because we want to make sure the component has rendered to the DOM before we bring in the data.
In below snippet, you'll see how data is bought in and displayed


```js
// src/Api.js
import React, {}
```

once you saved and run this file in the local server, you`ll see the API displayed in the DOM

---

## Building and Developing React App

Everything completed so far has been in a dev environment, We're been compiling, hot-reloading, and updating on the fly.
For **production**, we will want to have static files loading in - *none of the source code*.
We can do this by making a build and deploying it.

So just use `npm run build` in the cmd

This will create a `build` folder which contains your app (use github pages)

so exit out of the local env `C_d` so its not currently running.
First we will add a `homepage` field to `package.json`, that has the url we want the app to live on


```json
"homepage": "https://taniarascia.github.io/react-tutorial",
```
also add these two lines to `script

```json
"scripts": {
  // ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
Note in this project you';; add `gh-pages` to the `devDependencies`

```sh
npm install --save-dev gh-pages
```
then build/ deploy it



---

## Conclusion

