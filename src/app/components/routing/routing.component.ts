import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  paramId: number = 12;
  paramName: string = 'Arindam Roy';
  queryStr: any = {
    page: 1,
    category: 'Mobile',
    desc: false,
    price: 34000
  };
  fragtStr: string = 'loadMore';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  setParams() {
    this.router.navigate(['/route-parameter', this.paramId, this.paramName]);
  }

  setParamsWithQueryStringFragment() {
    this.router.navigate(['/route-parameter', this.paramId, this.paramName], {
      queryParams: this.queryStr,
      fragment: this.fragtStr
    });
  }

  setOptionalParams(): void {
    this.router.navigate(['/route-parameter', {id: 12, name: 'Rahul Saha', age: 24}]);
  }

}
