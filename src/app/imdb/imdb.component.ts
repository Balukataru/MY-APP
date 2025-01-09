import { Component } from '@angular/core';
import { ImdbService } from '../imdb.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent {
imdbratings:any =[];

constructor(private _imdbservice:ImdbService){
  _imdbservice.getimdbratings().subscribe((data:any)=>{
    this.imdbratings=data;
  });

}
}
