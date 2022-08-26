import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Gender } from 'src/gender.pipe';
import { MyPipe } from 'src/mycustom.pipe';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { maritalStatus } from 'src/maritalStatus.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MyPipe,
    Gender,
    maritalStatus
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
