import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarComponent } from './components/organisms/top-bar/top-bar.component';
import { ListComponent } from './components/organisms/list/list.component';
import { AlertsComponent } from './components/molecules/alerts/alerts.component';
import { ProductListComponent } from './components/templates/product-list/product-list.component';
import { TodoListComponent } from './components/templates/todo-list/todo-list.component';
import { CardComponent } from './components/organisms/card/card.component';

// export const moduleDeclarations = [
//   TopBarComponent,
//   ListComponent,
//   AlertsComponent,
//   ProductListComponent,
// ];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ListComponent,
    AlertsComponent,
    ProductListComponent,
    TodoListComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
