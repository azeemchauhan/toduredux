import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Todo } from '../../model/todo.type';



@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() remove:EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() update:EventEmitter<Todo> = new EventEmitter<Todo>();
  isOpen:boolean = false;
  editTodo():void {
    this.isOpen = true;
  }
  closeEdit(value: boolean):void {
    this.isOpen = false;
  }
  updateTodo(todo:Todo){
    this.update.emit(todo)
    this.isOpen = false;
  }
  removeTodo(todo: Todo): void {
    this.remove.emit(todo);
  }
}
