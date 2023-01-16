import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: any[] = [
    {
      id: 1977,
      title: 'Billboard',
      description: 'Unrivaled Reporting',
      author: 'Music Industry',
      isbn: '2013'

    },

    {
      id: 1,
      title: 'TechCrunch',
      description: 'Technology',
      author: 'techcruch.com',
      isbn: '2015'

    },

    {
      id: 1997,
      title: 'Wired',
      description: 'Latest in tech',
      author: 'wired.com',
      isbn: '2007'

    }

  ];

  constructor() {}

  getBlogs(){
    return this.blogs
  }
}