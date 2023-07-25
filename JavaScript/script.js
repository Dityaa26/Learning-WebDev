// Array Methods

// Reduce
// iterates, callback function
// reduces to a single value - number, array ,object
// 1 parameter ('acc') - total of all calculation
// 2 parameter ('curr) - current iteration/ value

const people = [
  { id: 1, name: "abc", age: 20, position: "developer", salary: 200 },
  { id: 2, name: "pqr", age: 21, position: "designer", salary: 300 },
  { id: 3, name: "lmn", age: 25, position: "manager", salary: 400 },
  { id: 4, name: "xyz", age: 27, position: "boss", salary: 500 },
];

const total = people.reduce((acc, curr) => {
  console.log(`total ${acc}`);
  console.log(`current money: ${curr.salary}`);
  acc += curr.salary
  return acc;
}, 0);

console.log(total)