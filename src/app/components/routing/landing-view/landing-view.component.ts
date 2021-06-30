import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit {

  userParams: {
    id: number | undefined;
    name: string
  }

  _id: number = 25;
  _name: string = 'Puja Roy';

  getPage: number | null = null;
  getCategory: string = '';
  isDesc: boolean = true;
  getPrice: number | null = null; 
  getFrag: string = '';

  isYoutubeBlock: boolean = false;
  currentQueryString: any;

  staticRouteData: any;

  constructor(private router: Router, private route: ActivatedRoute) { 
    
    // for parameter
    this.userParams = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    // for query string
    if (this.route.snapshot.queryParams.page != undefined) {
      this.getPage = this.route.snapshot.queryParams.page;
    }
    if (this.route.snapshot.queryParams.category != undefined) {
      this.getCategory = this.route.snapshot.queryParams.category;
    }
    if (this.route.snapshot.queryParams.desc != undefined) {
      this.isDesc = this.route.snapshot.queryParams.desc;
    }
    if (this.route.snapshot.queryParams.price != undefined) {
      this.getPrice = this.route.snapshot.queryParams.price;
    }

    // for fragment
    if (this.route.snapshot.fragment != undefined) {
      this.getFrag = this.route.snapshot.fragment;
    }

    // for static data
    this.staticRouteData = this.route.snapshot.data;
    console.log("static data obj => ");
    console.log(this.staticRouteData);
  }

  ngOnInit(): void {
    
    //way 1
    // this.route.params.subscribe((data: Params) => {
    //   this.userParams = {
    //     id: data['id'],
    //     name: data['name']
    //   }
    // });

    // way 2
    this.route.paramMap.subscribe((data: Params) => {
      this.userParams = {
        id: data.get('id'),
        name: data.get('name')
      }
      if (data.get('blockName') != undefined) {
        if (data.get('blockName') === 'youtube-block') {
          this.isYoutubeBlock = true;
        }
      }
    });


    // for query string
    this.route.queryParams.subscribe((data) => {
      if (data.page != undefined) {
        this.getPage = data.page;
      }
      if (data.category != undefined) {
        this.getCategory = data.category;
      }
      if (data.desc != undefined) {
        this.isDesc = data.desc;
      }
      if (data.price != undefined) {
        this.getPrice = data.price;
      }
      this.currentQueryString = data;
    });


    // for fragment
    this.route.fragment.subscribe((data) => {
      if (data != undefined) {
        this.getFrag = data;
      }
    });

    // for static data
    this.route.data.subscribe((staticData: Data) => {
      this.staticRouteData = staticData;
    });


  }

  backToRouting() {
    this.router.navigate(['/routing']);
  }

  backToHome() {
    this.router.navigate(['/']);
  }

  eventParam() {
    this.router.navigate(['/route-parameter', this._id, this._name]);
  }

  eventParamQueryStringFragment() {
    this.router.navigate(['/route-parameter', 890, 'Santanu Roy'], {
      queryParams: {
        page: 23,
        category: 'LED TV',
        price: 89000,
        desc: false
      },
      fragment: 'againSearch'
    });
  }

  back() {
    window.history.back();
  }

  preserveQueryString() {
    this.router.navigate(['/preserve-query-string', 9999, 'block', 'youtube-block'], {
      queryParamsHandling: 'preserve'
    });
  }

  mergeQueryString() {
    this.router.navigate(['/preserve-query-string', 9999, 'block', 'youtube-block'], {
      queryParams:{
        subcategory: 'demo-subcategory',
        color: 'red'
      },
      queryParamsHandling: 'merge'
    });
  }

}
