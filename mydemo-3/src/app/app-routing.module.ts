import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'addcar',component:AddComponent},
  {path:'login',component:LoginComponent},
  {path:'viewcar',component:ViewComponent},
  {path:'**',component:ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
