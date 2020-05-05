# Filtering

> based on this [blog post](https://blog.soshace.com/filtering-sorting-and-pagination-advanced-filtering-with-react-and-redux/)
>
> note due to time constraints, i`ll only be doing the filtering part

## Redux wtf

Its a state management library. Basic tennets

- single central state
- immutable readonly state, new states are created with changes
- changes made with **pure functions**
  - functions that always return the same result when using the same args

foundations behind Redux are **actions** and **reducers**

## Setting up redux

```shell
npx create-react-app <appname> --template redux
cd <appname>
npm i bulma react-redux -S
```

> set up is a pain, follow the doc a little bit but heres [the repo](https://github.com/Bradleykingz/react-filters-pagination)

## Filter

