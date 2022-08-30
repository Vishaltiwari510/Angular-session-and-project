import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { HeadlineComponent } from './headline/headline.component';
import { HealthComponent } from './health/health.component';
import { SearchComponent } from './search/search.component';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';

const routes: Routes = [
  {path:'',redirectTo:'headline',pathMatch:'full'},
  {path:'headline', component:HeadlineComponent},
  {path:'search', component:SearchComponent},
  {path:'health', component:HealthComponent},
  {path:'business', component:BusinessComponent},
  {path:'sports', component:SportsComponent},
  {path:'tech', component:TechComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
