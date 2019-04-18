import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../model/todo.type';

@Component({
  selector: 'add-todo',
  templateUrl: './add.todo.component.html',
  styleUrls: ['./add.todo.component.scss']
})
export class AddTodoComponent {
  isOpen: boolean = false;
  @Output() todo: EventEmitter<Todo> = new EventEmitter<Todo>();
  constructor() { }
  openTodoForm(): void {
    this.isOpen = true;
  }
  closeForm(open: boolean):void {
    this.isOpen = false;
  }
  newTodoData(todo: Todo):void {
    this.todo.emit(todo);
  }
}
