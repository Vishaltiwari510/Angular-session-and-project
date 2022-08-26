import { Component } from '@angular/core';
import { Student } from 'src/Student';
import { User } from 'src/User';

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

// demo-4
cities=[['bijapur','bangalore','mysore','hubli'],['sholapur','pune','mumbai'],['kadapa','vijayawada']]


  selectedStates="";
  statesCode='';

  selectedCities:string[]=[];

  changeValue()
  {

  if(this.selectedStates=='karnataka')
  {
  this.statesCode="KA"
    this.selectedCities=this.cities[this.states.indexOf(this.selectedStates)];

}
else if(this.selectedState=='maharastra')
{
    this.statesCode="MH"
    this.selectedCities=this.cities[this.states.indexOf(this.selectedStates)];

  }
else
{
    this.statesCode="AP"
    this.selectedCities=this.cities[this.states.indexOf(this.selectedStates)];

  }


  // Practice Demo-4

}

usstates=['canada','californiqa','manhattan'];


  uscities=[['newyork','washington','oyanta','hubli'],['ontario','paris','london'],['alfranco','ashiyana']]
  usselectedstates="";
usstatecode='';
  usselectedCities:string[]=[];


changeState(){
  if(this.usselectedstates=='canada')
  {
  this.usstatecode="ca"
    this.usselectedCities=this.uscities[this.usstates.indexOf(this.usselectedstates)];
console.log(this.usstates.indexOf(this.usselectedstates));

}
else if(this.usselectedstates=='californiqa')
{
    this.usstatecode="cal"
    this.usselectedCities=this.uscities[this.usstates.indexOf(this.usselectedstates)];
    console.log(this.usstates.indexOf(this.usselectedstates));
  }
else
{
    this.usstatecode="man"
    this.usselectedCities=this.uscities[this.usstates.indexOf(this.usselectedstates)];
    console.log(this.usstates.indexOf(this.usselectedstates));
    //[this.usstates.indexOf(this.usselectedstates)]
}
}



//demo-5
// student:Student;
// //java code Student student=new Student()
//   constructor()
//   {
//     this.student=new Student();
//     this.student.rollNo=10;
//     this.student.gender='Male';
//     this.student.name='John';
//     this.student.marks=100;
//     this.student.sem=5;


//   }


  // demo-6

  // student:Student;
  // //java code Student student=new Student()
  //   constructor()
  //   {
  //     this.student=new Student();
  //     //this.student.rollNo=10;
  //     //this.student.gender='Male';
  //     this.student.name='John';
  //     this.student.marks=100;
  //     this.student.sem=5;


  //   }





  //Demo-7
//   student:Student;
//   student1:Student;

// //java code Student student=new Student()
//   constructor()
//   {
//     this.student=new Student();
//     this.student.rollNo=10;
//     this.student.gender='Male';
//     this.student.name='John';
//     this.student.marks=100;
//     this.student.sem=5;

//     //----------------

//     this.student1={'rollNo':2,'gender':'male','name':'rock','marks':56,'sem':6}

//   }


  //Demo-8
//   students:Student[]=[];

// //Student students=new Student[10];

// //java code Student student=new Student()
//   constructor()
//   {

//    let stud1 ={'rollNo':2,'gender':'male','name':'rock','marks':56,'sem':6}
//    let stud2 ={'rollNo':3,'gender':'male','name':'john','marks':57,'sem':5}
//    let stud3 ={'rollNo':4,'gender':'male','name':'brock','marks':58,'sem':4}

//    this.students.push(stud1);
//    this.students.push(stud2);
//    this.students.push(stud3);

//   }




//Demo-9
// students:Student[]=[];

//   student:Student;


//Student students=new Student[10];

//java code Student student=new Student()
  // constructor()
  // {

  //   this.student=new Student();
  //  let stud1 ={'rollNo':2,'gender':'male','name':'rock','marks':56,'sem':6}
  //  let stud2 ={'rollNo':3,'gender':'male','name':'john','marks':57,'sem':5}
  //  let stud3 ={'rollNo':4,'gender':'male','name':'brock','marks':58,'sem':4}

  //  this.students.push(stud1);
  //  this.students.push(stud2);
  //  this.students.push(stud3);

  // }


  // addStudent(student:Student)
  // {

  //   //let stud=new Student();
  //   let stud={rollNo:student.rollNo,gender:student.gender,name:student.name,marks:student.marks,sem:student.sem};

  //   this.students.push(stud);
  // }

//Demo-10

//Demo-11

result:any[]=[];
  skills:any[]=[];
  showVal()
  {

    for(let i=0;i<this.checkVals.length;i++)
    {
      if(this.skills[i]==true){
      console.log(this.checkVals[i])
      this.result[i]=this.checkVals[i];
      }
    }

}
checkVals=["java","html","css"];
users:User[]=[];
//variable:datatype=initialised

  user:User; // refrence of User
//variable:datatype
  constructor()
  {
    this.user=new User();  //creating object with refence of User
  }


addUser(user:User)  // funcvtion addUser 
  {

    // let user1=new User();


    let user1={userName:user.userName,password:user.password,confirmpassword:user.confirmpassword, email:user.email,gender:user.gender,dob:user.dob, contactnumber:user.contactnumber};

    this.users.push(user1);
  }
}
