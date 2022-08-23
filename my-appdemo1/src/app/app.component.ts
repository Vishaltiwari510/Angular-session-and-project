import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-appdemo1';

  epclr="green";
  nepclr="red";

  age: any;




// Array of state created
  states=['karnataka','maharastra','andra'];


  constructor()
  {
    // for(let i=0;i<this.states.length;i++)
    // {
    //    console.log( this.states[i]);
    // }
  }


  selectedState="";
  stateCode='';

  changeVal()
  {
  console.log('value CHANGED ' + this.selectedState);
  if(this.selectedState=='karnataka')  
  this.stateCode="KA"
 else if(this.selectedState=='maharastra')  
  this.stateCode="MH"
 else
  this.stateCode="AP"
 
}




  


 


}
