import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingRoutingModule } from './setting-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RestPasswordComponent } from './rest-password/rest-password.component';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    RestPasswordComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
