# deep dive into components

## better project structure

another project folder structure

```
- src
|- components
|- containers
|- assets
```

## Splitting App into components

- class used for state management (statefull)
- functional for stateless
- basically its just seperating stuff into smaller reusable components

> why not everything functional

## stateless v stateful

- you know this

## functional v class

- Class
  - extends components
  - lifecycle hooks
  - important to understand `this` keyword
> use when need to manage state/lifecycle
- Function
  - function taking in props
  - hooks

> wrong use hooks in every function

## component lifecycle

> only in class based components

- dont setState in `componentDidMount` unless its in a promise `then` block
- to prevent re-render

> ney use useEffect()