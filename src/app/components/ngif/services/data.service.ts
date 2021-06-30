import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataObject: any[] = [];

  constructor() { 
    this.dataObject = [
      {
        technology: 'CLIENT-SIDE',
        languages: ['Angular', 'Vue', 'React']
      },
      {
        technology: 'SERVER-SIDE',
        languages: ['Laravel', 'Node', 'Python']
      },
      {
        technology: 'DATA-BASE',
        languages: ['MySQL', 'MongoDB', 'SqLite']
      }
    ]
  }

}
