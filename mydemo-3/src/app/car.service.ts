import { Injectable } from '@angular/core';
import { Car } from 'src/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars:Car[]=[];
  constructor() { 

    this.cars=[
      {name:'swift',model:'lxi',maker:'maruti',colour:'red',transmissionType:'manual'},
      {name:'baleno',model:'vi',maker:'maruti',colour:'red',transmissionType:'manual'},
      {name:'swift',model:'zxi',maker:'maruti',colour:'red',transmissionType:'auto'},
    ];
  }



deleteCar(car:Car)
{
  //console.log('in service');
 // console.log(car);
  
 let idx=this.cars.indexOf(car);

 this.cars.splice(idx,1);


}





  getCars()
  {
    return this.cars;
  }


  addCar(car:Car)
  {
    this.cars.push(car);
  }

}