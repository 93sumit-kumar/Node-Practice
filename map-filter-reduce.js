var users = [
   { firstname: 'Virat', lastname: 'Kohli', age: 32 },
   { firstname: 'Shikhar', lastname: 'Dhawan', age: 32 },
   { firstname: 'Prithvi', lastname: 'Shaw', age: 20 },
   { firstname: 'Rishabh', lastname: 'Pant', age: 22 },
   { firstname: 'Shubhman', lastname: 'Gill', age: 20 }
];
var arr = [1, 2, 5, 2, 5, 4, 3];
// output : return unique value
var uq = arr.filter((x, pos) => {
   return arr.indexOf(x) == pos;
});
console.log('unique:', uq);

//output = concate firsename + lastname as fullname
// ['virat kohli', 'shikhar dhawan',....]
var fullName = users.map((x) => x.firstname + ' ' + x.lastname);
console.log('FullName: ', fullName);

// output = all firstname whose age in more than 25
// ['virat','shikhar']
var fName = users.filter((x) => x.age > 25).map((x) => x.firstname);
console.log('fName: ', fName);

// with reduce find firstname
var firstName = users.reduce((acc, curr) => {
   if (curr.age > 25) {
      acc.firstname = curr.firstname;
   }
   return acc;
}, {});
console.log('First: ', firstName);

//output = same age no of count {32:2,20:2,22:1}
var ageCount = users.reduce((acc, curr) => {
   if (acc[curr.age]) {
      acc[curr.age] = ++acc[curr.age];
   } else {
      acc[curr.age] = 1;
   }
   return acc;
}, {});
console.log('age: ', ageCount);
