import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListPageComponent } from './components/pages/product-list-page/product-list-page.component';
import { TodoListPageComponent } from './components/pages/todo-list-page/todo-list-page.component';

const routes: Routes = [
  { path: 'todo', component: TodoListPageComponent },
  { path: 'products', component: ProductListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
