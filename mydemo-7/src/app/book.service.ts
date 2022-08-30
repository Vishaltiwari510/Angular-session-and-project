import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/Book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public http:HttpClient) { }

  getBooks()
  {

    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  addBook(book:Book)
  {

    return this.http.post<Book>('http://localhost:3000/books',book);
  }


  deleteBook(id:number)
  {
    //return this.http.delete('http://localhost:3000/cars/${id}');

    return this.http.delete(`http://localhost:3000/books/${id}`);
  }

  searchBookById(id:number)
  {

    return this.http.get<Book>(`http://localhost:3000/books/${id}`);
  }


  updateBook(id:number,book:Book)
  {

    return this.http.put<Book>(`http://localhost:3000/books/${id}`,book);
  }
}
