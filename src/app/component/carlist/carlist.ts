import { Component, inject, OnInit } from '@angular/core';
import { Getcars } from '../../services/getcars';
import { CarType } from '../../model/car.type';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-carlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carlist.html',
  styleUrl: './carlist.scss'
})
export class Carlist implements OnInit {
  carService = inject(Getcars);
  cars: CarType | undefined;

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.carService.getAllCars().subscribe(data => {
      this.cars = data;
    });
  }
}