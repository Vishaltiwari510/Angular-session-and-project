import { Component } from '@angular/core';
import { Car } from 'src/Car'
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpdemo';

  cars:Car[]=[];
  constructor(private carService:CarService)
  {

  }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
 
  this.getCars();
}


getCars()
{

  this.carService.getCars().subscribe(
    data=>{

      this.cars=data;
    },
    error=>{
      console.log(error)
    }
  )


}


car=new Car();

addCar()
{

this.carService.addCar(this.car).subscribe(
  data=>{

    alert('car added');
    this.getCars();
  },
  error=>{
    console.log(error);
  }
)  
}





deleteCar(id:number)
{

this.carService.deleteCar(id).subscribe(
  data=>{

    alert('car deleted');
    this.getCars();
  },
  error=>{
    console.log(error);
  }
)  
}



}

