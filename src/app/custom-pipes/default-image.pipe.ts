import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, defaultImg: string): string {
    if (value == '') {
      return defaultImg;
    } else {
      return value;
    }
  }

}
