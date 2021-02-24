# styling react components

## setting class names dynamically 

- can combine `className` using plain js
    ```jsx
    const classes = ["classA", "classB"].join(" ");

    // jsx
    <p className={classes}> </p>
    ```
- can also use conditional classes like variables as shown in p4

## adding and using Radium

- inline style css cannot use hover (ok material ui pog)
- class show to use `Radium`
  - very similar to how material ui handles it
    ```js
    const style = {
        border: "1px solid red",
        ":hoover": {
            border: "5px solid blue"
        }
    }

    // export
    export default Radium(App);
    ```

## styled components

`npm i --save styled-components`

- styled components are pretty cool
- this packaged up the css put into its own class then add it self into the header
- not inline
- can use plain js for conditional styling

## css modules

- talks about styling overlap when using plain css