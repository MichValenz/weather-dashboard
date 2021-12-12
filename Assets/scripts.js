let apiKey = "7fee86a490b6cb5d1e5a78e521dbeb22";
let searchTextEL = document.getElementById('textInput')
let searchDiv = document.querySelector('control')

console.log("see this")

function searchCity(){

    searchDiv.addEventListener('submit', function(event){
      // prevent page from refreshing
     
      event.preventDefault();

    // get value from input element
     let searchedCity = searchTextEL.value;
   
     console.log(searchedCity)

        if (isNaN(searchedCity)) {

        getWeather(searchedCity);
      
    }
    
   })

}

let getWeather = function(searchedCity) {
    let apiURL = (
      "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity +
      "&units=imperial" +
      "&APPID=" +
      apiKey
    )

      // make a get request to url
      fetch(apiURL)
      .then(function(response){

        if (response.ok){
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
                displayWeather(data, city);
            });

        }
        else {
                alert("Error: " + response.statusText);
            }
        });
    };



// 1. function to fetch API


//2. when search is clicked it pulls weather api


//3. function to display weather information which includes making current current templates update
searchCity();
