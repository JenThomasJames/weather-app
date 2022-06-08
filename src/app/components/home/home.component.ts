import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/modal/weather.modal';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weatherData: Weather;
  //weatherData: Weather = new Weather(1, "Rainy", "haze", 28, 26.3, 24.1, 29, 233, 84, 544, 100, "Bengaluru", "IN");

  constructor(private httpService: HttpService) { }
  ngOnInit() {
    this.getDefaultWeather();
  }

  private getDefaultWeather(): void {
    this.httpService.fetchLatitudeAndLongitude("Bangalore").subscribe(data => {
      this.getWeatherData(data[0].lat, data[0].lon);
    });
  }

  private getWeatherData(latitude: string, longitude: string): void {
    this.httpService.fetchWeather(latitude, longitude).subscribe(data => {
      this.weatherData = new Weather(data.weather[0].id,
        data.weather[0].main,
        data.weather[0].description,
        data.main.temp,
        data.main.feels_like,
        data.main.temp_min,
        data.main.temp_max,
        data.main.pressure,
        data.main.humidity,
        data.wind.speed,
        data.sys.id,
        data.name,
        data.sys.country
      );
      console.log(data);
    });
  }

  onSearch(location: string) : void{
    this.httpService.fetchLatitudeAndLongitude(location).subscribe(data => {
      this.getWeatherData(data[0].lat, data[0].lon);
    });
  }
}
