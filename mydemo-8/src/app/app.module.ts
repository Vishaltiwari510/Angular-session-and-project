import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthComponent } from './health/health.component';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';
import { HeadlineComponent } from './headline/headline.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { TrendinggifComponent } from './trendinggif/trendinggif.component';
import { SearchgifComponent } from './searchgif/searchgif.component';
import { CalorietrackerComponent } from './calorietracker/calorietracker.component';


@NgModule({
  declarations: [
    AppComponent,
    HealthComponent,
    BusinessComponent,
    SportsComponent,
    TechComponent,
    HeadlineComponent,
    HeaderComponent,
    SearchComponent,
    TrendinggifComponent,
    SearchgifComponent,
    CalorietrackerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
