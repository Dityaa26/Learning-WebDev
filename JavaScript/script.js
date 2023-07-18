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
