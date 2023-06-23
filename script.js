function getWeather(event) {
    // Check if the Enter key was pressed (key code 13)
    if (event.keyCode === 13) {
      var city = document.getElementById("cityInput").value;
  
      // Make an API call to retrieve weather data
      // Replace API_KEY with your actual API key
      var apiKey = "4ab9c2a7a93b4c30b0d74041232306";
      var url = "https://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + city;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          // Extract relevant weather information from the API response
          var location = data.location.name + ", " + data.location.country;
          var temperature = data.current.temp_c + "°C";
          var condition = data.current.condition.text;
  
          // Display the weather information
          var resultElement = document.getElementById("result");
          resultElement.innerHTML = "Location: " + location + "<br>"
                                    + "Temperature: " + temperature + "<br>"
                                    + "Condition: " + condition;
        })
        .catch(error => {
          console.log(error);
          var resultElement = document.getElementById("result");
          resultElement.innerHTML = "Error retrieving weather data.";
        });
    }
  }
  