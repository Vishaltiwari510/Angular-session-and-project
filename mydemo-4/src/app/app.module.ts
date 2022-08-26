import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { CarrentComponent } from './services/carrent/carrent.component';
import { CarwashComponent } from './services/carwash/carwash.component';
import { DentingrepairComponent } from './services/dentingrepair/dentingrepair.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { FlooringComponent } from './services/flooring/flooring.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    CarrentComponent,
    CarwashComponent,
    DentingrepairComponent,
    LoginComponent,
    MainComponent,
    FlooringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
