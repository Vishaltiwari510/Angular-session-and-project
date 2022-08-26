import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private routeService : RouteService) {}
  [x: string]: any;


  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  hide = true;
  buttonClickDashboard(){
    this.routeService.routeToViewCar();
  }
}
