import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './my-component/todo/todo.component';
import { TodoItemComponent } from './my-component/todo-item/todo-item.component';
import { AddTodoComponent } from './my-component/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './my-component/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
