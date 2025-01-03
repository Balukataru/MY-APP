import { Component } from '@angular/core';

@Component({
  selector: 'app-derivatives',
  templateUrl: './derivatives.component.html',
  styleUrls: ['./derivatives.component.css']
})
export class DerivativesComponent {

  age:number=30;
  //variablename:datatype=initial value

  ages:number[]=[20,30,40,50,60];

  state:string="Telangana";

  states:string[]=['telangana','andhra pradesh','tamilnadu']

  products:any[]=[
    {productName:'book',price:50},
    {productName:'shirt',price:500},
    {productName:'mobile',price:50000},
    {productName:'bike',price:500000},
    {productName:'car',price:5000000}
  ]

}
