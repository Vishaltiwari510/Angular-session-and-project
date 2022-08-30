import { Component, OnInit } from '@angular/core';
import { Book } from 'src/Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent  implements OnInit {
  books:Book[]=[];
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  book=new Book();
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

  
  addBook()
  {
  
  this.bookService.addBook(this.book).subscribe(
    data=>{
  
     
      this.getBooks();

    },
    error=>{
      console.log(error);
    }
  )  
  }



  
 

  
  
  
}
