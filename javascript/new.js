

var request = new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");

request.send();


request.onload = function (){
var res = JSON.parse(request.response)
for(var i =0; i< res.length;i++)
    {
        console.log(res[i].id,res[i].name,res[i].email);
    }
}