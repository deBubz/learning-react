# Re-Introduction? to Js

This section go through the contents [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

Unlike most languages, JS has no concept of I/O.
Its designed to run as a scripting language in a host environment(**browser**).
Its up to the host environment to provide mechanisms for communicating with the outside world.


## Overview

JS is a `multi-paradigm`, `dynamic` language with types, operators, standard built in obj, and methods.
JS supports OOP with obj prototypes, instead of classes ([prototypical inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) and [ES2015 classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)).
JS also support functional programming, because they are obj, functions maybe stored i variables and passed around like any other objects.

JS **Types**:

- `Number`
- `String`
- `Boolean`
- `Function`
- `Object`
  - `Function`
  - `Array`
  - `Date`
  - `RegExp`
- `Symbol` (new in ES2015)
- `null` and `undefined` are kind of strange?

There are also built in `Error` types, but lets keep things simple

---

## Numbers

In Js numbers are *64-bit doubles (format IEEE 753 values?)*.
There are no `integers` in JS so be careful when doing maths in JS

```js
let i = 0.1 + 0.2;
// i = 0.300000000004;
```

<!-- Something about 32 int bit -->

Standard [arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators) are supported including `+`, `-` `%` ...
There are also built-in object [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) to handle more advanced math functions/ constraints

```js
Maths.sin(3.6);
let circumference = 2 * Math.PO * r;
```

Convert `String` into `integer` using using [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt).
Takes 2 args which are the string and the *optional* number base (but should always provide).

```js
parseInt('123', 10) // 123
parseInt('012', 10) // 12
```

In **older browsers** string beginning with `0` are assumed to be **octal**, unless you're certain of the string format, you can get strange results on older ones

```js
parseInt('010');    // 8
parseIn('0x10');   // 16
```

`parseInt()` treats the first string as octal due to the leading `0`, and the second as a hex due to the leading `0x`.

```js
// convert binary into integer
parseInt('11', 2);  // 3
```

There's also `parseFloat()`, the only difference is its only uses base 10

```js
// can also uses unary + operator to convert values to nums
+ '42';     // 42
+ '010';    // 10
+ '0x10';   // 16
```

```js
// non numeric string returns "Not a Number"
parseInt('hey', 10);    // NaN
NaN + 5;                // NaN: NaN is bad
//  Test for NaN
isNaN(NaN)              // true
```
```js
// Infinity
1 / 0;                  // infinity
-1/ 0;                  // -infinity

// test for Infinity, -Infinity, NaN
isFinite(1/0);          // false
isFinite(-Infinity);    // false
isFinite(NaN);          // false
```

---

## Strings

Strings in JS are sequences of Unicode Chars (UTF-16 code units).
Each code unites is represented by a 16-bit num.
Each Unicode char is represented by either 1 or 2 code units

```js
// find length
'hello'.length;         // 5
'hello'.charAt(0);      // h
'hello, world'.replace('world', 'mars');    // "hello, mars"
'hello'.toUpperCase();  // HELLO
```

Thats just an intro with JS, strings also be used as [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).
More about strings [methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods)

---

## Other Types

JS distinguishes between `null` (deliberate non-value), and `undefined` (uninitialized variable, yet to be assigned variable)
Its possible to declare a var without assigning a value to it.
Its value will be `undefined`, also it is actually a *constant*

Also `boolean` values `true` and `false`.
Any other valye can be converted to a boolean

- **false**: `0`, empty strings, `NaN` `null` undefined
- **true** all other values are true

```js
Boolean('')     // false
Boolean(234)    // true
```

Other logical operators are normal `&&`, `||`, `!`

---

## Variables

new variables in JS are declared using `let`, `const`, `var`

`let` allows you to declare *block* lvl variables (only available from the block its enclosed in)

```js
let a;
let name = 'lel';

// letvar *not* here

for (let letvar = 0; letvar < 0; letvar++) {
    // letvar only here
}

// letvar *not* here
```

`const` allows you to declare **CONSTANTS**, the variable only available in the block its declared in

```js
const Pi = 3.14;    
Pi = 1;             // throws an error
```

`var` most common declarative keyword. Its was the only way to declare vars in JS
It does not have the block restriction `let` and `const` have.
`var` is available from the *function* its declared in.

**NOTE** in JS, blocks do not have scope, only function has a scope.
Note where `const`, `let`, `var` is available.

---

## Operators

JS numeric operators `+` `-` `*` `/` `%`.
Values assigned with `=`

If you add a string to number, everything is converted into string first, might be a bit trippy.
Hence adding an empty string `''` is a useful way to convert into strings

```js
'3' + 4 + 5;    // "345"
3 + 4 + '5';    // "75"
```

**Comparison** with `<` `>` `<=` `=>`
Equality is less straight forward, `==` performs type *coercion* if you give it different types.
Theres also `!=` and `!==`

```js
// ==
'123' == 123;       // true
1 == true;          // true
// ===
123 === '123';      // false
1 === true;         // false
```

JS also has [bitwise operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

---

## Control Structures

JS has similar sets of control structures to other languages in the `C` family

`if`, `else if`, `else`

```js
if(){
    // things
}   else if {
    // else if things
}   else {
    // else
}
```

`while` and `do` loops. basic loops duh

```js
// while
while(true) {
    // do this
}
// do
var input;
do {
    input = get_input();
}   while (inputIsNotValid(input))
```

`for` loop simple enuff
But theres also [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) and 
[`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

```js
// for
for (var i = 0; i < 5; i++){
    // run 5 times
}
// for of
for (let value of array) {
    // use value
}
// for in
for (let property in object) {
    // use object property
}
```

`||` and `&&` uses *short-circuit* logic.
Meaning whether the 2nd operand is executed is dependent on the first.
Useful to check for `null` objects before accessing their attributes:

```js
var name = o && o.getName();
```

or caching values (when falsy values are invalid)

```js
var name = cachedName || (cachedName = getName());
```

JS also has shorthand if statement (ternary operator)

```js
var allowed = (age > 18) ? 'yes' : 'no';
```

`switch` statement is pretty much the same.
If `break;` is not added, execution will "fall to the next level".
`default` case is optional.
*Comparison* takes place between switch and case through thee `===` operator.

```js
switch (action) {
    case 'a':   doA();          break;
    case 'b':   doB();          break;
    default:    doNothing();    break;    
}
```

---

## Objects

JS objects can be thought of as simple collections of name-value pairs, simmilat to

- Dictionaries in `py`
- Hashes in `pearl` and `rby`
- Hash tables in `C` and `c++`
- HashMaps in `java`
- Associative arrays in `php`

since everything (bare core types) in JS is an object.
Js program can naturally involves a great deal of hash table lookups. It's a good thing they're so fast.

The *"name"* part is a JS string, while the value can be any JS value (incl more objs).
This allows you to build data structures of arbitrary complexity.

2 basic ways to create an empty obj

```js
var obj = new Object();

var obj = {};
```

The 2nd method is called object *literal* syntax and is more convenient.
This syntax is also the core of `json` format and should be preferred at all time.

```js
// obj literal can be used to entirely innit an object
var obj = {
    name: 'carrot',
    isFor: 'Max',
    details: {
        color: 'orange',
        size: 12
    }
};
```

Attributes access can be chained together:

```js
obj.details.color;
obj['details']['size'];
```

### Obj Example

This example creates an object `prototype` (Person) and an instance of that prototype (you)

```js
// object prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// creating an object
var you = new Person('you', 24);

// accessing the object
// dot notation
you.name = 'me';
var name = you.name;        // me

// bracket notation
you['name'] = 'Simon';
var name = you['name'];     // Simon
// can use a variable to define a key
var user = promt('what is your key?');
obj[user] = promt('whats the value?');
// ???
```

**dot** and **bracket** notations are both semantically equivalent.
 




