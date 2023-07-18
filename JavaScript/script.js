// JavaScript Objects

const person = {
  firstName: "abc",
  lastName: "pqr",
  age: 22,
  skills: ["git", "github", "aws", "sql"],
  language: ["javascript", "cpp", "python"],
  detail: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

person.detail();

// Accessing object items

console.log(person.age)
person.firstName = "ABC"
console.log(person)
console.log(person.skills)
console.log(person.skills[2]);
