import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Getcars } from '../../services/getcars';
import { custom as Car } from '../../model/car.type';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-detail.html',
  styleUrls: ['./car-detail.scss']
})
export class CarDetailComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  carService: Getcars = inject(Getcars);
  location: Location = inject(Location);
  car: Car | undefined;

  constructor() {
    const carId = Number(this.route.snapshot.params['id']);
    this.carService.getAllCars().subscribe(data => {
      this.car = data.cars.find(c => c.id === carId);
    });
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
}