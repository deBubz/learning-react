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

To Complete the game, we need to alternate placing "X" and "O" on the board, and deternimint the winner

### Lifting State up

Currently, each `Square` component maintains the game's state.
To check for winner, we'll maintain the value of the8 9 squares in one location

We may thing `Board` should ask each `Square` for their state.
Although this is possible, its *discouraged* because code will be difficult to understand, prone to bugs and hard to refactor.
**Best Approach** is to store the game's state in `Board` instead of in each `Square`.
`Board` can tell each `Square` what to display by passing a `prop`, just as when a number is passed to each `Square`

**To Collect Data** from multiple children, or to have 2 child components communicate with each other.
You need to **declare the shared state** in the parent component instead.
*Parent* component can pass the state back down to the *children* using `props`.
This keeps the child components in sync with each other and with the parent component

Lifting the state into a parent component is common React components are refactored. *Le do it*

Add a `constructor` to the `Board` and set its initial state to contain an array of 9 nulls corresponding to the 9 `Squares`

```js
class Board extends Component {
    constructor (props) {
        this.state = {
            squares: Array(9).fill(null),
        }
    }

    renderSquare(i) {
        return <Square value={i} />
    }
}
```

When the `Board` is eventually filled, `this.state.squares` array will look something kile this

```js
[
    'o' ,null   ,'x',
    'x' ,'x'    ,'o'
    'o' ,null   ,null,
]
```

`Board`'s `renderSquare` is currently like this

```js
renderSquare(i) {
    return <Square value={i} />
}
```

Before, we pass *value prop down* from `Board` to show `0-8` in every `Square`
In a different step, we replaced the num with `X` *determined* by the Square's own state.
This is why `Square` currently ignores the `value` prop passed to it by the `Board`

**NOW** we'll use the priong passing mechanism again.
Modify the `Board` to instruct each `Square` about its current val (`x`, `o`, or `null`).
We already defined `square` array in the `Board`'s constructor, we will modify the `Board`'s `renderSquare` to read from it.

```js
// board
renderSquare(i) {
    return <Square value={this.state.squares[i]} />
}
```

Each `Square` will now recieve a `value` prop that will be either `x`, `o` and `null`

Next, Lets change what happens when a `Square` is clicked. `Board` component now maintains which squares are filled.
We need to create a way for the `Square` to update the `Board`'s state.
Since State is considered to be `private` to a component that defined it, we *cant* update the `Board`'s state directly from `Square`

Instead, we'll pass down a function from the `Board` to `Square`, and we'll have `Square` call that function when clicked
We'll change `renderSquare` in `Board`

```js
renderSquare(i) {
    return  (
        <Square
            value={this.state.Square[i]}
            onClick={() => this.handleClick(i)}>
    )
}
```

> We split the returned element into multiple lines for readability, and added parentheses so that JS doesn't insert `;` after `return` and break the code

OK Now we're passing down 2 props from `Board` to `Square`: the `value` and `onClick`.
`onClick()` prop is a function that `Square` can call when clicked.
Change these in `Square`

- replace `this.state.value` with `this.props.value` in *Square*'s `render`
- replace `this.setState()` with `this.props.onClick()` in *Square*'s `render`
- Delete the `constructor` from `Square` because `Square` no longer keeps track of the game's state

```js
return (
    <button 
        className="square"
        onClick={() => this.props.onClick()}>
            {this.props.value}
    </button>
)
```

When `Suare` is clicked, the `onClick` func in the `Board` is called.
This is how its achieved:

1. the `onClick` prop on the built-in DOM `<button>` component tells React to set up a click event listener
2. When clicked, React will call the `onClick` event handler defined in `Square`'s `render` method
3. this event handler calls `this.props.onClick()`. `Square`'s `onClick` prop was specified by the `Board`
4. Since `Board` passed `onClick={() => this.handleClick(i)}` to `Square`, and calls `this.handleClick(i)` when clicked
5. We haven't defined `handleClick()` so i'll crash

> **NOTE**
> 
> the DOM `<button>`'s `onClick` attr has a special meaning to React because it is a built-in component.
> For custom components(`Square`) 

Lets add `handleClick`

```js
// Board.js
handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X'
    this.setState({ squares: squares })
}
```

After the changes, the `Square` be filled when clicked, as usual.
However, the **state** is stored in the `Board` component instead of the individual `Square` components.
When `Board` state changes, `Square` component **re-renders** automatically
Keeping state of all squares inside `Board` component will allow it to *determine the **winner*** 

