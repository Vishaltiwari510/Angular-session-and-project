import { Component, OnInit } from '@angular/core';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  constructor(private routeService : RouteService) {}
   
  buttonClickAddCar(){
    this.routeService.routeToAddCar();
  }
  buttonClickViewCar(){
    this.routeService.routeToViewCar();
  }
  
  ngOnInit(): void {
  }

}

