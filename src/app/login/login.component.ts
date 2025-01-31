import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginform:FormGroup= new FormGroup({
    email:new FormControl(),
    password: new FormControl()
  })



  constructor(private _loginService:LoginService, private _router:Router){}


  signin(){
    console.log(this.loginform.value);
    this._loginService.login(this.loginform.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("login successfully!");
        sessionStorage.setItem('token',data.token);
        // navigate to dashboard
        this._router.navigateByUrl("/dashboard");
      },(err:any)=>{
        alert("Invalid Credentials")
      }
    )
  }

}
