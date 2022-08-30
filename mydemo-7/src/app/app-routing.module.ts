import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { HomeComponent } from './home/home.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'add', component:AddbookComponent},
  {path:'home', component:HomeComponent},
  {path:'update', component:UpdatebookComponent},
  {path:'view', component:ViewbookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