Since `Square` components no longer maintain state, `Square` components receives values from the `Board` Component and inform the `Board` when clicked
in React terms, the `Square` components are now **Controlled Components**

**NOTE** how `handleClick`, we call `.slice()` to **create a copy** of the `squares` array to modify instead of the existing array.
Explanation in next section

### Importance of immutability

There are generally two approaches to changing data.

- **directly** changing the data values (*mutation*)
- **replace** the data with a new copy

#### Change with mutation

```js
var player = {score:1, name:'Jeff'}
player.score = 2
//  direct change
```

#### Change without Mutation

```js
var player = {score: 1, name: 'jeff'}
var newPlayer = Object.assign({}, player, {score: 2})

// player is unchanged, newPlayer is {score: 2, name: 'Jeff'}
// or with obj spread syntax proposal, you can write
var newPlayerSpread = {...player, score: 2}
```

The result are the same. 
BUT by **not mutating** we gain several benefits:

- **Complex features became simple**
  - *Immutability* makes complex features much easier to implement.
  - Later we'll implement an *undo* feature.
  - The *undo* action most of the time is a common requirement in applcations
  - Avoiding direct data mutation lets us maintain previous versions of the game's history intact.
- **Detecting changes**
  - Detecting changes in mutable objects is difficult since they're directly modified.
  - Detection requires mutable objects to be compared to previous copies of itself and the entire object tree to be traversed.
  - Detecting changes in **immutable** obj is much easier. As there is clearly changes if the immutable obj being referenced is different from the previous one.
- **Determining when to re-render**
  - **Main benefit** of immutability is that it helps to build `pure componetnts`???
  - Immutable data can easily determine if changes have been made which helps to determine when a component requires re-rendering
  - something about `shouldComponentUpdate()` in building *pure components* [here](https://reactjs.org/docs/optimizing-performance.html#examples)

### Function Component

So now lets change `Square` to be a **functional component**

These are a way to write components that only contain a `render` method and **don't** have their own state.
Instead of defining a class that `extends React.Component`, we can write a func that takes `props` as input and returns what should be rendered.
Function components are less tedious to write than classes

```js
// rewrite square??

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
```

We also changed `this.props` to just `props`

> When changing the event button `onClick` event listener, note the use of parenthesis in `onClick={() => this.props.onClick()}`
> with `onClick={props.onClick}`

### Taking Turns

Now lets implement marking `o` on the board.

Lets first set `x` to be first by default via modifying the initial state in the `Board` constructor

```js
// Board.js
constructor (props) {
    super(props)
    this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
    }
}
```

Each time a player moves, `xIsNext` will be flipped to determine who goes next.
Then the state is saved. Update `handleClick` is `Board` as

```js
// Board.js
handleClick(i) {
    const squares = this.state.squares.slice()
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
    })
}
```

Lets also change `status` in `Board`'s `render` so that it displays who's turn is it

```js
// Board.js
render() {
    const status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O')
    
    return (
        // ...
    )
}
```

### Declaring a winner

OK lets now show who wins
Copy this to `Somewhere`

```js
function calcWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for ( let i = 0, i < lines.length; i++ ) {
        const [a, b, c] = lines[i]
        if (
            squares[a] && 
            squares[a] === squares[b] && 
            squares[a] === squares c
            )
        {
            return squares[a]
        }
    }

    return null;
}
```

Given an array of 9 squares, this function checks for a winner and return `x`, `o` or `null` as appropriate

We call `calcWinner(squares)` in `Board`'s `render` to check if anyone wins.
We can then display who won. Replace `status` declaration with this

```js
// Board.js
render() {
    const winner = calcWinner(this.state.squares)
    let status
    if (winner) {
        status = 'Winner: ' + winner
    }
    else {
        status = 'Next player: ' + (this.state.xIsNext ? 'x' : 'o')
    }

    return (
        // ...
    )
}
```

Also change `handleClick` to return early by ignoring a click if someone else won the game or if a square is filled.

```js
// Board.js
handleClick (i) {
    const squares = this.state.squares.slice()
    if (calcWinner(squares) || squares[i]) {
        return;
    }

    // ...
}
```

---

## Adding Time Travel

### Storing Move History

### Lifting State up, again

### Show past moves

### Picking key

### Implementing Time Travel

### Wrap-up







