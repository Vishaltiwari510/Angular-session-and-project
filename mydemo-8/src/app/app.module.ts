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
