import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibbling1',
  templateUrl: './sibbling1.component.html',
  styleUrls: ['./sibbling1.component.css']
})
export class Sibbling1Component {
  

  count:number=0;
  constructor(private _commonService:CommonService){}

  send(){
    this._commonService.countSub.next(this.count);
  
    
  }

}
