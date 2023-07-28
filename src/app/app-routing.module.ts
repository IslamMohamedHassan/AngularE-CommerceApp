import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckOutComponent } from './check-out/check-out.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home" ,canActivate:[authGuard],component:HomeComponent},
  {path:"about",canActivate:[authGuard],component:AboutComponent},
  {path:"categories",canActivate:[authGuard],component:CategoriesComponent},
  {path:"cart",canActivate:[authGuard],component:CartComponent},
  {path:"brands",canActivate:[authGuard],component:BrandsComponent},
  {path:"checkout",canActivate:[authGuard],component:CheckOutComponent},
  {path:"login",component:LoginComponent},
  {path:"productDetails/:id",canActivate:[authGuard],component:ProductDetailsComponent},
  {path:"register",component:RegisterComponent},
  {path:"settings",loadChildren:()=>import('./setting/setting.module').then((x)=>x.SettingModule)},
  {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
