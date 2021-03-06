import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo.list/todo.list.component';
import { AddTodoComponent } from './components/add-todo/add.todo.component';
import { TodoFormComponent } from './components/todo.form/todo.form.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ HomeComponent, TodoComponent, TodoListComponent, AddTodoComponent, TodoFormComponent ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ HomeComponent ]
})
export class TodoModule { }
