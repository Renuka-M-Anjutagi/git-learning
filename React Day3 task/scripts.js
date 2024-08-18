// Define the first object
let obj1 = {
    name: "John",
    age: 23,
    degree: "CS"
}

// Define the second object
let obj2 = {
    age: 23,
    degree: "Test"
}

// Define the function check
function check(obj1, obj2) {

    // Iterate the obj2 using for..in
    for (key in obj2) {

        // Check if both objects do 
        // not have the equal values
        // of same key
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true
}

// Call the function
console.log(check(obj1, obj2))
