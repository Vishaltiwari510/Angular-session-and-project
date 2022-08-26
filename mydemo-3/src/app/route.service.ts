import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) { }
  routeToAddCar() : void {
   this.router.navigate(['addcar']);
  }
  routeToViewCar() : void {
    this.router.navigate(['viewcar']);
   }
   routeToRegister() : void {
    this.router.navigate(['register']);
   }
   routeToLogin() : void {
     this.router.navigate(['login']);
    }

 
  
}

