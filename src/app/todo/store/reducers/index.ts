import { Todo } from '../../model/todo.type';
import { TodoActionUnion, TodoActionTypes } from '../actions';

export interface State {
    todo: Todo[],
    loading: boolean,
    loaded: boolean
}

const initialState = {
    todo: [],
    loading: true,
    loaded: false
}


export function reducer(state = initialState, action: TodoActionUnion): State {
    switch (action.type) {
        case TodoActionTypes.LoadTodo:
            return { ...state, loaded: false, loading: true };
        case TodoActionTypes.LoadTodoFail:
            return { ...state, loaded: true, loading: false }
        case TodoActionTypes.LoadTodoSuccess:
            return { todo: action.payload.todos, loaded: true, loading: false }
        case TodoActionTypes.AddTodo:
            return { ...state, todo: [...state.todo, action.payload.todo] };
        case TodoActionTypes.RemoveTodo:
            return { ...state, todo: state.todo.filter((todo) => todo.id !== action.payload.id) }
        case TodoActionTypes.UpdateTodo:
            return {
                ...state, todo: state.todo.map((todo) => {
                    return todo.id == action.payload.todo.id ? action.payload.todo : todo;
                })
            }
        default:
            return state;
    }
}