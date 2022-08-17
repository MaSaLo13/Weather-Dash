//weatherdboard = API key name
var city = document.querySelector('.search-input').value;
var searchBtn = document.querySelector('.search-btn');
var apiKey = "d643534191603c995f211a0eaffc23c6";

//URL https://api.openweathermap.org/data/2.5/onecall? + city + &units=imperial&exclude=hourly,minutely,alerts&appid= + apiKey
// weathUrl original "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial&appid=d643534191603c995f211a0eaffc23c6";
// another url http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey
// another2 url "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

//click event to built url
function searchClick(event) {
    event.preventDefault();
    var city = document.querySelector('.search-input').value;
    console.log(city)
    // build first url request
  var weathUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&exclude=hourly,minutely,alerts&appid=" + apiKey;
  var fiveWeath = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&exclude=minutely,hourly&list.dt=12:00:00&appid=" + apiKey;
 
    weatherQuery(weathUrl);
    weatherQuery2(fiveWeath);
};


// get results
function weatherQuery(weathUrl) {
  fetch(weathUrl, {
      method: 'GET',
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&exclude=hourly,minutely,alerts&appid=" + apiKey,
  })

      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
        drawWeather(data);
        console.log(data)
      })
};


// displays data for current days weather
function drawWeather(data) {
	// document.getElementById('description').innerHTML = data.weather[0].description;
  // document.getElementById('icon').innerHTML = data.weather[0].icon;
	document.getElementById('location').innerHTML = data.name;
  document.getElementById('temp').innerHTML = 'Temp: ' + data.main.temp + '&deg;F';
  document.getElementById('wind').innerHTML = 'Wind: ' + data.wind.speed + ' MPH';
  document.getElementById('humid').innerHTML = 'Humidity: ' + data.main.humidity + '%';
};


searchBtn.addEventListener('click', searchClick);

//const city = document.querySelector('.search-input')
//const btnSearchEl = document.getElementById('btnSearch')
// enter key, didn't work? 
if (city) {
city.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    searchBtn.click(searchClick)
  }
})};


// 5 days 
// "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial"*/


function weatherQuery2(fiveWeath) {
  //fetch with built URL to return recipe info
  fetch(fiveWeath, {
      method: 'GET',
      url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&&exclude=minutely,hourly&list.dt=12:00:00&appid=" + apiKey, 
  })

      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
        fiveWeather(data);
        console.log(data);
      })
};

//displays data for 5 day forcast at 12 pm 
function fiveWeather(data) {
	document.getElementById('date1').innerHTML = data.list[1].dt_txt;
  document.getElementById('temp1').innerHTML = 'Temp: ' + data.list[1].main.temp + '&deg;F';
  document.getElementById('wind1').innerHTML = 'Wind: ' + data.list[1].wind.speed + ' MPH';
  document.getElementById('humid1').innerHTML = 'Humidity: ' + data.list[1].main.humidity + '%';
  // day 2
  document.getElementById('date2').innerHTML = data.list[9].dt_txt;
  document.getElementById('temp2').innerHTML = 'Temp: ' + data.list[9].main.temp + '&deg;F';
  document.getElementById('wind2').innerHTML = 'Wind: ' + data.list[9].wind.speed + ' MPH';
  document.getElementById('humid2').innerHTML = 'Humidity: ' + data.list[9].main.humidity + '%';
  // day 3
  document.getElementById('date3').innerHTML = data.list[17].dt_txt;
  document.getElementById('temp3').innerHTML = 'Temp: ' + data.list[17].main.temp + '&deg;F';
  document.getElementById('wind3').innerHTML = 'Wind: ' + data.list[17].wind.speed + ' MPH';
  document.getElementById('humid3').innerHTML = 'Humidity: ' + data.list[17].main.humidity + '%';
  //day 4
  document.getElementById('date4').innerHTML = data.list[25].dt_txt;
  document.getElementById('temp4').innerHTML = 'Temp: ' + data.list[25].main.temp + '&deg;F';
  document.getElementById('wind4').innerHTML = 'Wind: ' + data.list[25].wind.speed + ' MPH';
  document.getElementById('humid4').innerHTML = 'Humidity: ' + data.list[25].main.humidity + '%';
  // day 5
  document.getElementById('date5').innerHTML = data.list[33].dt_txt;
  document.getElementById('temp5').innerHTML = 'Temp: ' + data.list[33].main.temp + '&deg;F';
  document.getElementById('wind5').innerHTML = 'Wind: ' + data.list[33].wind.speed + ' MPH';
  document.getElementById('humid5').innerHTML = 'Humidity: ' + data.list[33].main.humidity + '%';
};

// recent searches

/*function recentSearches() {
  //gets array stored in favorites
  var retrievedSearches = localStorage.getItem("favorites");
  // If array is not empty run codeblock, parse array, slice the number of items we want, add it to HTML 
  if (retrievedSearches != null) {
   var newFavs = JSON.parse(localStorage.getItem("favorites"));
   var testFavorites = newFavs.slice(0, 5)
   document.getElementById("recents").innerHTML = testFavorites
   console.log(testFavorites);
  }
}

searchBtn.addEventListener('click', recentSearches);*/