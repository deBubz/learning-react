# [Context API](https://reactjs.org/docs/context.html#when-to-use-context)

> LETSA go throught the doc

in normal react apps, data is passed top-down (parent-> child) through props, can be messy

CONTEXT gives a way to share values between components without **passing props** through every levels

## When to use

- its designed to share "GLOBAL" data:
  - auth user
  - theme
  - language

## Before using context

- OK context is used when some data needs to be accesible by many components at different nesting level
- BECAREFUL it could make component reuse more difficult

> theres other ways of managing props but holy shit iam dum dum

## API

### `React.createContext`

```js
const MyContext = createContext(defaultValue);
```

Creacts context object. When react render a component subscribed to this Context object,
it reads the current content value from the closese matching **Provider** in tree

**defaultValue** arg is **ONLY** used when a component doesnt have a matching provider above in the tree.
(good for testing)

passing **undefined** **Provider** doenst cause consuming components to use **defaultValue**

### `Context.Provider`

```js
<MyContext.Provider value={/* some valeue */} />
```

every Context obj comes with Provider React **component** allowing 
consuming components to subscribe to **context change**

takes `value` props to be passed to consuming components
decendants of this **provider**.
- One provider can be connected to many **consumers**.
- probiders can be nested to **override** values deeper in the tree

All Provider decendants will **RE-RENDER** when the provider `value` prop changes

> not sunjected to `shouldComponentUpdate`

> ways changes are determined can causes some SHIT when passing object as `value`

### `Class.contextType`

```js
class MyClass extends React.Component {
    componentDidMount() {
        let value = this.context;
        /* perform side effect at mont using value of MyContext */
    }

    componentDidUpdate() {
        let value = this.context;
        /* ...hmm... */
    }

    componentWillMount() {
        let value = this.context;
        /* ...hmm... */
    }

    render() {
        let value = this.context;
        /* render stuff based on value of MyContext */
    }
}

MyClass.contextType = MyContext;
```

`contextType` prop on a class can be assined to a Context obj created be `React.createContext()`.
This lets you consume the nearest current value of that context with `this.context` (can be referenced in any lifecylce methods)

> Can only subscribe to a single context with this. [see consuming multi contexts](https://reactjs.org/docs/context.html#consuming-multiple-contexts)

### `Context.Consumer`

```js
<MyContext.Consumer>
    {value => /* render something */}
</MyContext.Consumer>
```

React component that **subscrivbe** to context changes.
This let you subscrive to context within a **function component**

Requires FUCNTIOn as a **child**.
Function recieves the current context value and returns a react node.
`value` is passed into the function will be **equal** to the `value` prop of the closes Provider for this context

IF theres no value, `defaultValue` from `createContext()` is then used

### `Context.displayName`

Context obj accepts `displayName` string property.

Used by **React Dev Tool** to determine what to display for the context

```js
const MyContext = React.createContext(/* default value */);
MyContext.displayName  = 'Display';

<MyContext.Provider />  // "Display.Provider" in devtool
<MyContext.Consumer />  // "Display.Consumser" in devtool
```

## Updating Context from a Nested COmpoentn

> Seems like i need this

To update context from a component that is nested somewhere deep in the Component treee.

YOu can pass a function down throught eh context to allow consumers to update the context. (sounds like changing state in child components)

**theme-context.js**
```js
/* make sure the shape of default value is passed to
createContext matches what Consumer expects */
export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
})
```

**theme-toggler-button.js**
```js
import { ThemeContext } from '../theme-context';

export default ThemeToggleButton = () => {
    return (
        <ThemeContext.Consumer>
            {
                ({theme, toggleTheme}) => {
                    <button
                        onClick={toggleTheme}
                        style={{backgroundColor: theme.background}}>
                        ToggleTheme
                    </button>
                }
            }
        </ThemeContext.Consumer>
    );
};
// hmmmmmmmmmmmmmmmmmmmmmm
// is this how to make a function a context consumer
```

**app.js**
```js
import {ThemeContext, themes} from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';
// the context and the button using the context

class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(st => {
                theme:
                    state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
            });
        };

        /* state also contains the updater function
        so it will be passed down into the context provider */
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        },
    };

    render() {
        // pass the eentire state into the provider
        return (
            <ThemeContext.Provider value={this.state}>
                <Content />
            </ThemeContext.Provider>
        );
    };

    function Content() {
        return (
            <><ThemeTogglerButton /></>
        )
    }
}

// no idea
```

> What the fuck