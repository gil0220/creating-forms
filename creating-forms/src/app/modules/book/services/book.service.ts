import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: any[] = [
    {
      id: 1977,
      name: 'The Shining',
      author: 'Stephen Edwin King',
      isbn: '2013'

    },

    {
      id: 1,
      name: 'Memory Man',
      author: 'David Baldacci',
      isbn: '2015'

    },

    {
      id: 1997,
      name: 'Harry Potter',
      author: 'J.K. Rowling',
      isbn: '2007'

    },

    {
      id: 1979,
      name: 'Kane and Abel',
      author: 'Jeffrey Archer',
      isbn: '2023'

    },

    {
      id: 1949,
      name: 'The Eye of the Needle',
      author: 'Ken Follett',
      isbn: '160'

    }

  ];

  constructor() {}

  getBooks(){
    return this.books
  }
}

