import { createSelector, createFeatureSelector, ActionReducer, ActionReducerMap } from '@ngrx/store';
import * as fromTodos from '../reducers'
import { Todo } from '../../model/todo.type';

export interface FeatureState {
    todo:Todo[],
    loading:boolean,
    loaded:boolean
}
export interface ApplicationState {
    todos: FeatureState
}
export const reducers: ActionReducerMap<ApplicationState> = {
    todos: fromTodos.reducer
}
const featureSelector = createFeatureSelector<ApplicationState, FeatureState>('todos');  //please note:- 'feature' should be slice of AppState


export const getTodosLoading  = (state:FeatureState) => state.loading;
export const getTodosLoaded  = (state:FeatureState) => state.loaded;
export const getTodos  = (state:FeatureState) => state.todo;




export const selectFeatureTodos = createSelector(featureSelector, getTodos);
export const selectTodosLoading = createSelector(featureSelector, getTodosLoading);
export const selectTodosLoaded = createSelector(featureSelector, getTodosLoaded);
