import { TodoItem } from "../types/Types";

export enum TodoActionType {
  POST_TODO = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
  TOGGLE_COMPLETE_TASK = "TOGGLE_COMPLETE_TASK",
  EDIT_TASK = "EDIT_TASK",
  COMPLETED_ALL_TASKS = "COMPLETED_ALL_TASKS",
  DELETE_ALL_TASKS = "DELETE_ALL_TASK",
  SET_MARKER = "SET_MARKER",
  SHOW_LOADER = "SHOW_LOADER",
  HIDE_LOADER = "HIDE_LOADER",
  GET_TODOS = "GET_TODOS",
}

export const getTodosAction = (todos: TodoItem[]) => {
  return {
    type: TodoActionType.GET_TODOS,
    payload: { todos: todos },
  };
};

export const addTask = (value: string) => {
  return {
    type: TodoActionType.POST_TODO,
    payload: { description: value },
  };
};

export const deleteTask = (id: string) => {
  return {
    type: TodoActionType.DELETE_TASK,
    payload: { id },
  };
};

export const toggleTask = (id: string, completed: boolean) => {
  return {
    type: TodoActionType.TOGGLE_COMPLETE_TASK,
    payload: { id, completed },
  };
};

export const editTask = (id: string, value: string) => {
  return {
    type: TodoActionType.EDIT_TASK,
    payload: { id, description: value },
  };
};

export const completedAllTasks = (completed: boolean) => {
  return {
    type: TodoActionType.COMPLETED_ALL_TASKS,
    payload: { completed },
  };
};

export const deleteAllTask = (data: TodoItem[]) => {
  return {
    type: TodoActionType.DELETE_ALL_TASKS,
    payload: { todos: data },
  };
};

export const setMarker = (marker: string) => {
  return {
    type: TodoActionType.SET_MARKER,
    payload: { marker },
  };
};

export const showLoader = () => {
  return {
    type: TodoActionType.SHOW_LOADER,
  };
};

export const hiddenLoader = () => {
  return {
    type: TodoActionType.HIDE_LOADER,
  };
};
