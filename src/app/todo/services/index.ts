

import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
    map, catchError
} from 'rxjs/operators';
interface TodosResponse {
    todos: Todo[]
}

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    constructor(private http: HttpClient) { }

    getTodo(): Observable<Todo[]> {
        const TODO_API = "https://raw.githubusercontent.com/azeemchauhan/mock-api/master/todo.json"
        return this.http.get<TodosResponse>(TODO_API)
        .pipe(map((response: TodosResponse) => response.todos))
        .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
}