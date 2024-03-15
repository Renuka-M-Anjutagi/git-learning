// Do the below programs in arrow functions.
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array


// Print odd numbers in an array
var temp = 0;
 var foo = (arr) =>{
  for(var i =0;i<arr.length;i++){

        temp = temp +arr[i];
  }
  return temp;
}
var arr = [12,13,14,15,16]
console.log(foo(arr));



  //Arrow function Convert all the strings to title caps in a string array

  var resstr = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    str = str.join(' ');
     console.log(str);
  }
resstr("hello how are you")


///   Sum of all numbers in an array

var temp = 0;
 var foo = (arr) =>{
  for(var i =0;i<arr.length;i++){

        temp = temp +arr[i];
  }
  return temp;
}
var arr = [1,2,3,4,5]
console.log(foo(arr));



//  Return all the prime numbers in an array

var res = [];
 var prime = (arr) =>{
  for(var i =0;i<arr.length;i++){
  var count = 0;
        for(var j =1; j <=arr[i];j++)
        {
          if(arr[i] % j ===0)
          {
           count++;
          }
        }
        if(count == 2)
        {
          res.push(arr[i]);
        }
  }
  return res;
}
var arr = [12,13,14,15,16]
console.log(prime(arr));


// Return all the palindromes in an array


var polidrom = (a) => {
    var res="";
    var ans="";
    for(var i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(var j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    console.log(ans);
 
}

var arr = [1,11,343,411,575,600,7887,80108,999,11];
(polidrom(arr));


