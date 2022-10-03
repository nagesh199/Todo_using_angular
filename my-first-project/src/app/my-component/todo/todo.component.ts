import { Component, OnInit } from '@angular/core';
import {Todo} from "../../todo"
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  "todos" :Todo[]

  constructor() {
    this.todos = [
        {
          id:1,
          title:"Frist Title",
          desc:"Description",
          active:true
        },
        {
          id:2,
          title:"Second Title",
          desc:"One Description",
          active:true
        }
    ]
  }
   
  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
  }
  addTodo(todo:Todo){
    this.todos.push(todo)
  }
}
