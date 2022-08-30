import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from 'src/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(public http:HttpClient) { }


  getCars()
  {

    return this.http.get<Car[]>('http://localhost:3000/cars');
  }


  addCar(car:Car)
  {

    return this.http.post<Car>('http://localhost:3000/cars',car);
  }

  deleteCar(id:number)
  {
    //return this.http.delete('http://localhost:3000/cars/${id}');

    return this.http.delete(`http://localhost:3000/cars/${id}`);
  }


  searchCarById(id:number)
  {

    return this.http.get<Car>(`http://localhost:3000/cars/${id}`);
  }

  updateCar(id:number,car:Car)
  {

    return this.http.put<Car>(`http://localhost:3000/cars/${id}`,car);
  }

}

