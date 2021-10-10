# Node Practice with Array
## Create an array with generated 1 to 100 value

```node
// Generate 1 to 100 numbers
let arr = Array.from(Array(100 + 1).keys()).slice(1);
console.log('array: ', arr);

```

## Create an array to get only even numbers from 1 to 100

```node
// Get the Even numbers only
let evenArr = arr.fiilter((number) => number % 2 == 0);
console.log("Only Even Number: ", evenArr);

```

## Create an array to get the Square of all Even no from 1 to 100

```node
// Get the Square of all even no
let squareArr = evenArr.map((x) => x**2);
console.log("Square of Enev numbers: ", squareArr);

```

## Sum of all the Square value from above array

```node
// Get the Sum of Square of even no.
let squareSum = squareArr.reduce((a,b) => a+b);
console.log("Total Sum of even Square value: ", squareSum);

```
