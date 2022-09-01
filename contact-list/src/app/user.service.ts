import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from 'src/Contact';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }


  getContacts()
  {

    return this.http.get<Contact[]>('http://localhost:3000/contacts');
  }


  addContact(contact:Contact)
  {

    return this.http.post<Contact>('http://localhost:3000/contacts',contact);
  }
}
