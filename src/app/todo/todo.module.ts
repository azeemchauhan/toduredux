import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoHomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo.list/todo.list.component';
import { AddTodoComponent } from './components/add-todo/add.todo.component';
import { TodoFormComponent } from './components/todo.form/todo.form.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffect, reducers } from './store';
@NgModule({
  declarations: [ TodoHomeComponent, TodoComponent, TodoListComponent, AddTodoComponent, TodoFormComponent ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('todos', reducers),
    EffectsModule.forFeature([ TodoEffect ])
  ],
  exports: [ TodoHomeComponent ]
})
export class TodoModule {}
