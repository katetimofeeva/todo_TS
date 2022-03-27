import { takeEvery, put, call, select } from "redux-saga/effects";

import { TodoItem } from "../types/Types";
import {
  PostTodo,
  GetTodos,
  DeleteItem,
  EditItem,
  CompletedItem,
  CompletedAllTasks,
  DeleteAllTasks,
} from "../utils/redux";
import {
  addTodoPost,
  getTodos,
  deleteAllTasks,
  deleteItem,
  editItem,
  completedAllItem,
  completedItem,
} from "../utils/Servise";

type Action = {
  type: string;
  payload: {
    todos?: TodoItem;
    description?: string;
    id?: string;
    completed: boolean;
    filter: string;
  };
};

type Data = {
  data?: { description: string; _id: string; completed: boolean }[];
};

type Store = {
  todos: TodoItem[];
  marker: string;
};

function* addWorker(action: Action) {
  try {
    // @ts-ignore
    yield call(addTodoPost, action.payload);
    yield put(PostTodo.success());
    yield put(GetTodos.request());
  } catch (err) {
    console.log(err);
    yield put(GetTodos.failed());
  }
}

function* toggleCompletedTaskWorker(action: Action) {
  try {
    const { id, completed } = action.payload;
    // @ts-ignore
    yield call(completedItem, id, completed);
    yield put(CompletedItem.success());
    yield put(GetTodos.request());
  } catch (err) {
    console.log(err);
    yield put(GetTodos.failed());
  }
}

function* toggleCompletedAllTasksWorker(action: Action) {
  try {
    const { completed } = action.payload;
    yield call(completedAllItem, completed);
    yield put(CompletedAllTasks.success());
    yield put(GetTodos.request());
  } catch (err) {
    console.log(err);
    yield put(GetTodos.failed());
  }
}

function* deleteTaskById(action: Action) {
  try {
    const { id } = action.payload;
    // @ts-ignore
    yield call(deleteItem, id);
    yield put(DeleteItem.success());
    yield put(GetTodos.request());
  } catch (err) {
    console.log(err);
    yield put(GetTodos.failed());
  }
}

function* editTaskWorker(action: Action) {
  try {
    const { id, description } = action.payload;
    // @ts-ignore
    yield call(editItem, description, id);
    yield put(EditItem.success());
    yield put(GetTodos.request());
  } catch (err) {
    console.log(err);
    yield put(GetTodos.failed());
  }
}

function* deleteAllTaskWorker() {
   try {
    yield call(deleteAllTasks);
    yield put(DeleteAllTasks.success());
    yield put(GetTodos.request());
  } catch (err) {
    console.log(err);
    yield put(GetTodos.failed);
  }
}

function* getTodosWorker() {
  try {
    const store: Store = yield select();
    const data: Data = yield call(getTodos, store.marker);
    yield put(GetTodos.success({ todos: data.data }));
  } catch (err) {
    console.log(err);
    yield put(GetTodos.failed());
  }
}

export function* sagaWatchers() {
  yield takeEvery(PostTodo.type.REQUEST, addWorker);
  yield takeEvery(GetTodos.type.REQUEST, getTodosWorker);
  yield takeEvery(DeleteAllTasks.type.REQUEST, deleteAllTaskWorker);
  yield takeEvery(EditItem.type.REQUEST, editTaskWorker);
  yield takeEvery(DeleteItem.type.REQUEST, deleteTaskById);
  yield takeEvery(
    CompletedAllTasks.type.REQUEST,
    toggleCompletedAllTasksWorker
  );
  yield takeEvery(CompletedItem.type.REQUEST, toggleCompletedTaskWorker);
}

export default function* rootSaga() {
  yield sagaWatchers();
}
