import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  demoText: string = "hI, i Am aRinDam rOy";
  demoPrice: number = 12987.89067;
  _year: number = 2021;
  _month: number = 6;
  _date: number = 26
  today: Date = new Date(this._year, this._month, this._date);
  demoPercentage: number = 0.01289019;
  demoPercentage2: number = 0.25;
  demoSalary: number = 55670;

  demoUser: any[] = [
    {name: 'Arindam Roy', sex: 'Male', married: true},
    {name: 'Arindam Roy', sex: 'Male', married: false},
    {name: 'Ritu Roy', sex: 'Female', married: false},
    {name: 'Puja Roy', sex: 'Female', married: true},
  ]

  imageUrl: string = '';
  imageUrl2: string = '/assets/images/number-pipe1.png';

  jsonData: any[] = [
    {name: 'Ari Roy', age: 34},
    {name: 'Ritu Roy', age: 23},
    {name: 'Anu Roy', age: 36},
    {name: 'Sourav Roy', age: 24},
    {name: 'Simba Roy', age: 56},
  ];

  demoArray: any[] = ['laravel', 'angular', 'vue js', 'node js', 'mongo db'];

  demoPara: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  filterText: string = '';
  filterText2: string = '';

  asyncData: any;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  addNewJsonData() {
    this.jsonData.push({name: Math.random().toString(36).substr(2, 5), age: Math.floor(Math.random() * 16) + 5});
  }

  asyncExp() {
    this.asyncData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data comming from API');
      }, 3000);
    });
  }

}
