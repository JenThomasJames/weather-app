export class Weather {
    constructor(
        private weatherId: number,
        private weatherInfo: string,
        private weatherDescription: string,
        private temperature: number,
        private feelsLike: number,
        private temperatureMin: number,
        private temperatureMax: number,
        private pressure: number,
        private humidity: number,
        private windSpeed: number,
        private cityId: number,
        private cityName: string,
        private countryCode: string,
    ) { }
    
    public getWeatherId() : number {
        return this.weatherId;
    }

    public getWeatherInfo() : string {
        return this.weatherInfo;
    }

    public getWeatherDescription() : string {
        return this.weatherDescription;
    }

    public getTemperature() : number {
        return this.temperature;
    }

    public getFeelsLike() : number {
        return this.feelsLike;
    }

    public getTemperatureMin() : number {
        return this.temperatureMin;
    }

    public getTemperatureMax() : number {
        return this.temperatureMax;
    }

    public getPressure() : number {
        return this.pressure;
    }

    public getHumidity() : number {
        return this.humidity;
    }

    public getWindSpeed() : number {
        return this.windSpeed;
    }

    public getCityId() : number {
        return this.cityId;
    }

    public getCityName() : string {
        return this.cityName;
    }

    public getCountryCode() : string {
        return this.countryCode;
    }
}