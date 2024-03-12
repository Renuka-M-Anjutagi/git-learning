/* Write a code to get the input in the given format and print the output in the given format

Input Description:
To take an integer value

Output Description:
Print the integer value

Sample Input :
2
Sample Output :
2

*/

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

   var a =userInput[0];
 //var b = userInput[1];

 
  console.log(a);
 // console.log(b);

  //end-here
});

var res = function(arr,n)
{
   if(n == null || n == 0)
   {
      return arr[0];
   }else{

      for( var i = 0 ; i<= n.length;i++)
      {
          return arr[i];
      }
   }
}
console.log(res[12,13,24,15]);