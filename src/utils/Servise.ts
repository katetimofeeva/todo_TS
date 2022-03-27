import axiosInstanse from "./API";
import { TodoItem } from "../types/Types";

const loginUser = async (value: { email: string; password: string }) => {
  await axiosInstanse.post(`/login`, value);
};

const addTodoPost = async (value: string): Promise<any> => {
  await axiosInstanse.post(`/todo`, {
    description: value,
    completed: false,
  });
};

const deleteItem = async (id: string) => {
  await axiosInstanse.delete(`/delete/${id}`);
};

const completedItem = async (id: string, checked: boolean) => {
  await axiosInstanse.put(`/todo/update`, {
    id,
    checked: !checked,
  });
};

const completedAllItem = async (checked: boolean) => {
  await axiosInstanse.put(`/todos/completeAll`, {
    checked: !checked,
  });
};

const deleteAllTasks = async () => {
  await axiosInstanse.delete(`todos/deleteAll`);
};

const editItem = async (value: string, id: string) => {
  await axiosInstanse.put(`/todo/update`, {
    description: value,
    id,
  });
};

const getTodos = async (filter:string) => await axiosInstanse.get<TodoItem[]>(`/todos/?filter=${filter}`);

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
