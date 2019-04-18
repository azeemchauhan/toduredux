import { Component, Input } from '@angular/core';
import { Todo } from '../../model/todo.type';



@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo: Todo;
  isOpen:boolean = false;
  remove(): void {

  }
  update():void {
    this.isOpen = true;
  }
  closeForm(value: boolean):void {
    this.isOpen = false;
  }
}
