# ES6 References

notes based on this [](https://www.taniarascia.com/es6-syntax-and-feature-overview/)

## Lengend

- variables `x`
- Object `obj`
- Array `arr`
- Function `func`
- Params, methods `a`, `b`, `c`
- String `str`

## Table of Contents

- [ES6 References](#es6-references)
  - [Lengend](#lengend)
  - [Table of Contents](#table-of-contents)
  - [vars and const feature comparison](#vars-and-const-feature-comparison)
  - [Variable declaration](#variable-declaration)
  - [Const declaration](#const-declaration)
  - [Arrow function](#arrow-function)
  - [Template literals](#template-literals)
  - [Multi-line Strings](#multi-line-strings)
  - [Implicit returns](#implicit-returns)
  - [Key/ Props shorthand](#key-props-shorthand)
  - [Method Definition Shorthand](#method-definition-shorthand)
  - [Destructuring (object matchmaking)](#destructuring-object-matchmaking)
  - [Array Iteration (looping)](#array-iteration-looping)
  - [Default parameters](#default-parameters)
  - [Spread syntax](#spread-syntax)
  - [Classes/ constructor functions](#classes-constructor-functions)
  - [Inheritance](#inheritance)
  - [Modules - export/import](#modules---exportimport)
  - [Promises/ Callback](#promises-callback)

## vars and const feature comparison

Look up her Digital ocean resource

## Variable declaration

`ES6` introduced `let`, which allows for blocks-scoped var (cant be hoisted/redeclared)

```js
//  es5
var x = 0

// es6
let x = 0
```

## Const declaration

`es6` intro `const`, cannot be redeclared/ reassigned, it is not immutable

```js
const CONST_IDENTIFYER = 0
```

## Arrow function

expresses syntax is a shorter way of creating function expression. Arrow function do **not** have their own `this`, do **not** have prototypes, cannot be uses as *consructors**, and should not be uused as obj **methods**

```js
// es5
function func(a, b, c) {}       // declaration
var func = function(a,b,c) {}   // expression
```
```js
// es6
let func = a => {}              // parens optional with one params
let func = (a, b, c) => {}      // parens require with multiple params
```

## Template literals

Expression can be embedded in template literal strings. **Interpolation**

```js
// es6
let str = 'Release Date: ${data}`
```

## Multi-line Strings

```es6
// es6
let str =   'This text
            is on
            multi line'
```

## Implicit returns

`return` keyword is implied and can be omitied if using arrow function without a block body

```js
// es5
function func(a, b) {
    return a + b
}

// es6
let func = (a, b) => a + b  // curlies must be ommited
```

## Key/ Props shorthand

short notation for assigning properties to variables of the same name

```js
// es5
var obj = {
    a: a,
    b: b,
}

// es6
let obj = {
    a,
    b,
}
```

## Method Definition Shorthand

`function` keyword can be omitted when assigning methids on an object

```js
// es5
var obj = {
    a: function(c,d) {},
    b: function(e,f) {},
}

// es6
let obj = {
    a(c, d) {},
    b(e, f) {},
}

// call method
obj.a()
```

## Destructuring (object matchmaking)

use curly brackets to assign properties of an object to their own variable

```js
var obj = {a: 1, b: 2}

// es5
var a = obj.a
var b = obj.b

// es6
let {a, b} = obj
```

## Array Iteration (looping)

a more consise syntax has been introduced for iteration through an arrays and other iterable object

```js
var arr = ['a', 'b', 'c']

// es5
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// es6
for (let i of arr) {
    console.log(i)
}
```

## Default parameters

functions can be initialized with default params, which will be used only if an arguement is not invoked through the function

```js
// es5
var func = function (a, b) {
    // default value for b
    b = b === undefined ? 2 : b
    return a + b
}

// es6
let func (a, b = 2) => {
    return a + b
}

func(10)        // return 12
func(10, 5)     // return 15
```

## Spread syntax

can be used to expand an array

```js
// es5
let arr1 = [1, 2, 3]
let arr2 = ['a', 'b', 'c']
let arr3 = [...arr1, arr2...]

console.log(arr3)           // [1, 2, 3, "a", "b", "c"]

// es6
// can be used for function arguements
let arr1= [1, 2, 3]
let func = (a, b, c) => a + b + c

console.log(func(...arr1))  // 6
```

## Classes/ constructor functions

`ES6` introduces the `class` syntax on top of the prototype-based constructor function

```js
// es5
function Func(a, b) {
    this.a = a
    this.b = b
}

Func.prototype.getSum = function() {
    return this.a + this.bs
}

var x = new Func(3,4)
```
```js
// es6
class Func {
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    getSum() {
        return this.a + this.b
    }
}

let x = new Fumc(3, 4)
x.getSum()      // 7
```

## Inheritance

`extends` keyword create a subclass

```js
// es5
function Inheritance(a, b, c) {
    Func.call(this, a, b)

    this.c = c
}

Inheritance.prototype = Object.create(Func.prototype)
Inheritance.prototype.getProduct = function() {
    return this.a * this.b * this.c
}

var y = new Inheritance(3, 4, 5)
```
```js
// es6
class Inheritance extends Func {
    constructor (a, b, c) {
        super(a, b)

        this.c = c
    }

    getProducts() {
        return this.a * this.b * this.c
    }
}

let y = new Inheritance (3, 4, 5)
y.getProduct()  // 60
```

## Modules - export/import

modules can be created to export and import code between files

```html
<script src="export.js"> </script>
<script type="module" src="import.js"> </script>
```
```js
// export.js
let func a => a + a
let obj = {}
let x = 0

export { func, obj, x }
```
```js
// import.js
import { func, obj, x } from './export.js'
console.log(func(3), obj, x)
```

## Promises/ Callback

Promises represent the completion of an asyncronous function. They can be used as analternative to chaining function


```js
// es5 callback
function doSecond() {
    console.log('Do second.')
}

function doFirst(callback) {
    setTimeout(function() {
        console.log('Do first.')
        callback()
    }, 500)
}

doFirst(doSecond)
```
```js
// es6 promise
let doSecond = () => {
    console.log('Do second')
}

let doFirst = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Do first')
        resolve()
    }, 500)
})

doFirst.then(doSecond)
```

example below using `XMLHttpRequest`, for demonstrative purpose only (`Fetch API` would be the proper mordern API to use)

```js
// es5 callback
function makeRequest(method, url, callback) {
    var request = new XMLHttpRequest()
    
    request.open(method, url)
    request.onload = function() {
        callback(null, request.response)
    }
    request.onerror = function() {
        callback(request.response)
    }
    request.send()
}

makeRequest('GET', 'https://url.json', function(err, data) {
    if (err) {
        throw new Error(err)
    } else {
        console.log(data)
    }
})
```
```js
// es6 promise
function makeRequest(method, url) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest()

        request.open(method, url)
        request.onload = resolve
        request.onerror = reject
        request.send()
    })
}

makeRequest('GET', 'https://url.json')
    .then( event => {
        console.log(event.target.response)
    })
    .catch(err => {
        throw new Error(err)
    })
```
