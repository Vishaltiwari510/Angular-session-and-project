import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Items } from 'src/Items';
@Component({
  selector: 'app-calorietracker',
  templateUrl: './calorietracker.component.html',
  styleUrls: ['./calorietracker.component.css']
})
export class CalorietrackerComponent implements OnInit {
  items:Items[]=[];
  searchcal='';

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getnutrient();
  }



  getnutrient(){
    
this.newsService.getCalory(this.searchcal).subscribe(
  data=>{
    let myJson = JSON.parse(JSON.stringify(data));  
//  for(let i=0; i<myJson.items.length; i++){
  this.items = myJson.items;
  console.log(this.items);
 

 
 
  },
  error=>{
    console.log(error);
    
  }
)


  }

}
