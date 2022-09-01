import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient)   {}



getUsers(){

  //passing headers 
const headers = new HttpHeaders({
'content-type' : 'application/json',
'authenticationToken' : '123456'

});

//passing params
const params = new HttpParams()
.set('pageNum','10')
.set('pageSize', '100');


return this.http.get('https://jsonplaceholder.typicode.com/todos',{headers:headers, params:params});

}
}
