//var weatherAPIKey = "f5e6bdcf1a910c89d1e7a7b079f45e02";
//var weatherAPIURL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

const app = {
    init: () => {
        app.getLocation;
        console.log(navigator.geolocation.getCurrentPosition(app.ftw, app.wtf));
    },
    fetchWeather: (ev) => {
        //use the values from latitude and longitude to fetch the weather
        let lat = app.ftw.lat;
        let lon = app.ftw.lon;
        let key = 'db633226c495019f85b5f155d8f51869';
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
    //fetch the weather
    fetch(url)
    .then((resp) => {
        //if not ok then throw an error
      if (!resp.ok) throw new Error(resp.statusText);
      //return the JSON file to extract information
      return resp.json();
    })
    //Pass data to the show weather function
    .then((data) => {
        app.showWeather(data);
      })
      //Attempt to catch any errors
      .catch(console.err);
  },
  getLocation: (ev) => {
    let opts = {
      enableHighAccuracy: true,
      timeout: 1000 * 10, //10 seconds
      maximumAge: 1000 * 60 * 5, //5 minutes
    };
    navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
  },
  ftw: (position) => {
    //got position
    let lat = position.coords.latitude.toFixed(2);
    let lon = position.coords.longitude.toFixed(2);
  },
  wtf: (err) => {
    //geolocation failed
    console.error(err);
  },
  showWeather: (resp) => {
    console.log(resp);
  }
}

app.init();

