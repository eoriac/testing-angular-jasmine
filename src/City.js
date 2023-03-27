class City{    

    constructor(cityName, weatherService){
        this.cityName = cityName || '';
        this.weatherService = weatherService || undefined;
    }

    getWeatherInfo(){
        if(this.weatherService){
            console.log(this.weatherService.getWeatherInfo(this.cityName));
        }
        else{
            console.log('No weather service is available');
        }
    }
}