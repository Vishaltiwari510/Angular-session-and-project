import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  userName='';
  password='';

  validateLogin(){

    if(this.userName=='admin' && this.password=='admin123')
    {
      alert('admin logged in')
      this.router.navigate(['main',this.userName,this.password])
      
      localStorage.setItem('userType','admin');

    }
    else if(this.userName=='user' && this.password=='user123')
    {
      alert('user logged in')
      this.router.navigate(['main',this.userName,this.password])
      localStorage.setItem('userType','user');
    }
    else
    {
      alert('invalid login')
    }
  }

}

