# some vid source

[codingwithchandler](https://youtu.be/wwl6iH5D0LU)

- `useEffect` called everytime the component rerenders, can be configured to replicate the lifecycles functions
- fb reccomend to use functional consistently

[THIS](https://youtu.be/a6Bjtr7JatM?t=701)

holy shit it shows what you can do to `useEffect` to replicate the lifecycle

```js
// componentDidMount
useEffect(() => {} , []);
// pass an empty array after
```

```js
// componentWillUnmount, when it is detatchewd
useEffect(() => {
    return () => {
        // code go here
        // run on unmount
    };
});
```

shouldComponentUpdate - > React.memo

```js
// component did mount
    useEffect(() => {
        setInterval(() => {
            changeTime()
        }, 1000)
    })
```

maybe scour the react docs for more info