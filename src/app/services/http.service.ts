import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private rootUrl : string = "http://api.openweathermap.org";
  private apiKey : string = "8af17a0df0e0b8e16edf0c2961f10f69";

  constructor(private http : HttpClient) { }

  fetchWeather(latitude : string, longitude : string) : Observable<any> {
    return this.http.get(this.rootUrl+"/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+this.apiKey+"&units=metric");
  }

  fetchLatitudeAndLongitude(city : string) : Observable<any> {
    return this.http.get(this.rootUrl+"/geo/1.0/direct?q="+city+"&limit=1&appid="+this.apiKey);
  }
  
}
