import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';


  name='john';
   // num1:string='hello';
   nums1=12;
   nums2=20;
   sums=0;
    constructor()
    {
     // this.num1=10;
    }

//Demo-3

sum()
 {
this.sums=this.nums1+this.nums2;
 }

//Demo-4
names="john cena";

  type="text";

  changeVal()
  {
this.type="password";

  }

//Demo-5 and Demo-6

btname="hide"
textype="text"
istext=true;
changeValue(){
  if(this.istext){
  this.btname="show";
  this.textype="password";
  this.istext=false;
}
else{
  this.btname="Hide";
  this.textype="text";
  this.istext=true;
}

}
//Demo-7 and Demo-8
myvar="hello";

disp()
{

  alert(this.myvar);
}

//Demo-9 Method-1

num1="0";
num2="0";
sumvar=0;
display(){

this.sumvar=parseInt(this.num1)+parseInt(this.num2);
}

//Demo-9 Method -2 (Also change input type to Number)
// num1:number="0";
// num2:number="0";
// sumvar:number=0;
// display(){
//
// this.sumvar=this.num1+this.num2;
// }


//Dem-10 ,
num01:number=0;
num02:number=0;

sumvar10=0;
display10()
{
  //this.num01='test';//error

  //this.num01 = test22 runtime ts is converted in js
console.log(this.num01);
this.sumvar10=this.num01+this.num02;
}



//Demo-11
pclr="pink";



//Demo-12
age=0;
  status="";
  pclg="";

  chkStatus()
  {
    console.log(this.age);
    if(this.age>=18 && this.age<=50)
    {
      this.status="eligible"
      this.pclg="green";
    }
    else
   {
    this.status="not eligible"
    this.pclg="red";
  }
  }


  //Dem0-13
  pclgg="green"
  textclr="white"

  //Assignment-1 Angular Property
  varysize:number=15;
  increasefont(){
    this.varysize=this.varysize+5;
  }
  decreasefont(){
    this.varysize=this.varysize-5;
    return
  }


}
