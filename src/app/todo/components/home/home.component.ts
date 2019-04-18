import { Component, Output, EventEmitter } from '@angular/core';
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
    this.todos.push(todo);
  }
  update(updatedTodo:Todo):void {
    console.log(updatedTodo);
    this.todos = this.todos.map((todo: Todo) => {
      return (todo.id === updatedTodo.id)? updatedTodo:todo;;
    })
  }
  removeTodo({ id }: Todo):void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
