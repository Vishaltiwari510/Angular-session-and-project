import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyPipe } from 'src/mycustom.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
