import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  name:string="Balu";
  age:number=28;
  email:string="balu@gamil.com"

  isIndian:boolean=true;

  phone:string="+91"

  num1:number=0;
  num2:number=0;
  result:number=0;

  sum(){
    this.result=this.num1+this.num2;
    console.log(this.result);
  }


  user:any={
    name:"Balu",
    age:28,
    email:"balu@gamil.com"

  }

  submit(){
    alert("clicked submit button")
  }
  typing(){
    alert("Typing......")
  }

}
