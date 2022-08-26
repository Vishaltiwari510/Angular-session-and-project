import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maincomp',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private actv:ActivatedRoute) { }

  ngOnInit(): void {
    this.readPathVar();
  }

  userName='';
  password='';

  readPathVar()
  {


    this.actv.params.subscribe(

     data =>{
    this.userName=  data['userId'];
     this.password=data['pass']; 
  }

    );

  }

}

