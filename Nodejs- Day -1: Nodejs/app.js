var express = require("express");
var app = express();
fs = require('fs'),
url = require('url');

app.listen(3000, () => {
 console.log("Server running on port 3000");

});


app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

   app.use('/public', express.static(__dirname + '/public'));  
   app.use(express.static(__dirname + '/public')); 
   
   app.post('/receive', function(request, respond) {
       var body = '';
       var write = fs.createWriteStream('output.txt');
       filePath = __dirname + '/public/'+ write;
       filePath = __dirname + '/public/date-time.txt';
       //var fs = require('fs');
       
       request.on('data', function(data) {
           body += data;
       });
   
       request.on('end', function (){
           fs.appendFile(filePath, body, function() {
               respond.end();
           });
       });
   });
   
   