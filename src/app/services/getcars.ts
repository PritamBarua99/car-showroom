import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CarType } from '../model/car.type';

@Injectable({
  providedIn: 'root'
})
export class Getcars {
  http = inject(HttpClient);
  getAllCars() {
    const url = `https://myfakeapi.com/api/cars`
    return this.http.get<CarType>(url);
  }
}
