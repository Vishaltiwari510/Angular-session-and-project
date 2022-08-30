import { Component, OnInit } from '@angular/core';
import { Article } from 'src/Article';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private newsService:NewsService){

  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getNews();
  }
  
  
   articles:Article[]=[];
  
  abc:string='';
  getNews()
  {
  this.newsService.getSportsHeadlines().subscribe(
  
    data=>{
  
      let myJson= JSON.parse(JSON.stringify(data));
      this.articles=myJson.articles;
    },
    error=>{
      console.log(error);
    }
  )
  
  }
  
 
}
