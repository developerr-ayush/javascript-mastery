# JavaScript Notes

## Console

The console is a powerful tool used for practicing and running temporary code snippets. It follows the Read Evaluate Print Loop (REPL) concept, which means it reads the code, evaluates it, prints the result, and then repeats the process.

- **Input (i)**: The console reads the code you write.
- **Evaluation (ii)**: It calculates or computes the code.
- **Output (iii)**: It prints the result.
- **Loop (iv)**: The process is repeated for each input.

To clear the console window, you can press Ctrl + L.

## What is a Variable?

A variable is like a container that holds data. It is simply the name of a storage location used to store and manipulate values in a program.

## Data Types in JavaScript:

JavaScript is a dynamically typed language, meaning it infers data types based on the assigned values. Here are some fundamental data types:

1. **Number:**
   - Represents positive and negative values, including integers and floating-point numbers.
   - Example: `let age = 25; let pi = 3.14;`

2. **Boolean:**
   - Represents truth values: `true` or `false`.
   - Example: `let isAdult = true; let hasPermission = false;`

3. **String:**
   - Represents text or a sequence of characters.
   - Enclosed in either double or single quotes.
   - Example: `let firstName = "John"; let message = 'Hello, World!';`

4. **Undefined:**
   - Represents a variable that has been declared but not assigned a value.
   - Example: `let name;`

5. **Null:**
   - Represents the intentional absence of any object value.
   - Example: `let car = null;`

6. **BigInt:**
   - Used to represent integers larger than the maximum safe integer supported by the `Number` type.

7. **Symbol:**
   - Represents unique and immutable values, often used as keys in objects.

## Operations in JavaScript (Binary):

Binary operations involve using operators on two operands (variables).

- **Addition**: `sum = a + b`
- **Subtraction**: `diff = a - b`
- **Multiplication**: `mul = a * b`
- **Division**: `div = a / b`
- **Modulo (remainder)**: `mod = a % b` (e.g., `12 % 5 = 2` as the remainder is 2)
- **Exponentiation (power)**: `exp = a ** b` (e.g., `2 ** 3 = 8`)

## NaN in JavaScript

`NaN` stands for "Not-A-Number" and is a global property that represents a value that is not a valid number. For example, `0/0` results in `NaN` because it is not a valid numerical value.

## Operator Precedence

Operator precedence refers to the order in which operators are evaluated in an expression. It follows the BODMAS rule (Brackets, Orders, Division and Multiplication, Addition and Subtraction).

1. Parentheses `()`
2. Exponentiation `**`
3. Multiplication `*`, Division `/`, Modulo `%`
4. Addition `+`, Subtraction `-`

## Assignment Operators

Assignment operators are used to assign values to variables.

- **Increment**: `age += 1` or `age++` (e.g., `age = age + 1`)
- **Decrement**: `age -= 1` or `age--` (e.g., `age = age - 1`)

## Unary Operators

Unary operators work with a single operand.

- **Post-increment**: `age++` (first use the value, then increment)
- **Post-decrement**: `age--` (first use the value, then decrement)
- **Pre-increment**: `++age` (first increment, then use the value)
- **Pre-decrement**: `--age` (first decrement, then use the value)

## Identifier Rules

Identifiers are names given to variables and follow specific rules in JavaScript.

1. Names can contain letters, digits, underscores, and dollar signs (no spaces).
2. Names must begin with a letter, underscore, or dollar sign.
3. Names cannot begin with a number.
4. Names are case-sensitive (e.g., `y` and `Y` are different variables).
5. Reserved words (JavaScript keywords) cannot be used as identifiers.

## camelCase

In JavaScript, it's common to use camelCase for writing identifiers. For example:
- `let fullName`
- `let ageOfPerson`
- `let favoriteColor`

## TypeScript

TypeScript is a superset of JavaScript and is used in numerous companies. It is statically typed, meaning that once a variable is defined with a specific data type, it cannot be changed later. In contrast, JavaScript is dynamically typed, allowing variable data types to change.

## String Indices

Strings in JavaScript are indexed, meaning each letter is assigned a position. Indexing starts from 0, and we can access individual characters using their index.

Example:
```javascript
let name = 'TONY STARK';
name[0] // 'T'
name[4] // ' '
name.length // 10
name[name.length - 1] // 'K'
```

## Concatenation

Concatenation is the process of combining multiple strings together using the `+` operator.

Example:
```javascript
"Tony" + "Stark" // "Tonystark"

let firstName = 'Tony';
let lastName = "Stark";
let fullName = firstName + " " + lastName; // "Tony Stark"
```

## Template Literals

