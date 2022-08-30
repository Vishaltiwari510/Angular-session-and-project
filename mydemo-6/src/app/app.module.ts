import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCarComponent } from './add-car/add-car.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { SearchCarComponent } from './search-car/search-car.component';
import { HomeComponent } from './home/home.component';
import { ViewCarComponent } from './view-car/view-car.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    UpdateCarComponent,
    SearchCarComponent,
    HomeComponent,
    ViewCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
