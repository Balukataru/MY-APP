import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  
  wheathers:any={};
  date=new Date();
  constructor(private _weatherservice:WeatherService){
    _weatherservice.getweather().subscribe(
      (data:any)=>{
        this.wheathers=data;
      }
    )
  }
  
}
