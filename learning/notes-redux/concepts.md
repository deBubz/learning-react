# Reason for redux

- SPAs are getting complicated, theres a lot more **state** to be managed
  - States include server response, cached data, locally created data that has not yet been persisted to the server.
- UI state increasing in complexity. there are a lot more to manage:
  - route, selected tabs, spinners, pagination controls
- an attempt to give you more control of model **states**
- help with the new **requirements** common in front-end development.
  - handle optimistic update
  - server side rendering
  - fetch data before performing route transmissions

> A tool to handle a mix of 2 concepts that are `mutation` and `asynchronicity`

# Core concepts

ok so imagine the your app's state is a plain object, the state of your *TodoApp* might look like this

```js
{   // state object
    todos: [
        {
            text: 'Eat food',
            completed: true}, 
        {
            text: 'Exercise',
            completed: false
        }],
    visibilityFilter: 'SHOW_COMPLETED'
}
```

this object resembles a `model` except there are no setters. This so so different part of the code can't change the state arbitrarily.
Causing hard to replicate bugs

To change something in the state, you need to dispatch an **action**??
**Action** is a plain js object that describe what happens

```js
// action examples
{type: 'ADD_TODO', text: 'Go Swim'}
{type: 'TOGGLE_TODO', index: 1}
{type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL'}
```

Enforcing every change is described as an action let us have a clearer understanding of what happened in the app.
**Actions** are like breadcrumbs of what happened. 

To tie state and actions together, we write `reducers`, its just a **function** that takes `state` and `action` as arguments and returns the next state of the app.
Its a lot harder to write such functions in a big app, hence we break it to manage smaller parts of the state.

```js
// reducers
// {type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL'}
function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':    // {type: 'ADD_TODO', text: 'Go Swim'}
      return state.concat([{ text: action.text, completed: false }])
    case 'TOGGLE_TODO': // {type: 'TOGGLE_TODO', index: 1}
      return state.map((todo, index) =>
        action.index === index
          ? { text: todo.text, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}
```

Now we write another `reducer` that manages the complete state of our app by calling the 2 reducers for the corresponding state keys:

```js
function todoApp(state = {}, action) {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    }
}
```

Thats the basic, to better manage the state of your SPAs. 

This is yet to include any Redux APIs. It comes with a few utilities to facilitate this pattern.
The main idea is you **describe how your state is updated overtime** in response to action objects, 90% of the code you write is plain JS, with no use of Redux and its APIs

# Three Principles

3 main principles of redux

## 1 - **Single** source of truth

> the [state](https://redux.js.org/glossary#state) of your whole app is stored in an *object tree* within a single [**store**](https://redux.js.org/glossary#store)

this makes it easier to create universal app, as the state from your server can be *serialized* and *hydrated* into the client with no extra coding effort.
A **single state tree** makes it easier to debug/ inspect an application.
It also enables you to persist your app's state in development, for a faster development cycle.

Some functionality, which *were hard to impliment* ( undo/redo ) can suddenly become trivial to implement, if all your state is stored in a single tree.

```js
console.log(store.getState())

/* Prints
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }],
}
*/
```

## 2 - State is **read only**

> The only way to change state is to emit an `action`, an object describing what happened

This ensure ensure that **neither** the *views* nor the *network callbacks* will ever **write directly to the state**.
They will instead **express an intent** to change the state.
Because **all changes are centralized** and happen **one by one** in a strict order.

There are no subtle race condition to watchout for. As actions are just plain objects, they can be logged, serialized, stored and later replayed for *debugging* and *testing*

```js
// express intent to change
store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1
})

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})
```

## 3 - Changes are made with pure functions

> to specify how the state tree is transformed by actions, you write pure [reducers](https://redux.js.org/glossary#reducers)

`reducers` are pure function that takes the *previous state* and an *action* and *return the next state*.
**Remember to return the ew state objects**, instead of mutating the previous state.

Start with a single reducer, and as your app grow, split it off into smaller reducers that manages a specific part of the tree.

```js
// reducer
function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

//reducer
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}

//
import { combineReducers, createStore } from 'redux'
const reducer = combineReducers({ visibilityFilter, todos })
const store = createStore(reducer)
```

## Learning resources

Short on time so just do 3 from [here](https://redux.js.org/introduction/learning-resources)


















