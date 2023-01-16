import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class BookRouteModule { }
