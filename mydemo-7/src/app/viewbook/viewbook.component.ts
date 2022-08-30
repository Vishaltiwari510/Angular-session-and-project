import { Component, OnInit } from '@angular/core';
import { Book } from 'src/Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
  books:Book[]=[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
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









  deleteBook(id:number)
  {
  
  this.bookService.deleteBook(id).subscribe(
    data=>{
  
      alert('car deleted');
      this.getBooks();
    },
    error=>{
      console.log(error);
    }
  )  
  }
  
}
