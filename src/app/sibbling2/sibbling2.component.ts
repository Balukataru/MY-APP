import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibbling2',
  templateUrl: './sibbling2.component.html',
  styleUrls: ['./sibbling2.component.css']
})
export class Sibbling2Component {

  count:number=0;

  constructor(private _commonService:CommonService){
    _commonService.countSub.subscribe(
      (data:any)=>{
        console.log(data);
        this.count=data;
      },(err:any)=>{
        console.log("Internal Server Error!!!");
      }
    )
  }

}
