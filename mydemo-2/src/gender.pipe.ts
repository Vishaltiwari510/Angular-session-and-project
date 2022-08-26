import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'gender'})
export class Gender implements PipeTransform{
    transform(value: any, gender: String) {
      if(gender.toUpperCase()=='MALE')
      return 'Mr. '+value;
      else if(gender.toUpperCase()=='FEMALE'){
        return 'Mrs. '+value;
      }
    }

}
