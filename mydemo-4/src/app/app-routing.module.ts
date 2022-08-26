import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DnrGuard } from './dnr.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CarrentComponent } from './services/carrent/carrent.component';
import { CarwashComponent } from './services/carwash/carwash.component';
import { DentingrepairComponent } from './services/dentingrepair/dentingrepair.component';
import { FlooringComponent } from './services/flooring/flooring.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'services',component:ServicesComponent,
  children:[
  {path:'carwash',component:CarwashComponent},
  {path:'carrent',component:CarrentComponent},
  {path:'dnr',component:DentingrepairComponent,canActivate:[DnrGuard]},
  {path:'flooring',component:FlooringComponent}
   
  ]
  },
  {path:'login',component:LoginComponent},
  {path:'main/:userId/:pass',component:MainComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


