import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RestPasswordComponent } from './rest-password/rest-password.component';

const routes: Routes = [
  {path:"",redirectTo:"change",pathMatch:"full"},
  {path:"change",component:ChangePasswordComponent},
  {path:"rest",component:RestPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
