import { Component, OnInit } from '@angular/core';
import { Car } from 'src/Car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  cars:Car[]=[];
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCar();
      }

      getCar()
      {
        this.cars=this.carService.getCars();

      }

      deleteCar(car: Car)
      {
      
        this.carService.deleteCar(car);
      }
}
