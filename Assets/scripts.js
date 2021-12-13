//let apiKey = "7fee86a490b6cb5d1e5a78e521dbeb22";
let searchText = document.getElementById('textInput')
let searchDiv = document.querySelector('#btn')
let cities = [];


//1. when search is clicked it pulls weather api
function searchCity(){

    searchDiv.addEventListener('click', function(event){
      // prevent page from refreshing

      event.preventDefault();

    // get value from input element
     const searchedCity = searchText.value.trim();

        if (isNaN(searchedCity)){
          getWeather(searchedCity);
          //send city search to array
          cities.unshift({searchedCity});
          searchText.value = "";
    
          console.log(searchedCity);
      } else{
        alert("You must enter a city")
      }

    storage()

    })
    }
    searchCity();



//local storage
let storage = function(){
  localStorage.setItem("cities", JSON.stringify(cities))
}



// 2. function to fetch API

const getWeather = function(searchedCity) {
    let apiURL =
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&units=imperial&appid=7fee86a490b6cb5d1e5a78e521dbeb22`;

      // make a get request to url
      fetch(apiURL)
      .then(function(response){
        
        if (response.ok) {

        console.log(response);
        response.json().then(function(data){
          console.log(data.list[0].main.temp)
          

          //displayWeather(data, searchedCity);
        })
           }
          }
        )
      };
    




//3. function to display weather information which includes making current current templates update

  // let displayWeather = function(weather, theCity){
  //   let todaysDate = document.createElement("span")
  //   todaysDate.textContent=" (" mo
  // }
