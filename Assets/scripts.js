//let apiKey = "7fee86a490b6cb5d1e5a78e521dbeb22";
let searchText = document.getElementById('textInput')
let searchDiv = document.querySelector('#btn')


function searchCity(){

    searchDiv.addEventListener('click', function(event){
      // prevent page from refreshing

      event.preventDefault();

    // get value from input element
     let searchedCity = searchText.value;
   
   

        if (isNaN(searchedCity)) {

        getWeather(searchedCity);
      console.log(searchedCity);
    }
    
   })

}
searchCity();

// 2. function to fetch API

function getWeather(searchedCity) {
    let apiURL =
      `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=imperial&appid=7fee86a490b6cb5d1e5a78e521dbeb22`;

      // make a get request to url
      fetch(apiURL).then(function(response){
        
        if (response.ok) {
        console.log(response);
        response.json().then(function(data) {

     

          // console.log(temp.main[0].id.temp);
            //displayWeather(data, city);
         });
         } 
        }
      );
  }



//2. when search is clicked it pulls weather api


//3. function to display weather information which includes making current current templates update

