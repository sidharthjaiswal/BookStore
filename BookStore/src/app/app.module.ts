import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { NewBookComponent } from './book-store/new-book/new-book.component';
import { BookListComponent } from './book-store/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookStoreComponent,
    NewBookComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
