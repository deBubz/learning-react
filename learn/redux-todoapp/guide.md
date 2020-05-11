# React Redux

## Set up?

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