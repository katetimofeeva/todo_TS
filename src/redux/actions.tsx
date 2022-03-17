import { TodoItem } from "../types/Types";

export enum TodoActionType {
  ADD_TASK = "ADD_TASK",
  ADD_TASKS_TO_LIST = "ADD_TASKS_TO_LIST",
  DELETE_TASK = "DELETE_TASK",
  DELETE_TASK_TO_LIST = "DELETE_TASK_TO_LIST",
  TOGGLE_COMPLETE_TASK = "TOGGLE_COMPLETE_TASK",
  TOGGLE_COMPLETE_TASK_TO_LIST = "TOGGLE_COMPLETE_TASK_TO_LIST",
  EDIT_TASK = "EDIT_TASK",
  EDIT_TASK_TO_LIST = "EDIT_TASK_TO_LIST",
  COMPLETED_ALL_TASKS = "COMPLETED_ALL_TASKS",
  COMPLETED_ALL_TASKS_TO_LIST = "COMPLETED_ALL_TASKS_TO_LIST",
  DELETE_ALL_TASKS = "DELETE_ALL_TASK",
  DELETE_ALL_TASKS_TO_LIST = "DELETE_ALL_TASKS_TO_LIST",
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
    type: TodoActionType.ADD_TASK,
    payload: { description: value },
  };
};

export const addTasksToList = (todos: TodoItem[]) => {
  return {
    type: TodoActionType.ADD_TASKS_TO_LIST,
    payload: { todos: todos },
  };
};

export const deleteTask = (id: string) => {
  return {
    type: TodoActionType.DELETE_TASK,
    payload: { id },
  };
};
export const deleteTaskToList = (todos?: TodoItem[]) => {
  return {
    type: TodoActionType.DELETE_TASK_TO_LIST,
    payload: { todos: todos },
  };
};

export const toggleTask = (id: string, completed: boolean) => {
  return {
    type: TodoActionType.TOGGLE_COMPLETE_TASK,
    payload: { id, completed },
  };
};

export const toggleTaskToList = (todos: TodoItem[]) => {
  return {
    type: TodoActionType.TOGGLE_COMPLETE_TASK_TO_LIST,
    payload: { todos },
  };
};

export const editTask = (id: string, value: string) => {
  return {
    type: TodoActionType.EDIT_TASK,
    payload: { id, description: value },
  };
};

export const editTaskToList = (todos: TodoItem[]) => {
  return {
    type: TodoActionType.EDIT_TASK_TO_LIST,
    payload: { todos },
  };
};

export const completedAllTasks = (completed: boolean) => {
  return {
    type: TodoActionType.COMPLETED_ALL_TASKS,
    payload: { completed },
  };
};

export const completedAllTasksToList = (todos: TodoItem[]) => {
  return {
    type: TodoActionType.COMPLETED_ALL_TASKS_TO_LIST,
    payload: { todos: todos },
  };
};

export const deleteAllTask = (data: TodoItem[]) => {
  return {
    type: TodoActionType.DELETE_ALL_TASKS,
    payload: { todos: data },
  };
};

export const deleteAllTaskToList = (data: TodoItem[]) => {
  return {
    type: TodoActionType.DELETE_ALL_TASKS_TO_LIST,
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
