import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import { LoadTodo } from '../../store';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'my-todo-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class TodoHomeComponent implements OnInit {
  todos$: Observable<Todo[]> = this.store.select<any>(fromStore.selectFeatureTodos);
  loading$: Observable<boolean>=this.store.select<any>(fromStore.selectTodosLoading);
  todos = [];
  constructor(private store: Store<fromStore.FeatureState>) { }
  ngOnInit(): void {
    this.store.dispatch(new LoadTodo());
  }
  addTodo(todo: Todo): void {
    this.store.dispatch(new fromStore.AddTodo({todo}))
  }
  update(todo: Todo): void {
    this.store.dispatch(new fromStore.UpdateTodo({todo}));
  }
  removeTodo({ id }: Todo): void {
    this.store.dispatch(new fromStore.RemoveTodo({id}));
  }
}
