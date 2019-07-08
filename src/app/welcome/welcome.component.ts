import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../weather/weather.service';
import {WeatherModel} from '../weather/weather.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  weatherItem: WeatherModel[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.weatherService.search(form.value.city, form.value.code).subscribe((res) => {
      const item = new WeatherModel();
      item.city = res.valueOf().name;
      item.description = res.valueOf().weather[0].description;
      item.weather = res.valueOf().weather[0].main;
      item.humidity = res.valueOf().main.humidity;
      item.temp = res.valueOf().main.temp;
      item.sunrise = res.valueOf().sys.sunrise;
      item.sunset = res.valueOf().sys.sunset;
      this.weatherItem.push(item);
    });
  }

}
