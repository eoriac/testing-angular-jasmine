class WeatherService{    
    getWeatherInfo(cityName){
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=APP_ID`);
    }
}