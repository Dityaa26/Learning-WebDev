// Callback function

function morning(name){
    return `Good morning ${name}`
}

function afternoon(name) {
  return `Good afternoon ${name}`;
}

function greet(name, cbf){
    const myName = 'Aditya'
    console.log(`${cbf(name)}, my name is ${myName}`)
}

greet('abhinav', morning)
greet('aakash', afternoon)