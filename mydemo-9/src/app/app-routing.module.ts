import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoansComponent } from './loans/loans.component';
import { LoantypesComponent } from './loantypes/loantypes.component';

const routes: Routes = [
  {path:'employee', component:EmployeeComponent},
  {path:'loans', component:LoansComponent},
  {path:'loantypes', component:LoantypesComponent},
  {path:'loans/add-loans', component:AddLoansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
