# debugging in react

## understanding error msg

- find line number
- basic

> not really useful

## logical error debug using devtools and sourcemaps

- you can access your code in the browser in the **sources** map
- use the built in chrome debugger
- react dev tools

## error boundaries 

- can implicitly throw an error incase
- using an error boundary wrapper component to catch/ throw errors
- should use this in every component
- use where it make sensce to handle incase there is an error

```js
import React from 'react';

class ErrBoundary extends React.COmponent {
    state = {
        hasErr: false,
        errMsg: "",
    }

    // if an error is thrown update state
    componentDidCatch = (err, info) => {
        this.setState({hasError: true, errMsg: error})
    }

    render() {
        if(this.state.hasError) {
            return <h1> {this.state.errMsg} </h1>
        } else {
            return this.props.children;
        }
    }
}
```

- although this will throw an error in the development mode
- this will return jsx with a custom error handling mesage in live mode