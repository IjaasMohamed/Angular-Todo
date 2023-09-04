import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  todos !: Todo[];
  constructor(){}

  ngOnInit(): void {
    this.todos = [
      {
      content:'First content',
      completed:false
      },
      {
        content:'Second content',
        completed:false
      }
    ]
  }

  toggleDone (id : number ){
    this.todos.map((v, i ) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }
  deleteTodo(id : number){
    this.todos = this.todos.filter((v,i) => i !== (id - 1) );
  }
}
