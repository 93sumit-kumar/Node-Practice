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
let evenArr = arr.filter((number) => number % 2 == 0);
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


## find unique and duplicate value from an array

```node

let arr = [1, 4, 3, 5, 3, 2, 4, 8, 3, 4, 2, 1];
let arrSort = arr.sort();
let uniqueArr = [];
let duplicateVal = [];
let arrLen = arr.length;
for (let i = 0; i < arrLen; i++) {
   if (uniqueArr.indexOf(arr[i]) === -1) {
      uniqueArr.push(arr[i]);
   } else {
      duplicateVal.push(arr[i]);
   }
}
console.log('Unique Arr: ', uniqueArr);
console.log('duplicate Arr: ', duplicateVal);
console.log('array sort: ', arrSort);

// OUTPUT:
// Unique Arr:  [ 1, 2, 3, 4, 5, 8 ]
// duplicate Arr:  [ 1, 2, 3, 3, 4, 4 ]
// array sort:  [
//  1, 1, 2, 2, 3,
//  3, 3, 4, 4, 4,
//  5, 8
// ]

```
