
//question 3
//use rest countries api url and print all countries names,regions,subregion and populations

//1st step : create a XHR object
var request = new XMLHttpRequest();
//2nd step: API URL
//.open method
//2 parameters
request.open("GET","https://restcountries.com/v2/all");
//3rd step : establishing the bridge
request.send();
//4th step : once the data sucessfully received from server
//onload is an event
//when we use :  once the data / server is showing 200 sataus code
request.onload=function(){
    var result=JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(" Name Countries - " + result[i].name);
        console.log("Region - " + result[i].region);
        console.log("Subregion -  " + result[i].subregion); 
        console.log("Population - " + result[i].population);    

}
}