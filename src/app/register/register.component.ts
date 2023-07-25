import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _AuthserviceService:AuthserviceService,private _Router:Router){}

  isLoading:boolean = false;
  apiError:string = "";
  registerForm:FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    rePassword: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  })


  handleRegister(registerForm:any){

    this.isLoading = true;

    this._AuthserviceService.register(registerForm.value).subscribe({

        next:(res)=> {
          if (res.message === "success") {
            this._Router.navigate(["./login"])
          }
          this.isLoading = false;
        },
      error:(err)=> {
        console.log(err);
        this.apiError = err.error.message;
        this.isLoading = false;
      }
    })

    // console.log(registerForm)
  }
}

