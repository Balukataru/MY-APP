import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-student-id',
  templateUrl: './create-student-id.component.html',
  styleUrls: ['./create-student-id.component.css']
})
export class CreateStudentIdComponent {
  constructor(private _studentservice:StudentService, private _router:Router){}

  public studentForm:FormGroup= new FormGroup(
    {
      name:new FormControl(),
      phone:new FormControl(),
      city:new FormControl(),
      dob:new FormControl(),
      profile_picture:new FormControl(),
      email:new FormControl(),
      
    }
  )

  create(){
    console.log(this.studentForm.value);
    this._studentservice.createStudentid(this.studentForm.value).subscribe((data:any)=>{
      console.log(data);
      alert("Student id created successfully")
      // this._router.navigate(["/students-card"]);
      this._router.navigateByUrl("/mywebsite/students-card");
      
    },(error:any)=>{
      alert("Internal server error");
    })
  }

  

}
