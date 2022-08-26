import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'testpipe'})
export class MyPipe implements PipeTransform{
    //Demo-2
    transform(value: any, ...type: any[]) {
    //    return value+' test pipe applied';
    let val = value+'';
     if(type[0].toUpperCase()=='U'){
   
    return val.toUpperCase();
     }
     else if(type[0].toUpperCase()=='L'){
   
        return val.toLowerCase();
     }
     
    }




}