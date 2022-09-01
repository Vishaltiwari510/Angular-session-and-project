import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { CalorietrackerComponent } from './calorietracker/calorietracker.component';
import { HeadlineComponent } from './headline/headline.component';
import { HealthComponent } from './health/health.component';
import { SearchComponent } from './search/search.component';
import { SearchgifComponent } from './searchgif/searchgif.component';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';
import { TrendinggifComponent } from './trendinggif/trendinggif.component';

const routes: Routes = [
  {path:'',redirectTo:'headline',pathMatch:'full'},
  {path:'headline', component:HeadlineComponent},
  {path:'search', component:SearchComponent},
  {path:'health', component:HealthComponent},
  {path:'business', component:BusinessComponent},
  {path:'sports', component:SportsComponent},
  {path:'tech', component:TechComponent},
  {path:'trendinggif', component:TrendinggifComponent},
  {path:'searchgif', component:SearchgifComponent},
  {path:'calory', component:CalorietrackerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
