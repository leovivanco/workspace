import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchReduce'
})

export class SearchCuts implements PipeTransform {
  transform(value:string, trunk: number): any {
    return value.length > trunk ? value.substring(0, trunk) + '...' : value
  }
}
