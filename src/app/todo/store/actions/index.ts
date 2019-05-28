import { Action }  from '@ngrx/store';
import { Todo } from '../../model/todo.type';

export enum TodoActionTypes {
    LoadTodo='[Todo] Todo Load',
    LoadTodoFail='[Todo] Todo Fail',
    LoadTodoSuccess='[Todo] Todo Success',
    AddTodo='[Todo] Todo Add',
    RemoveTodo='[Todo] Todo Remove',
    UpdateTodo='[Todo] Todo Update'
} 

export class LoadTodo implements Action {
    readonly type = TodoActionTypes.LoadTodo;
}
export class LoadTodoFail implements Action {
    readonly type = TodoActionTypes.LoadTodoFail;
}
export class LoadTodoSuccess implements Action {
    readonly type = TodoActionTypes.LoadTodoSuccess;
    constructor(public payload:{todos:Todo[]}){}
}
export class AddTodo implements Action {
    readonly type = TodoActionTypes.AddTodo;
    constructor(public payload: { todo:Todo }){ };
}
export class RemoveTodo implements Action {
    readonly type = TodoActionTypes.RemoveTodo;
    constructor(public payload: { id:string }){ };
}
export class UpdateTodo implements Action {
    readonly type = TodoActionTypes.UpdateTodo;
    constructor(public payload: { todo:Todo }){ };
}


export type TodoActionUnion = LoadTodo| LoadTodoFail | LoadTodoSuccess | AddTodo | RemoveTodo | UpdateTodo;