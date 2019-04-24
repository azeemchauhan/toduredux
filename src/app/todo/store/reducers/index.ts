import { Todo } from '../../model/todo.type';
import { TodoActionUnion, TodoActionTypes } from '../actions';

export interface State {
    todo:Todo[],
    loading:boolean,
    loaded:boolean
}

const initialState = {
    todo:[],
    loading:true,
    loaded:false
}


export function reducer(state=initialState, action:TodoActionUnion): State {
    switch (action.type) {
        case TodoActionTypes.LoadTodo:
            return { ...state, loaded:false,loading:true };
        case TodoActionTypes.AddTodo:
            return state;
        case TodoActionTypes.RemoveTodo:
            return state;
        case TodoActionTypes.UpdateTodo:
            return state;
        default:
        return state;
    }
 }