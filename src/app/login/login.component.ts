import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errorMsg:string="";
  isLoading:boolean = false;

  constructor(private _AuthserviceService:AuthserviceService, private _Router : Router){}

  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  })

  handleLogin(loginForm:any){
    this.isLoading = true;
   this._AuthserviceService.login(loginForm.value).subscribe({
    next:(res)=> {

      if (res.message === "success") {
        this.isLoading = false;
        localStorage.setItem("userData",JSON.stringify(res.token));
        this._AuthserviceService.decodeUserData();
        this._Router.navigate(["./home"])
      }
      }
    ,
    error:(err)=>{
      if(err.status == 401){
        this.errorMsg = err.error.message
        this.isLoading = false;
      }else{
        this.errorMsg = err.error.errors.msg;
        this.isLoading = false;
      }
   }

  })

}
}
