import axiosInstanse from "./API";
import { TodoItem } from "../types/Types";

const loginUser = async (value: { email: string; password: string }) => {
  await axiosInstanse.post(`/login`, value);
};

const addTodoPost = async (value: string): Promise<any> => {
  await axiosInstanse.post(`/`, {
    description: value,
    completed: false,
  });
};

const deleteItem = async (id: string) => {
  await axiosInstanse.post(`/delete`, id);
};

const completedItem = async (id: string, checked: boolean) => {
  await axiosInstanse.post(`/checked`, {
    id,
    checked: !checked,
  });
};

const completedAllItem = async (checked: boolean) => {
  await axiosInstanse.post(`/completed`, {
    checked: !checked,
  });
};

const deleteAllTasks = async () => {
  await axiosInstanse.post(`/deleteAllCompleted`);
};

const editItem = async (value: string, id: string) => {
  await axiosInstanse.post(`/edit`, {
    description: value,
    id,
  });
};

const getTodos = async () => await axiosInstanse.get<TodoItem[]>(`/`);

export {
  getTodos,
  addTodoPost,
  deleteItem,
  completedItem,
  completedAllItem,
  deleteAllTasks,
  editItem,
  loginUser,
};
