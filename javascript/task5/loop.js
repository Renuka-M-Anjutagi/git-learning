
// ForEach Loop example

numbers = [1, 2, 3, 4, 5];
 
numbers.forEach((number, index) => {
    console.log('Index: ' + index +
        ', Value: ' + number);
});

// for Loop

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// with arrow function and callback

const students = ['John', 'Sara', 'Jack'];

students.forEach(element => {
  console.log(element);
});

// For OF Loop
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
// For In loop


const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}