import { Component, Input } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {

  @Input() book: any;

  addBook(){
    console.log('Adding book: ${this.books.name}')
  }

  deleteBook(){
    console.log('Removing book: ${this.books.name}')
  }
}
