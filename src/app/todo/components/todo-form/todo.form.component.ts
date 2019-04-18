import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../model/todo.type';


@Component({
  selector: 'todo-form',
  templateUrl: './todo.form.component.html',
  styleUrls: ['./todo.form.component.scss']
})
export class TodoFormComponent {
  
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() todo: EventEmitter<Todo> = new EventEmitter<Todo>();

  closeTodo(): void {
    this.close.emit(true);
  }
  addTodo(title: string): void {
    if (!title) return;
    this.todo.emit({
      id: "" + new Date().getTime(),
      title: title
    })
  }
}
