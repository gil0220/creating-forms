import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {

  @Input() blog: any;

  addBlog(){
    console.log('Adding blog: ${this.blog.name}')
  }

  deleteBlog(){
    console.log('Removing blog: ${this.blog.name}')
  }
}

