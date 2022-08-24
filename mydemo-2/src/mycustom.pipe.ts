import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'testpipe'})
export class MyPipe implements PipeTransform{
    transform(value: any) {
    //    return value+' test pipe applied';
    let val = value+'';
    return val.toUpperCase();
    }

}