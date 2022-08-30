import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  
  getNewsHeadlines()
  {

    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=14bc0f7ff7ea47daaa0c9594eb84f120');
  }


  getSportsHeadlines()
  {

    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=14bc0f7ff7ea47daaa0c9594eb84f120');
  }

  getNewsTech()
  {

    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=14bc0f7ff7ea47daaa0c9594eb84f120');
  }

  getNewsBusiness()
  {

    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=14bc0f7ff7ea47daaa0c9594eb84f120');
  }

  getNewsHealth()
  {

    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=14bc0f7ff7ea47daaa0c9594eb84f120');
  }


  searchNews(query:string)
  {

    return this.http.get('https://newsapi.org/v2/everything?q='+query+'&apiKey=14bc0f7ff7ea47daaa0c9594eb84f120');
  }




}
