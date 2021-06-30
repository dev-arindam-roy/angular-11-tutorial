import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderSalutation'
})
export class GenderSalutationPipe implements PipeTransform {

  transform(value: string, sex: string, isMarried:boolean): string {
    if (sex.toLocaleLowerCase() == 'male' ) {
      return 'Mr. ' + value;
    } else {
      if (isMarried) {
        return 'Mrs. ' + value;
      } else {
        return 'Miss. ' + value;
      }
    }
  }

}
