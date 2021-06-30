import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  dataObject = [
    {
      country: 'India',
      users: [
        {
          name: 'Arindam Roy',
          rating: 34
        },
        {
          name: 'Anushka Roy',
          rating: 12
        },
        {
          name: 'Ritu Roy',
          rating: 33
        }
      ]
    },
    {
      country: 'USA',
      users: [
        {
          name: 'Mark Gugenbark',
          rating: 46
        },
        {
          name: 'Billy Gates',
          rating: 66
        },
        {
          name: 'Waren Buffet',
          rating: 70
        }
      ]
    },
    {
      country: 'Pakisthan',
      users: [
        {
          name: 'Harami Sing',
          rating: 43
        },
        {
          name: 'Atangbadi Khan',
          rating: 41
        },
        {
          name: 'Laden Wanted',
          rating: 90
        }
      ]
    },
    {
      country: 'Hungry',
      users: []
    }
  ];

  boys = [
    { name: 'Demo User 1', rating: 1},
    { name: 'Demo User 2', rating: 2},
    { name: 'Demo User 3', rating: 3},
    { name: 'Demo User 4', rating: 4},
    { name: 'Demo User 5', rating: 5},
    { name: 'Demo User 6', rating: 1},
    { name: 'Demo User 7', rating: 2},
    { name: 'Demo User 8', rating: 3},
    { name: 'Demo User 9', rating: 4},
    { name: 'Demo User 10', rating: 5},
    { name: 'Demo User 11', rating: 1},
    { name: 'Demo User 12', rating: 2},
    { name: 'Demo User 13', rating: 3},
    { name: 'Demo User 14', rating: 4},
    { name: 'Demo User 15', rating: 5},
    { name: 'Demo User 16', rating: 1},
    { name: 'Demo User 17', rating: 2},
    { name: 'Demo User 18', rating: 3},
    { name: 'Demo User 19', rating: 4},
    { name: 'Demo User 20', rating: 5},
    { name: 'Demo User 21', rating: 1},
    { name: 'Demo User 22', rating: 2},
    { name: 'Demo User 23', rating: 3},
    { name: 'Demo User 24', rating: 4},
    { name: 'Demo User 25', rating: 5},
    { name: 'Demo User 26', rating: 1},
    { name: 'Demo User 27', rating: 2},
  ];

  getDataObject() {
    return this.dataObject;
  }
}
