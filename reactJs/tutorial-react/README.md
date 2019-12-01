# React Tutorial

This folder contain the notes and files regarding to the [React hands-on tutorial](https://reactjs.org/tutorial/tutorial.html)

## Before starting

Note, this is my notes on while going, therefore some section might be very brief or skipped.
This tutorial contains:

- **Setup** the starting point 
- **Overview** of the fundamentals
- **Completion** and common techniques of React development
- **Adding Time Travel** show deeper insight to strengths of React

This tutorial will show you how to build an interactive *Tic-Tac-Toe* game like [this](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)

## Setup

Meh, Either do it on *codepen* or locally

For locally just use the [create-react-app](https://github.com/facebook/create-react-app) tool chain from google again.

```sh
# you know how this work
# # npx
npx create-react-app appName
# # npm
npm init react-app appName
# # yarn
yarn create react-app appName

# start local server
cd appname
npm start
```

Delete everything in `src/` and use this code

- [`src/index.js`](https://codepen.io/gaearon/pen/oWWQNa?editors=0010)
- [`src/index.css`](https://codepen.io/gaearon/pen/oWWQNa?editors=0100)

## Overview

## The heck is React

React has a few different kinds of components let start with `React.Component` subclasses

```js
import React from 'react'

class ShoppingList extends React.Component {
    render () {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name} </h1>
                <ul>
                    <li> Insta </li>
                    <li> Steam </li>
                </ul>
            </div>
        )
    }
} 

// example use; <ShoppingList name="mark">
```

So here `ShoppingList` is a *React Component Class* or *React Component type*.
A component takes in parameter `props` and returns a hierarchy of views to display via the `render` method

`render()` returns a description of what you want to see on the screen.
React takes the description and display the result. so `render` returns a **React element**, which is a lightweight description of what to render.
Most *React Dev* use `JSX` to make these structure easier to write.
The `<div />` syntax is transformed at build time to `React.createElement('div')`

```js
//  same as above return method
//  Format:     JSX 
return React.createElement('div', {className: 'shopping-list'},
    React.createElement('h1', /* h1 children*/),
    React.createElement('ul', /* ul children */)
);
```

`createElement()` is described more here in the [API ref](https://reactjs.org/docs/react-api.html#createelement)

OK so **JSX**.
you can put any JS expressions within braces inside JSX. Each React Element is a JS object that you can store in a variable or pass around in the program.

`ShoppingList` component above only renders built-in DOM components (`<div />` and `<li />`)
But you can compose and render custom React Components.
We can refer to the while shopping list by writing `<ShoppingList />`
Each component is *encapsulated* and can operate independently; This let you build complex `UI` from simple components

### Inspecting starter code

Le start building

So inspecting `index.js` there should present 3 React *Component*: `Square`, `Board` and `Game`

`Square` renders a single `<button>` and the `Board` renders 9 squares
`Game` renders a board with placeholder values
And currently present **no interactive** Components

### Passing Data Through Props

To get started, lets try passing some data from `Board` to `Square`

`Board`'s `renderSquare()`, change the code to pass a prop `value` to the square

```js
// board
class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />
    }
}
```

Change `Square`'s `render` method

```js
// square
render() {
    return(
        <button className="square">
            {this.props.value}
        </button>
    )
}
```

Thats basically passing a `prop` from the parent `Board` to the child `Square` component

### Making an Interactive Component

Lets fill the square with an `"X"` when clicked.
So change the button tag that's returned from the `Square` component `render` to this

```js
// Square
render () {
    return (
        <button className="Square" onClick={() => alert('click')}>
            {this.props.value}
        </button>
    )
}
```

Next Step, we want `Square` to *"remember"* that it got clicked, and fill it with an *"X* mark.
To *"remember"* things, component use **state**

React Components can have state by setting `this.state` in their constructors.
`this.state` should be considered as `private` to a React component that it's defined in.
Let's store the current value of the `Square` in `this.state` and change it when the Square is clicked

So lets add that constructor to the class to init the state

```js
// square
constructor(props) {
    super (props)
    this.state = {
        value: null
    }
}
```

> in [JS classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) you need to always call super when defining the const of a subclass
> All react component classes that have a `constructor` should start with a `super(props)` call

Lets change the **Square**'s `render()` to display he curent state's value when clicked

- replace `this.props.value` with `this.state.value` inside the `<button>` tag
- replace `onClick={}` event handler with `onClick={() => this.setState({value: 'X'})}`
- put `className` and `onClick` props on separate lines for better readability

### Dev Tools

both `Chrome` and `Firefox` should have their own React Dev Tool browser extension

---

## Completion

