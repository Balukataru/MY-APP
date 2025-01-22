import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students-card',
  templateUrl: './students-card.component.html',
  styleUrls: ['./students-card.component.css'],
})
export class StudentsCardComponent {
  studentdetails: any = [];
  constructor(private _studentdetailsservice: StudentService) {
    _studentdetailsservice.getStudentdetails().subscribe((data: any) => {
      this.studentdetails = data;
      console.log(this.studentdetails);
    });
  }
  delete(id: number) {
    if (confirm('Are you sure to delete?') == true) {
      this._studentdetailsservice.deleteStudentdetail(id).subscribe(
        (data: any) => {
          alert('Student details deleted successfully.');
        },
        (err: any) => {
          alert('Internal Serever Error');
        }
      );
    } else {
      alert('You have cancelled');
    }
  }

  view() {}
  edit() {}


  term: string='';
  filter(){
    this._studentdetailsservice.getFileredStudentdetail(this.term).subscribe((data:any)=>{
      this.studentdetails=data;
    },
  (err: any)=>{
    alert('Internal server error');
  }
  );
  }
  column: string = '';
  order: string = '';
  sort() {
    this._studentdetailsservice.getSortedStudentdetails(this.column, this.order).subscribe(
      (data: any) => {
        this.studentdetails = data;
        console.log(this.studentdetails);
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }

  limit: number =0;
  page: number =0;
  pagination(){
    this._studentdetailsservice.getPaginationStudentdetails(this.limit, this.page).subscribe((data:any)=>{
      this.studentdetails =data;
      console.log(data);
    },(err:any)=>{
      alert('Internal Server Error')
    })
  }




}
