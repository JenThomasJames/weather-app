import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/modal/weather.modal';

@Component({
  selector: 'app-weather-meta',
  templateUrl: './weather-meta.component.html',
  styleUrls: ['./weather-meta.component.css']
})
export class WeatherMetaComponent implements OnInit {

  @Input() weatherData: Weather;

  constructor() { }

  ngOnInit(): void {
  }

}
