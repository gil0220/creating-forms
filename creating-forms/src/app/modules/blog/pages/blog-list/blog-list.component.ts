import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit{
  blogs: any[] | undefined;

  constructor(private bg: BlogService){}

  ngOnInit(){
    this.blogs = this.bg.getBlogs()
  }
}

