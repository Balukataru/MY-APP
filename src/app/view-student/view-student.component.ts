import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
student: any;
  

  constructor(private _studentService:StudentService , private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);

        _studentService.getStudent(data.id).subscribe(
          (data:any)=>{
            console.log(data);
            this.student=data;
          }
        )
        

      }
    )
    
  }

}
