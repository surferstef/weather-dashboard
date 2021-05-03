// document.querySelector()

var user = "stefhall"; // userId for Basic Auth
var pass = "weatherMan!"; // password for BasicAuth
var weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=dcab40352f865022e0386569521a6d1a";  
var request = new XMLHttpRequest(); 
var locationSearchEl = document.querySelector("#searchForLocation");
var locationInputEl = document.querySelector("#locationSearchBar");
//var locationBtn = document.

var formSubmitHandler = function(event) {
    event.preventDefault();
    var cityName = locationInputEl.value.trim(); 
    if (cityName) {
        response(cityName);
        locationInputEl.value = "";
    } else {
        alert("Please enter a City Name");
    }
    console.log(event);
  };


locationSearchEl.addEventListener("submit", formSubmitHandler);


var response = fetch(weatherUrl).then(function(response) {
    if (response.ok) {
        response.json().then(function(data) {        
            console.log(data);
     });
    }
    else {
        alert("Request failed!");
    }
});



  

   
