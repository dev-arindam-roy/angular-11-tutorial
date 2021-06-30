import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterJsonData',
  //pure: false
})
export class FilterJsonDataPipe implements PipeTransform {

  transform(value: any, filterText: string, filterKey: string): any {
    if (value.length == 0 || filterText === '') {
      return value;
    }

    const resultData = [];
    for (const data of value) {
      if (data[filterKey] == filterText) {
        resultData.push(data);
      }
    }
    return resultData;
  }

}
