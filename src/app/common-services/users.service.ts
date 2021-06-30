import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  userData = [
    {
      name: 'Demo User 1',
      age: 24,
      company: 'TCS',
      salary: 50000,
      designation: 'Developer',
      skills: [
        {
          name: 'Laravel',
          rating: 5
        },
        {
          name: 'MySql',
          rating: 3
        },
        {
          name: 'Vue Js',
          rating: 4
        },
        {
          name: 'Angular',
          rating: 4
        },
        {
          name: 'MongoDB',
          rating: 2
        }
      ],
      isMarried: true
    },
    {
      name: 'Demo User 2',
      age: 25,
      company: 'CTS',
      salary: 53000,
      designation: 'Developer',
      skills: [
        {
          name: 'Laravel',
          rating: 2
        },
        {
          name: 'MySql',
          rating: 5
        },
        {
          name: 'Vue Js',
          rating: 1
        },
        {
          name: 'Angular',
          rating: 0
        },
        {
          name: 'MongoDB',
          rating: 4
        }
      ],
      isMarried: false
    },
    {
      name: 'Demo User 3',
      age: 27,
      company: 'TCS',
      salary: 42000,
      designation: 'Developer',
      skills: [
        {
          name: 'Laravel',
          rating: 5
        },
        {
          name: 'MySql',
          rating: 5
        },
        {
          name: 'Vue Js',
          rating: 5
        },
        {
          name: 'Angular',
          rating: 2
        },
        {
          name: 'MongoDB',
          rating: 1
        }
      ],
      isMarried: true
    },
    {
      name: 'Demo User 4',
      age: 32,
      company: 'TCS',
      salary: 60000,
      designation: 'Database Administrator',
      skills: [
        {
          name: 'Server Config',
          rating: 5
        },
        {
          name: 'Linux',
          rating: 4
        },
        {
          name: 'Cloud DB Config',
          rating: 4
        },
        {
          name: 'Load Balancing',
          rating: 3
        },
        {
          name: 'Sql Queries',
          rating: 5
        }
      ],
      isMarried: false
    },
    {
      name: 'Demo User 5',
      age: 29,
      company: 'WIPRO',
      salary: 34000,
      designation: 'HR-Manager',
      skills: [
        {
          name: 'Office Word',
          rating: 5
        },
        {
          name: 'Office Excel',
          rating: 4
        },
        {
          name: 'Office PPT',
          rating: 5
        }
      ],
      isMarried: true
    },
    {
      name: 'Demo User 6',
      age: 19,
      company: 'ONEX',
      salary: 17000,
      designation: 'Trainee',
      skills: [],
      isMarried: false
    },
    {
      name: 'Demo User 7',
      age: 21,
      company: 'TCS',
      salary: 19000,
      designation: 'Trainee',
      skills: [],
      isMarried: false
    },
    {
      name: 'Demo User 8',
      age: 21,
      company: 'WIPRO',
      salary: 14000,
      designation: 'Trainee',
      skills: [
        {
          name: 'JAVA',
          rating: 2
        }
      ],
      isMarried: false
    },
    {
      name: 'Demo User 9',
      age: 27,
      company: 'CTS',
      salary: 34000,
      designation: 'HR-Manager',
      skills: [
        {
          name: 'Office Word',
          rating: 3
        },
        {
          name: 'Office Excel',
          rating: 4
        },
        {
          name: 'Office PPT',
          rating: 5
        }
      ],
      isMarried: false
    },
    {
      name: 'Demo User 10',
      age: 29,
      company: 'ONEX',
      salary: 34000,
      designation: 'Database Administrator',
      skills: [
        {
          name: 'Server Config',
          rating: 4
        },
        {
          name: 'Database Architechture',
          rating: 4
        },
        {
          name: 'Sql Queries',
          rating: 5
        }
      ],
      isMarried: true
    }
  ]
}
