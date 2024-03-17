

var request = new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

request.send();


request.onload = function (){
    var res = JSON.parse(request.response)
    console.log(res)
     for(var i =0; i< res.length;i++)
     {
         console.log(res);
            console.log(res[i].name.common,res[i].region,res[i].subregion,res[0].population,res[i].flags);
     
            console.log("currencies : ", res[i].currencies);
        }
  var ele_asia = res.filter((ele) => ele.region === 'Asia')
    console.log(ele_asia);

    

    var res_data =ele_asia .map ((ele) => ele.name.common)
    console.log(res_data);


     var ele_parim = res.filter((ele) => ele.area >'100000')
     console.log(ele_parim);

     var res_data = ele_parim.map((ele) => ele.name.common)
     console.log(res_data);

    var population = res.reduce((acc,cv) => acc+ cv.population , 0)
    console.log(population);


}


///   


