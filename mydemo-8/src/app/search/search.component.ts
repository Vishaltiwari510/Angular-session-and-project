import { Component, OnInit } from '@angular/core';
import { Article } from 'src/Article';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   }
  
  
   articles:Article[]=[];
  
  search='';
   searchNews()
  {

    this.newsService.searchNews(this.search).subscribe(
  
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
