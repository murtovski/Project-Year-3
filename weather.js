//let API = "http://api.weatherapi.com/v1/current.json?key=5def9735af5f4d35802153342230603 &q=Dublin&aqi=no";


const apiKey = "5def9735af5f4d35802153342230603"; // replace with your WeatherAPI API key
//const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat}, ${lon}`; // replace "London" with the location you want to get the weather for

// Get user's current location
navigator.geolocation.getCurrentPosition(position => {
  const latitude = position.coords.latitude.toFixed(2);
  const longitude = position.coords.longitude.toFixed(2);

  // Call weather API with latitude and longitude
  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`)
    .then(response => response.json())
    .then(data => {
      // Access weather data and do something with it
      console.log(data);
      setData(data);
    })
    .catch(error => console.error(error));
}, error => console.error(error));

function setData(data){
  getID("location").innerHTML = `${data.location.name}, ${data.location.country}`;
  getID("desc").innerHTML = `${data.current.condition.text}`;
  const icon = getID("icon-desc");
  icon.src = "https:" + data.current.condition.icon;
  getID("humidity-data").innerHTML = `${data.current.humidity}%`
  getID("wind-data").innerHTML = `${data.current.gust_mph} mph`
  getID("direction-data").innerHTML = `${data.current.wind_degree}&deg`
  temp = Math.round(data.current.temp_c);
  getID("temperature-txt").innerHTML = `${temp}&degC`
}

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
  