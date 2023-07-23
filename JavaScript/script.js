// Array Methods

// const number = [0, 1, 2, 3, 4]

// for(let i=0; i<number.length; i++){
//   console.log(number[i])
// }

// forEach (does not return new array)

const people = [
  { name: "abc", age: 20, position: "developer" },
  { name: "pqr", age: 21, position: "designer" },
  { name: "xyz", age: 27, position: "boss" },
];

function showPerson(person){
  console.log(person.position.toUpperCase())
}

// people.forEach(showPerson)

people.forEach(function(person){
  console.log(person.name.toUpperCase()) // Anonymous function
})