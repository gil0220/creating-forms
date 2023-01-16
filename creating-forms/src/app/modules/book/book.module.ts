import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookRouteModule } from './book-route.module';



@NgModule({
  declarations: [
    BookListComponent, 
    BookItemComponent],
    
  imports: [
    CommonModule,
    BookRouteModule
  ]
})
export class BookModule { }
