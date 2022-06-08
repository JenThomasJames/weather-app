import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/modal/weather.modal';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {

  @Input() weatherData : Weather;

  constructor() { }

  ngOnInit(): void {
  }

}
