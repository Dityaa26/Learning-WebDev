// Array Methods

// Filter
// Does return a new array
// Can manipulate the size of orginal array
// return based on condition

const people = [
  { name: "abc", age: 20, position: "developer" },
  { name: "pqr", age: 21, position: "designer" },
  { name: "lmn", age: 25, position: "manager" },
  { name: "xyz", age: 27, position: "boss" },
];

const youngPeople = people.filter(function(person){
  return person.age<=25; 
})

console.log(youngPeople)

const developers = people.filter((person) => {
  return person.position === 'developer'
})

console.log(developers)

const srDevelopers = people.filter((person) => {
  return person.position === "senior developer";
});

console.log(srDevelopers);