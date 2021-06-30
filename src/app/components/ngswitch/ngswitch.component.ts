import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data.service'

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {


  dataObject: any[];
  country: string = '';
  countryUsers: any[] = [];

  boysObject: any[] = [];
  rating: number = 0;
  usersByRating: any[] = [];

  minRating: number = 0;
  maxRating: number = 0;
  usersByMinMaxRating: any[] = [];
  isChanged: boolean = false;

  constructor(ds: DataService) { 
    this.dataObject = ds.getDataObject();
    this.boysObject = ds.boys;
  }

  ngOnInit(): void {
  }

  getCountryDetails1(evt: any) {
    this.country = evt.target.value;
    this.dataObject.forEach(obj => {
      if (obj.country === this.country) {
        this.countryUsers = obj.users;
      }
    });
  }

  ratingChange(evt: any) {
    this.rating = evt.target.value;
    this.usersByRating = [];
    this.boysObject.forEach(obj => {
      if (obj.rating == this.rating) {
        this.usersByRating.push(obj.name);
      }
    });
  }

  counter(rating: number) :number[] {
    const range: number[] = [];
    for (var i = 0; i < rating; i++) {
      range.push(i);
    }
    return range;
  }

  minMaxRatingChange(evt: any, minMax: string) {
    this.isChanged = true;
    if (minMax === 'MIN') {
      this.minRating = evt.target.value;
    }
    if (minMax === 'MAX') {
      this.maxRating = evt.target.value;
    }
    this.usersByMinMaxRating = [];
    if (this.minRating != 0 && this.maxRating != 0) {
      if (this.minRating <= this.maxRating) {
        this.boysObject.forEach(obj => {
          if (obj.rating >= this.minRating && obj.rating <= this.maxRating) {
            this.usersByMinMaxRating.push({name: obj.name, rating: obj.rating});
          }
        });
      } else {
        alert('Min rating should be greater than max rating');
      }
    }
  }

}
