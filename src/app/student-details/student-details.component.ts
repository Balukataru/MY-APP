import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { max, min } from 'rxjs';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  public studentsForm:FormGroup=new FormGroup({

    name: new FormControl('',[Validators.required]),
    class: new FormControl(''),
    mobilenum: new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    fathername: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    address: new FormGroup({
      addressline: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl('',[Validators.required,Validators.maxLength(6)]),

    }),
    type:new FormControl(''),

    students: new FormArray([])

});


get studentFormArray(){
  return this.studentsForm.get('students') as FormArray
}

addstudent(){
  this.studentFormArray.push(
    new FormGroup({
      class: new FormControl(),
      year: new FormControl(),
      percentage: new FormControl(),
    })
  )
}

delete(i:number){
  this.studentFormArray.removeAt(i);
}


constructor(){
  this.studentsForm.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='dayscholor'){
        this.studentsForm.addControl('busfee',new FormControl());
        this.studentsForm.removeControl('hostelfee');
      }else{
        this.studentsForm.addControl('hostelfee',new FormControl());
        this.studentsForm.removeControl('busfee');
      }
    }
  )
}

create(){
  console.log(this.studentsForm.value);
}
  

}
