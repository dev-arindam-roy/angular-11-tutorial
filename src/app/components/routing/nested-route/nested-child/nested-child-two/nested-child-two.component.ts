import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-nested-child-two',
  templateUrl: './nested-child-two.component.html',
  styleUrls: ['./nested-child-two.component.css']
})
export class NestedChildTwoComponent implements OnInit {

  userTechnologies: any[] = [
    {
      id: 1,
      name: 'Arindam Roy',
      skills: [
        {
          name: 'Laravel',
          rating: 5
        },
        {
          name: 'Angular',
          rating: 5
        },
        {
          name: 'Vue Js',
          rating: 5
        }
      ]
    },
    {
      id: 2,
      name: 'Santanu Roy',
      skills: [
        {
          name: 'Laravel',
          rating: 4
        },
        {
          name: 'Angular',
          rating: 4
        },
        {
          name: 'Vue Js',
          rating: 4
        }
      ]
    },
    {
      id: 3,
      name: 'Anushka Roy',
      skills: [
        {
          name: 'Laravel',
          rating: 0
        },
        {
          name: 'Angular',
          rating: 2
        },
        {
          name: 'Vue Js',
          rating: 1
        }
      ]
    },
    {
      id: 4,
      name: 'Sourav Roy',
      skills: [
        {
          name: 'Laravel',
          rating: 2
        },
        {
          name: 'Angular',
          rating: 2
        },
        {
          name: 'Vue Js',
          rating: 1
        }
      ]
    },
    {
      id: 5,
      name: 'Ritu Roy',
      skills: [
        {
          name: 'Laravel',
          rating: 0
        },
        {
          name: 'Angular',
          rating: 1
        },
        {
          name: 'Vue Js',
          rating: 1
        }
      ]
    }
  ];

  getSkill: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get parent route params
    this.route.parent?.paramMap.subscribe((parentParam: Params) => {
      // get child route params
      this.route.paramMap.subscribe((childParam: Params) => {
        this.userTechnologies.forEach(obj => {
          if (obj.id == parentParam.get('userId')) {
            let skill: any[] = obj.skills;
            if (skill.length > 0) {
              skill.forEach(sD => {
                if (sD.name === childParam.get('techId')) {
                  this.getSkill = sD;
                }
              });
            }
          }
        });
      });
    });
  }

}
