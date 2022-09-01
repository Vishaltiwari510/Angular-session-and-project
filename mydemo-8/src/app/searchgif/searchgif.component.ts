import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-searchgif',
  templateUrl: './searchgif.component.html',
  styleUrls: ['./searchgif.component.css']
})
export class SearchgifComponent implements OnInit {

  constructor(private newsService : NewsService) { }

  ngOnInit(): void {

    this.getSearchGif();

  }

gifs: String[]=[];
search='';
  getSearchGif(){
    this.newsService.searchGif(this.search).subscribe(
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
