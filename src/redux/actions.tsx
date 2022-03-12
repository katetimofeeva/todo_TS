import { TodoItem } from "../types/Types";

enum TodoActionType {
  ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
  TOGGLE_COMPLETE_TASK = "TOGGLE_COMPLETE_TASK",
  EDIT_TASK = "EDIT_TASK",
  COMPLETED_ALL_TASKS = "COMPLETED_ALL_TASKS",
  DELETE_ALL_TASK = "DELETE_ALL_TASK",
  SET_MARKER = "SET_MARKER",
}

export const addTask = (data: TodoItem) => {
  return {
    type: TodoActionType.ADD_TASK,
    payload: { todos: data },
  };
};

export const deleteTask = (id: string) => {
  return {
    type: TodoActionType.DELETE_TASK,
    payload: { id: id },
  };
};

export const toggleTask = (id: string) => {
  return {
    type: TodoActionType.TOGGLE_COMPLETE_TASK,
    payload: { id: id },
  };
};

export const editTask = (id: string, value: string) => {
  return {
    type: TodoActionType.EDIT_TASK,
    payload: { id: id, description: value },
  };
};

export const completedAllTasks = (completed: boolean) => {
  return {
    type: TodoActionType.COMPLETED_ALL_TASKS,
    payload: { completed: completed },
  };
};

export const deleteAllTask = (data: TodoItem[]) => {
  return {
    type: TodoActionType.DELETE_ALL_TASK,
    payload: { todos: data },
  };
};

export const setMarker = (marker: string) => {
  return {
    type: TodoActionType.SET_MARKER,
    payload: { marker: marker },
  };
};