Template literals, denoted by backticks (\`), allow us to embed expressions within a string. The expressions are enclosed in `${}`.

Example:
```javascript
let a = 5;
let b = 10;
console.log(`Your pay is ${a + b} rupees.`);
// Output: Your pay is 15 rupees.
```

## Operators in JavaScript

JavaScript supports various types of operators for performing different operations.

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`, `**`
- **Unary Operators**: `++`, `--` (pre-increment, post-increment, pre-decrement, post-decrement)
- **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, etc.
- **Comparison Operators**: `<`, `<=`, `>`, `>=`, `==`, `!=`, `===`, `!==`
- **Logical Operators**: `&&` (AND), `||` (OR), `!` (NOT)

## Conditional Statements

Conditional statements allow us to make decisions based on certain conditions.

1. **if-else Statement:**

The `if` statement is used to execute a block of code if a specified condition is true. If the condition is false, the `else` block is executed (if provided).

Example:
```javascript
let age = 19;
if (age >= 19) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}
```

2. **else if Statement:**

The `else if` statement allows us to check multiple

 conditions in sequence.

Example:
```javascript
let marks = 63;
if (marks >= 90) {
    console.log("A grade");
} else if (marks >= 60) {
    console.log("B grade");
} else if (marks >= 40) {
    console.log("C grade");
} else {
    console.log("Fail");
}
```

3. **Nested if-else:**

Nested if-else allows us to have multiple levels of conditions.

Example:
```javascript
let number = 50;
if (number >= 50) {
    if (number === 50) {
        console.log("Number is equal to 50");
    } else {
        console.log("Number is greater than 50");
    }
} else {
    console.log("Number is less than 50");
}
```

## Truthy and Falsy Values

In JavaScript, every value can be treated as either truthy or falsy when used in a boolean context. Falsy values are considered false, while truthy values are considered true.

Falsy values: `false`, `0`, `-0`, `NaN`, `null`, `undefined`, `""` (empty string)

Everything else is considered truthy.

## Switch Statement

The `switch` statement is used when we have fixed values to compare.

Example:
```javascript
let color = "red";
switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Broken light");
}
```

## Alert and Prompts

1. **Alert**

`alert()` displays an alert message as a popup on the web page.

Example:
```javascript
alert("Something is wrong!");
```

2. **Prompt**

`prompt()` displays a dialog box that allows the user to enter some input.

Example:
```javascript
let firstName = prompt("Enter your name");
console.log(firstName);
```

Remember to use these statements wisely, as they can disrupt the user experience if overused or used at inappropriate times.

## String Methods

String methods are actions that can be performed on strings, and they return a new string or perform specific operations on the original string.

1. **`str.trim()`**
   - Trims leading and trailing white spaces from the string.
   - Returns a new string without leading or trailing white spaces.

Example:
```javascript
let str = "   Hello, World!   ";
let trimmedStr = str.trim();
console.log(trimmedStr); // Output: "Hello, World!"
```

2. **`str.toUpperCase()`**
   - Converts the string to uppercase.
   - Returns a new string with all characters in uppercase.

3. **`str.toLowerCase()`**
   - Converts the string to lowercase.
   - Returns a new string with all characters in lowercase.

**String Methods with Arguments:**

4. **`str.indexOf(substring)`**
   - Searches for a specified value (substring) in the string.
   - Returns the index of the first occurrence of the substring in the string.
   - If the substring is not found, it returns -1.

5. **`str.slice(start, end)`**
   - Extracts a portion of the string and returns it as a new string.
   - It takes two arguments: the starting index and the ending index (not inclusive).
   - If the ending index is not provided, it extracts till the end of the string.

6. **`str.replace(oldValue, newValue)`**
   - Searches for a specified value (oldValue) in the string and replaces it with another value (newValue).
   - Returns a new string with the specified value replaced.

7. **`str.repeat(count)`**
   - Creates and returns a new string with a specified number of copies of the original string.

## Arrays

Arrays are a type of data structure in JavaScript that can store multiple values in a single variable. They are a collection of elements, and each element in an array has a unique index starting from 0.

Example:
```javascript
let fruits = ["mango", "apple", "litchi"];
```

Arrays can hold different types of values, making them flexible and powerful.
```javascript
let info = ["Akhil", 23, 89.9];
```

Arrays are mutable, meaning you can change their elements after initialization.

Example:
```javascript
let fruits = ["mango", "apple", "litchi"];
fruits[0] = "banana";
```

## Array Methods

Arrays have many built-in methods that allow us to perform various operations on them.

Here are some commonly used Array methods:

- **push()**: Adds an element to the end of an array.
- **unshift()**: Adds elements to the beginning of an array.
- **pop()**: Removes the last element from an array and returns it.
- **shift()**: Removes the first element from an array and returns it.
- **indexOf()**: Returns the index of the first occurrence of a specified element in an array.
- **includes()**: Checks if an array includes a specific element and returns `true` or `false`.
- **concat()**: Merges two or more arrays to create a new array.
- **reverse()**: Reverses the order of elements in an array.
- **slice()**: Returns a shallow copy of a portion of an array.
- **splice()**: Modifies an array by adding or removing elements at a specified index.
- **sort()**: Sorts the elements of an array in place and returns the sorted array.

## Array References

Arrays are reference types in JavaScript, which means that when you create a new variable and assign it an array, the new variable holds a reference to the original array. Any changes made to the original array will be reflected in all references.

Example:
```javascript
let fruits = ["mango", "apple", "litchi"];
let copyFruits = fruits;
fruits[0] = "banana";
console.log(copyFruits); // Output: ["banana", "apple", "litchi"]
```

## Constant Arrays

You can make an array constant using the `const` keyword. It allows you to perform operations on the array but prevents you from reassigning a new array to the constant variable.

Example:
```javascript
const arr = [1, 2, 3, 4];
arr.push(5); // This is allowed
arr = [1, 2, 3, 4, 5]; // This is not allowed
```

## Nested Arrays

Nested arrays are arrays of arrays, also known as multidimensional arrays.

Example:
```javascript
let num = [[2, 4], [3, 6], [4, 8]];
```