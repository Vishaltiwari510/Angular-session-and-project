import { Component, OnInit } from '@angular/core';
import { Car } from 'src/Car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private carService:CarService) { }

  car=new Car();
  ngOnInit(): void {
  }


  addCar()
  {
    let car=new Car();
    car.name=this.car.name;
    car.model=this.car.model;
    car.maker=this.car.maker;
    car.colour=this.car.colour;
    car.transmissionType=this.car.transmissionType;

    this.carService.addCar(car);
   
  }
}
