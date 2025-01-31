import { Component } from '@angular/core';
import { CarouselserviceService } from '../carouselservice.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  carousels:any;
  constructor(private _carouselService:CarouselserviceService){
    _carouselService.getcarousel().subscribe((data:any)=>{
      this.carousels=data;
    })

    }
  }


