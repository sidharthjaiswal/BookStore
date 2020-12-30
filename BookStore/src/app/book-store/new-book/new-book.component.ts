import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  books: Book[] = [];
  constructor() { }




  ngOnInit(): void {
  }

}
