# React Redux

## Set up?

### App

- set up a regular react app with `TodoApp` as the entry component renders in the header containing these *components*
  - `AddTodo` - input todo item and add to the list upn clicking "Add"
    - set state `onChange` input
    - **dispatch action** when clicked to add to store
  - `TodoList` - renders the list
    - renders content when `VisibilityFilter` is selected
  - `Todo` - renders a single todo item
    - can be crossed out to show completed
    - **dispatch** action to toggle completion `onClick`
  - `VisibilityFilters` - filter list ( all, completed, incomplete )
    - accept an `activeFilter` prop from parent to indicate what filter is selected. active filter rendered with an Underscore
    - dispatch `setFilter` action to update the selected filter
  - `constants` hold app data
  - `index` renders app to DOM
 
> have a look at the code template

### Redux store

- **store**
  - `todos` normalized **reducer** of todos. Contain a `byId` map of all todos and a `allId` contains a list of id
  - `visibilityFilters` - simple string `all`, `complete`, `incomplete`
- **action creators**
  - `addTodo` create action to add todo. Takes 1 string var `content` and return `ADD_TODO` action with `payload` containing a self-increment `id` and content
  - `toggleTodo` create action to toggle todo. takes `id` var and return `TOGGLE_TODO` with only `id`
  - `setFilter` create action to set the app's **filter**. Take `filter` var and return `SET_FILTER` action with `payload` containing the filter
- **reducers**
  - `todos` append `id` to `allID` field and sets the todo within its `byID` fiend when recieving th `TOGGLE_TODO` action
    - toggle `completed` field when receiving the `TOGGLE_TODO` action
  - `visibilityFilters` set it slice of the store to the new filter it recieved from `SET_FILTER` action payload
- **action type**
  - use `actionType.js` to hold constants of the action type
- **selectors**
  - `getTodoList` - return `allID` list from `todos` store
  - `getTodoById` - find todo in store given by id.
  - `getTodos` - slightly hard. takes all the `id` from `allid` find each todo in `by` id, return the final arrays
  - `getTodoByVisibilityFilter` - filter based on the filter

> what the hell is this

---

## Starting

### Providing store

- first lets make the `store` available to the app
- wrap the app with `<Provider />` api from redux

> double check with the React tool to see provider connection

### Connecting Component