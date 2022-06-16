//weatherdboard = API key name
var city = document.querySelector('.search-input').value;
var searchBtn = document.querySelector('.search-btn');
var apiKey = "d643534191603c995f211a0eaffc23c6";
//var city;

//var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

/*const weathApi = {
  method: 'GET',
  headers: {
      'weathAPI-Key': 'd643534191603c995f211a0eaffc23c6',
      'weath-Host': '/https://api.openweathermap.org/data/2.5/weather?q=' + searchBarInput + '&appid=' + apiKey,
  }
};*/

//click event to built url??
function searchClick(event) {
    event.preventDefault();
    var city = document.querySelector('.search-input').value;
    console.log(city)
    // build first url request
  var weathUrl = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";

 
    // Call fetch functions
    weatherQuery(weathUrl)
   // recipeQuery(recipeString);
    //nutritionQuery(nutritionString);
    //console.log(location)
    //window.location.href = 'results-page.html';
    // return variables to use in fetch functions
    //return nutritionString, recipeString;
    //return weathUrl;
};

/*const weathUrl = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
fetch(weathUrl, {
  method: "GET",
  headers: {
    "X-Auth-Token": "d643534191603c995f211a0eaffc23c6"
  }
})
*/
// shows results? 
function weatherQuery(weathUrl) {
  //fetch with built URL to return recipe info
  fetch(weathUrl, {
      method: 'GET',
      headers: {
           'apiKey': "d643534191603c995f211a0eaffc23c6",
           'weather-host': "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q="  + city + "&appid=" + apiKey + "&units=imperial",
  
      }
  })

      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
        drawWeather(data);
        console.log(data)
          /*var resultArray = data;
          displayResult(resultArray);
          return resultArray;*/
      })
      window.onload = function() {
        weatherBalloon( 6167865 );
}};


// help display?
function drawWeather( d ) {
	//var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	//var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	//document.getElementById('temp').innerHTML = farenheit + '&deg;';
	document.getElementById('location').innerHTML = d.name;
  document.getElementById('temp').innerHTML = d.main.temp;
};

//need
/*function weatherBalloon( city ) {
	//var key = '{yourkey}';
	fetch('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?id=' + city + '&appid=' + apiKey + "&units=imperial")  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data); // Call drawWeather
	})
	.catch(function() {
		// catch any errors
	});
};*/
/*for (var i = 0; i < data.length; i++) {
  console.log(data[i].name);*/

searchBtn.addEventListener('click', searchClick);

//const city = document.querySelector('.search-input')
//const btnSearchEl = document.getElementById('btnSearch')
if (city) {
city.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    searchBtn.click(searchClick)
  }
})};


// 5 days 
// "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial"*/
