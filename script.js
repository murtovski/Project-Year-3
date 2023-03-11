let APIkey = "5def9735af5f4d35802153342230603";

//http://api.weatherapi.com/v1/forecast.json?key=5def9735af5f4d35802153342230603&q=London&days=7&aqi=no&alerts=no

// Get user's current location
navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude.toFixed(2);
    const longitude = position.coords.longitude.toFixed(2);

 // Call weather API with latitude and longitude
 fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${latitude},${longitude}&days=2&aqi=no&alerts=no`)
 .then(response => response.json())
 .then(data => {
    // Access weather data and do something with it
    console.log(data);
    const hourlyData = data.forecast.forecastday[0].hour; // hourly data for current day
    const now = new Date();
    let nextRainfallTime = null;
    
    for (let i = 0; i < hourlyData.length; i++) {
        const hourData = hourlyData[i];
        const time = new Date(hourData.time);
  
        if (hourData.chance_of_rain > 40 && time > now) {
          nextRainfallTime = time;
          break;
        }
    }

    const options = {
        hour: 'numeric',
        hour12: true
      };

      const timeString = nextRainfallTime.toLocaleTimeString('en-US', options);

    if (nextRainfallTime) {
        console.log(`Next rainfall at: ${timeString}`);
        getID("rain-input").innerHTML = timeString;
      } else {
        console.log("No rainfall expected in the next 24 hours.");
        getID("rain-input").innerHTML = "No Rain Forecast";
      }
 })
 .catch(error => console.error(error));
}, error => console.error(error));

const now = new Date();

const day = now.getDate();
//const month = now.getMonth();
const month = now.toLocaleString('default', { month: 'short' });
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();

const sec = 1000*100;
const minute = sec*60;

getID("date").innerHTML = `${hour} ${min} | ${month} ${day} ${year}`;

setInterval(function(){
    getID("date").innerHTML = `${hour} ${min} | ${month} ${day} ${year}`;
}, minute);



function getID(id) {
    return document.getElementById(id);
  }
  
function getClass(className) {
    return document.getElementsByClassName(className);
  }
  