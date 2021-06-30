import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nested-route',
  templateUrl: './nested-route.component.html',
  styleUrls: ['./nested-route.component.css']
})
export class NestedRouteComponent implements OnInit {

  users: {id: number, name: string}[] = [
    {id: 1, name: 'Arindam Roy'},
    {id: 2, name: 'Santanu Roy'},
    {id: 3, name: 'Anushka Roy'},
    {id: 4, name: 'Sourav Roy'},
    {id: 5, name: 'Ritu Roy'}
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showUserDetails(uid: number, unm: string) {
    this.router.navigate(['/nested-routing', uid, unm]);
  }

}
