const object1 = {
    name: 'Person 1',
    age: 5
  };
      
  const object2 = {
    age: 5,
    name: 'Person 1'
  };
      
  if (JSON.stringify(object1) == JSON.stringify(object2))
    console.log("True");
else
    console.log("False");