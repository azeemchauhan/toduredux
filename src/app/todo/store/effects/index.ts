import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TodoService } from '../../services';
import {  TodoActionTypes, LoadTodoSuccess, LoadTodoFail } from '../actions';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { Todo } from '../../model/todo.type';
import { of } from 'rxjs';

@Injectable()
export class TodoEffect {
    constructor(private actions$: Actions, private todoService: TodoService){};

    @Effect()
    loadTodos$ = this.actions$
    .pipe(
        ofType(TodoActionTypes.LoadTodo),
        mergeMap(() => this.todoService.getTodo()
        .pipe(
            map((todos:Todo[]) => new LoadTodoSuccess({todos})),
            catchError((error) => of(new LoadTodoFail()))
            )
    ));
}