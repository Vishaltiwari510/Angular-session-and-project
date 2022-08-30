import { Component, OnInit } from '@angular/core';
import { Book } from 'src/Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  books:Book[]=[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  searchId:number=0;

  bookSearch=new Book();
  isVisible=false;
  searchData()
  {
  
    this.bookService.searchBookById(this.searchId).subscribe(
  
      data=>{
  
  this.bookSearch=data;
  this.isVisible=true;    
  },
      error=>{
        console.log(error)
      alert('data not found')
      }
  
    )
  }
  
  getBooks()
  {
  
    this.bookService.getBooks().subscribe(
      data=>{
  
        this.books=data;
      },
      error=>{
        console.log(error)
      }
    )
  
  
  }
  
  
  
  updateBook()
  {
  
    this.bookService.updateBook(this.searchId,this.bookSearch).subscribe(
  data=>{
   
    this.getBooks();
  },
  error=>{
    console.log(error)
  }
  
    )
  }
  
}
