import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiID = '72930ede6166d4b607ad14d4433cbf8b';
  urlEndpoint = 'http://api.openweathermap.org/data/2.5/weather?q=';

  constructor(private httpClient: HttpClient) {}

  search(city: string, code: string): Observable<any> {
    return this.httpClient.get(this.urlEndpoint + city + ',' + code + '&APPID=' + this.apiID + '&units=metric');
  }
}
