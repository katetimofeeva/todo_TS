import axios from "axios";

import axiosInstanse from "./API";
import { TodoItem } from "../types/Types";

const loginUser = async (value: { email: string; password: string }) => {
  try {
    await axios.post(` ${axiosInstanse.defaults.baseURL}/login`, value);
  } catch (error) {
    console.error(error);
  }
};

const addTodoPost = async (value: string): Promise<any> => {
  try {
    await axios.post(` ${axiosInstanse.defaults.baseURL}`, {
      description: value,
      completed: false,
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteItem = async (id: string) => {
  try {
    await axios.post(` ${axiosInstanse.defaults.baseURL}/delete`, id);
  } catch (error) {
    console.error(error);
  }
};

const completedItem = async (id: string, checked: boolean) => {
  try {
    await axios.post(`${axiosInstanse.defaults.baseURL}/checked`, {
      id,
      checked: !checked,
    });
  } catch (error) {
    console.error(error);
  }
};

const completedAllItem = async (checked: boolean) => {
  try {
    await axios.post(`${axiosInstanse.defaults.baseURL}/completed`, {
      checked: !checked,
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteAllTasks = async () => {
  try {
    await axios.post(`${axiosInstanse.defaults.baseURL}/deleteAllCompleted`);
  } catch (error) {
    console.error(error);
  }
};

const editItem = async (value: string, id: string) => {
  try {
    await axios.post(`${axiosInstanse.defaults.baseURL}/edit`, {
      description: value,
      id,
    });
  } catch (error) {
    console.error(error);
  }
};

const getTodos = async () => {
  try {
    const result = await axios.get<TodoItem[]>(
      `${axiosInstanse.defaults.baseURL}`
    );

    return result;
  } catch (error) {
    console.error(error);
  }
};

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
