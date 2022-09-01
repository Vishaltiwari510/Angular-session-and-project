import { Component, OnInit } from '@angular/core';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-trendinggif',
  templateUrl: './trendinggif.component.html',
  styleUrls: ['./trendinggif.component.css']
})
export class TrendinggifComponent implements OnInit {

  constructor(private newsService : NewsService) { }

  ngOnInit(): void {

    this.getTrending();

  }

gifs: String[]=[];

  getTrending(){
    this.newsService.trendingGif().subscribe(
      data=>{
        let myJson = JSON.parse(JSON.stringify(data));

        for(let i=0; i<myJson.data.length; i++){
          this.gifs[i] = myJson.data[i].images.downsized.url;
        }
        
       // console.log(this.gifs[0].url);
        
      },
      error=>{
        console.log(error);
        
      }
    )  
  }






}
