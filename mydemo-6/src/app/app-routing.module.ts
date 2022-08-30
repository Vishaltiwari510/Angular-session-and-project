import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import {UpdateCarComponent} from './update-car/update-car.component';
import { HomeComponent } from './home/home.component'
const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
    { path:'add',component:AddCarComponent },
    {path:'update',component:UpdateCarComponent }
  ];








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
