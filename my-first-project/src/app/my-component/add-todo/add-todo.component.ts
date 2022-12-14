import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
 "title":String
 "desc":String
 @Output() todoAdd:EventEmitter<Todo> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo ={
      id:Math.random()*10,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo)
  }
}
