import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLogin:boolean = false;
  constructor(private _AuthserviceService:AuthserviceService){
     _AuthserviceService.userData.subscribe({
      next:()=>{
        if (_AuthserviceService.userData.getValue() !== null) {
          this.isLogin =true;
        }else {
          this.isLogin = false;
        }
      }
     })
  }
  logOut(){
    this._AuthserviceService.logOut()
  }

}
