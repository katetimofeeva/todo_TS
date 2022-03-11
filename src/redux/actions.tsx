import { TodoItem } from "../types/Types";

export const addTaskActionCreator = (data: TodoItem) => {
  return {
    type: "ADD_TASK",
    payload: { todos: data },
  };
};

export const deleteTaskActionCreator = (id: string) => {
  return {
    type: "DELETE_TASK",
    payload: { id: id },
  };
};

export const toggleTaskActionCreator = (id: string) => {
  return {
    type: "TOGGLE_COMPLETE_TASK",
    payload: { id: id },
  };
};

export const editTaskActionCreator = (id: string, value: string) => {
  return {
    type: "EDIT_TASK",
    payload: { id: id, description: value },
  };
};

export const completedAllTaskActionCreator = (completed: boolean) => {
  return {
    type: "COMPLETED_ALL_TASKS",
    payload: { completed: completed },
  };
};

export const deleteAllTaskActionCreator = (data: TodoItem[]) => {
  return {
    type: "DELETE_ALL_TASKS",
    payload: { todos: data },
  };
};

export const setMarkerActionCreator = (marker: string) => {
  return {
    type: "SET_MARKER",
    payload: { marker: marker },
  };
};
// export const DELETE_TASK = "DELETE_TASK";
// export const TOGGLE_COMPLETE_TASK = "TOGGLE_COMPLETE_TASK";
// export const EDIT_TASK = "EDIT_TASK";
// export const COMPLETED_ALL_TASKS = "COMPLETED_ALL_TASKS";

// export const DELETE_ALL_TASKS = "DELETE_ALL_TASKS";

// export const SET_MARKER = "SET_MARKER";
