import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogRouteModule } from './blog-route.module';


@NgModule({
  declarations: [BlogItemComponent, BlogListComponent],
  imports: [
    CommonModule,
    BlogRouteModule
  ]
})
export class BlogModule { }
