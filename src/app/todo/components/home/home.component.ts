import { Component } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { TodoService } from '../../services';


@Component({
  selector: 'my-todo-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  todos: Array<Todo>;
  constructor(private todoService:TodoService) {
    this.todoService.getTodo().subscribe((response:Todo[]) => {
      this.todos = response;
    })
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
