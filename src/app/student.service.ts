import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient:HttpClient, private _activatedRoute:ActivatedRoute) { }

  getStudentdetails():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
  }
  
  deleteStudentdetail(id:number){
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
  }

  getFileredStudentdetail(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);

  }

  getSortedStudentdetails(column:string,order:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order);
  }

  getPaginationStudentdetails(limit:number,page:number){
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page);
  }

  createStudentid(data:any){
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data);

  }
  getStudent(id:number){
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)
  }

  updateStudent(id:number,data:any){
    return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id,data)
  }

  
  

  
}
