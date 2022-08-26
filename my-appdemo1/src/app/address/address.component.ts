import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor() { }
  @Input('city')
  mycity='bangalore';

  @Input('state')
  state='karnataka';
  ngOnInit(): void {
  }

}
