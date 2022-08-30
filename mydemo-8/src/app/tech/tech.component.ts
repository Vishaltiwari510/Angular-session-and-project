import { Component, OnInit } from '@angular/core';
import { Article } from 'src/Article';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

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
  this.newsService.getNewsTech().subscribe(
  
    data=>{
    
    
      let myJson= JSON.parse(JSON.stringify(data));
  
  
      this.articles=myJson.articles;
  
        // for(let i=0;i<myJson.articles.length;i++)
        // {
        //     let article=new Article();
            
        //     article.mytitle=myJson.articles[i].title;
        //     article.desc=myJson.articles[i].description;
        //     article.author=myJson.articles[i].author;
        //     article.url=myJson.articles[i].url;
        //     article.urlToImage=myJson.articles[i].urlToImage;
      
            
  
        //   this.articles.push(article);    
        // }
      
      
      
      
      
  
  
    },
    error=>{
      console.log(error);
    }
  )
  
  }
 

}
