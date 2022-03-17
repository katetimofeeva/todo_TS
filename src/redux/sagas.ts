import { takeEvery, put, call } from "redux-saga/effects";

import { TodoItem } from "../types/Types";
import { TodoActionType } from "./actions";
import {
  addTasksToList,
  deleteTaskToList,
  editTaskToList,
  completedAllTasksToList,
  toggleTaskToList,
  deleteAllTaskToList,
} from "./actions";
import {
  addTodoPost,
  getTodos,
  deleteAllTasks,
  deleteItem,
  editItem,
  completedAllItem,
  completedItem,
} from "../Utils/Servise";

type Action = {
  type: string;
  payload: {
    todos?: TodoItem;
    description?: string;
    id?: string;
    completed: boolean;
  };
};

type Data = {
  data?: { description: string; _id: string; completed: boolean }[];
};

export function* sagaWatchers() {
  yield takeEvery(TodoActionType.ADD_TASK, addWorker);
  yield takeEvery(TodoActionType.GET_TODOS, getTodosWorker);
  yield takeEvery(TodoActionType.DELETE_ALL_TASKS, deleteAllTaskWorker);
  yield takeEvery(TodoActionType.EDIT_TASK, editTaskWorker);
  yield takeEvery(TodoActionType.DELETE_TASK, deleteTaskById);
  yield takeEvery(
    TodoActionType.COMPLETED_ALL_TASKS,
    toggleCompletedAllTasksWorker
  );
  yield takeEvery(
    TodoActionType.TOGGLE_COMPLETE_TASK,
    toggleCompletedTaskWorker
  );
}

function* addWorker(action: Action) {
  const { description } = action.payload;
  // @ts-ignore
  yield call(addTodoPost, description);
  yield getTodosWorker(addTasksToList);
}

function* toggleCompletedTaskWorker(action: Action) {
  const { id, completed } = action.payload;
  // @ts-ignore
  yield call(completedItem, id, completed);
  yield getTodosWorker(toggleTaskToList);
}

function* toggleCompletedAllTasksWorker(action: Action) {
  const { completed } = action.payload;

  yield call(completedAllItem, completed);
  yield getTodosWorker(completedAllTasksToList);
}

function* deleteTaskById(action: Action) {
  const { id } = action.payload;
  // @ts-ignore
  yield call(deleteItem, id);
  yield getTodosWorker(deleteTaskToList);
}

function* editTaskWorker(action: Action) {
  const { id, description } = action.payload;
  // @ts-ignore
  yield call(editItem, description, id);
  yield getTodosWorker(editTaskToList);
}

function* deleteAllTaskWorker() {
  yield call(deleteAllTasks);
  yield getTodosWorker(deleteAllTaskToList);
}

function* getTodosWorker(request: any) {
  const data: Data = yield call(getTodos);
  yield put(request(data.data));
}

export default function* rootSaga() {
  yield sagaWatchers();
}
