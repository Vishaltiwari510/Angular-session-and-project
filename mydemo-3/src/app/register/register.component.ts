import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  email = new FormControl('', [Validators.required, Validators.email]);
  
  getErrorMessageemail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  fname = new FormControl('', [Validators.required, Validators.email]);
  
  getErrorMessagefname() {
    if (this.fname.hasError('required')) {
      return 'You must enter a value';
    }

    return this.fname.hasError('fname') ? 'Not a valid FirstName' : '';
  }

  lname = new FormControl('', [Validators.required, Validators.email]);
  
  getErrorMessagelname() {
    if (this.lname.hasError('required')) {
      return 'You must enter a value';
    }

    return this.lname.hasError('lname') ? 'Not a valid LastName' : '';
  }

  hide = true;

  constructor(private routeService : RouteService) {}
   
  buttonClickRegister(){
    this.routeService.routeToRegister();
  }
  buttonClickLogin(){
    this.routeService.routeToLogin();
  }


}
