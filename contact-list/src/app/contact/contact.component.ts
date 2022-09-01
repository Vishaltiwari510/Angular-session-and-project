import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/Contact';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts:Contact[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  contact=new Contact();
  getContacts()
  {
  
    this.userService.getContacts().subscribe(
      data=>{
  
        this.contacts=data;
      },
      error=>{
        console.log(error)
      }
    )
  
  
  }

  
  addContact()
  {
  
  this.userService.addContact(this.contact).subscribe(
    data=>{
  
     alert("contact added")
      this.getContacts();

    },
    error=>{
      console.log(error);
      alert("failed to load contact");
    }
  )  
  }



  
 

  
}
