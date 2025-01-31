import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-student-id',
  templateUrl: './create-student-id.component.html',
  styleUrls: ['./create-student-id.component.css']
})
export class CreateStudentIdComponent {
  id:number=0
  constructor(private _studentservice:StudentService, private _router:Router, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);

        _studentservice.getStudent(data.id).subscribe(
          (data:any)=>{
            console.log(data);
            this.studentForm.patchValue(data);
          }
        )
      }
    )
  }

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
    if(this.id){
      this._studentservice.updateStudent(this.id,this.studentForm.value).subscribe(
        (data:any)=>{
          alert("updated successfully");
          this._router.navigateByUrl("/mywebsite/students-card");
         },(err:any)=>{
          alert("Internal server error");
         }
      )

    }else{
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




  

}
