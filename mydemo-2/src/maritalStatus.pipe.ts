import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'maritalStatus'})
export class maritalStatus implements PipeTransform{
    transform(value: any, maritalStatus: String) {
      if(maritalStatus=='married')
      return 'Mrs. '+value;
      else if(maritalStatus=='unmarried'){
        return 'Ms. '+value;
      }
    }

}