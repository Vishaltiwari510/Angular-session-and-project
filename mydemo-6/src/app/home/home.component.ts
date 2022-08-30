import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private router: Router) {
      // ...
    }

addCar(){
//  this.router.navigate(['/add']);
console.log("add car");
}
updateCar(){
//  this.router.navigate(['/update']);
console.log("update car")
}


}
