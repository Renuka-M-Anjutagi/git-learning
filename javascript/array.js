//Do the below programs in anonymous function & IIFE
//Print odd numbers in an array
////Convert all the strings to title caps in a string array
//Sum of all numbers in an array
//Return all the prime numbers in an array
//Return all the palindromes in an array
//Return median of two sorted arrays of the same size.
//Remove duplicates from an array
//Rotate an array by k times

var res = function(arr){
    for(var i =0;i<arr.length;i++){
      if(arr[i] % 2 !== 0)
       {
          console.log(arr[i]);
       }
       
    }
   }
     res([7,6,5,4,4,5,6,7,8,2,2,3,3])

     //anonymous 

     var resstr =function (str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        } 
        str = str.join(' ');
         console.log(str);
      }
resstr("hello how are you")

//  IIFE 


(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    str = str.join(' ');
    
    console.log(str);
  })("MY NAME IN REHDI");

// //anonymous  Sum of all numbers in an array

var sum = 0;
var res = function(arr){
    for(var i =0;i<arr.length;i++){
     
          sum = sum + arr[i];
          
    }
     console.log(sum);
   }
     res([1,3,2])

// IIFE 

var sum = 0;
(function(arr){
    for(var i =0;i<arr.length;i++){
     
          //arr = arr[i];
          sum = sum + arr[i];
         
       
       
    }
     console.log(sum);
   })([1,3,2])

// //anonymous  Return all the prime numbers in an array





// write a javascript function to remove specific element from the array
// The array is var arr = [2,5,9,6,7,8,4]
// Remove 6 from the array
// Output: [2,5,9,7,8,4]


var arr = [2,5,9,6,7,8,4];

arr.splice(arr.indexOf(6),1);

console.log(arr);
