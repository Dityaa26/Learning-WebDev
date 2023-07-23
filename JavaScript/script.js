// Array Methods

// Map
// Does return a new array
// Does not change size of orginal array
// uses values from original array when making new one

const people = [
  { name: "abc", age: 20, position: "developer" },
  { name: "pqr", age: 21, position: "designer" },
  { name: "xyz", age: 27, position: "boss" },
];

const ages = people.map(function(person){
  return person.age
})

const newPeople = people.map(function(person){
  return {
    firstName:person.name.toUpperCase(),
    newAge: person.age+1,
  }
})

const names = people.map(function(person){
  return `<h1>${person.name}</h1>`
})

document.body.innerHTML = names.join('')

console.log(name)