import { Component } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { log } from 'util';

@Component({
  selector: 'my-todo-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  todos: Array<Todo>;
  constructor() {
    this.todos = [{ id: "1", title: "Purchase protein" },{ id: "2", title: "Purchase Meat" },{ id: "3", title: "Purchase Milk" }]
  }
  addTodo(todo:Todo):void {
    console.log(todo);
    this.todos.push(todo);
  }
  update(todo:Todo):void {
    console.log(todo);
  }
  removeTodo(id: string):void {
    this.todos = this.todos.filter((todo) => todo.id === id)
  }
}
