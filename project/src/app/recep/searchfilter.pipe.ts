import { Pipe, PipeTransform } from '@angular/core';
import { Details } from '../shared/Details';
import {RecepComponent } from '../recep/recep.component';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(details : Details[], searchValue: string): Details[] {

    if(!details || !searchValue){
      return details;
    }
    return details.filter(detail =>
      detail.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
