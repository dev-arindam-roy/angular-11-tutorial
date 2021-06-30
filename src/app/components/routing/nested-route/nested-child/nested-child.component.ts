import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-nested-child',
  templateUrl: './nested-child.component.html',
  styleUrls: ['./nested-child.component.css']
})
export class NestedChildComponent implements OnInit {

  usersList: any[] = [
    {id: 1, name: 'Arindam Roy', age: 34, email: 'arindam@yopmail.com', phno: '98987676545'},
    {id: 2, name: 'Santanu Roy', age: 28, email: 'santanu@yopmail.com', phno: '98987676123'},
    {id: 3, name: 'Anushka Roy', age: 12, email: 'anushka@yopmail.com', phno: '98987676456'},
    {id: 4, name: 'Sourav Roy', age: 26, email: 'sourav@yopmail.com', phno: '98987676789'},
    {id: 5, name: 'Ritu Roy', age: 33, email: 'ritu@yopmail.com', phno: '98987676000'},
  ];

  getParamId: any;
  getParamName: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data: Params) => {
      this.getParamId = data.get('userId');
      this.getParamName = data.get('userName');
    });
  }

}
