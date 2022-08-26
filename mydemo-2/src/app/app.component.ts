import { Component } from '@angular/core';
import { Student } from 'src/Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mydemo-2';

  //Demo-1 Inbuilt Pipe
  name='any name';

money=10;

moneyDollar:string='$10.00';

now=new Date();


//Demo-2 Custom Pipe



//Demo-4
students:Student[]=[];

  student:Student;


//Student students=new Student[10];

//java code Student student=new Student()
  constructor()
  {

    this.student=new Student();
   let stud1 ={'rollNo':2,'gender':'male','name':'rock','marks':56,'sem':6,'maritalStatus':'married' }
   let stud2 ={'rollNo':3,'gender':'male','name':'john','marks':57,'sem':5,'maritalStatus':'married'}
   let stud3 ={'rollNo':4,'gender':'male','name':'brock','marks':58,'sem':4,'maritalStatus':'married' }

   let stud4 ={'rollNo':5,'gender':'female','name':'preeti','marks':57,'sem':5,'maritalStatus':'married' }
   let stud5 ={'rollNo':6,'gender':'female','name':'prachi','marks':58,'sem':4,'maritalStatus':'unmarried' }




   this.students.push(stud1);
   this.students.push(stud2);
   this.students.push(stud3);
   this.students.push(stud4);
   this.students.push(stud5);
  }
  isMarried:number=0;
marriage(){

    if(this.student.maritalStatus=='married')
  return  this.isMarried=1;
    else
  return  this.isMarried=0;
}

  addStudent(student:Student)
  {

    //let stud=new Student();


    let stud={rollNo:student.rollNo,gender:student.gender,name:student.name,marks:student.marks,sem:student.sem,maritalStatus:student.maritalStatus};

    this.students.push(stud);

  }




}
