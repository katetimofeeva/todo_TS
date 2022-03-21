import { TodoActionType } from "../redux/actions";

export type Action<T> = {
  payload: T;
  type: string;
};

export type AsyncAction<T, F> = {
  payload: T;
  type: string;
  next: (err?: string | null, data?: F) => void;
};

export const createAction = (type: string) => {
  const create = <T>(payload?: T): Action<T | undefined> => ({
    payload,
    type,
  });
  return Object.assign(create, { type });
};

export const createActions = (type: string) => {
  const types = createRequestActionTypes(type);
  return {
    request: createAction(types.REQUEST),
    success: createAction(types.SUCCESS),
    failed: createAction(types.FAILED),
    type: types,
    types: Object.values(types),
  };
};

export const createRequestActionTypes = (name: string) => ({
  REQUEST: `${name}_REQUEST`,
  SUCCESS: `${name}_SUCCESS`,
  FAILED: `${name}_FAILED`,
});

export const createAsyncAction = async <T, K>(dispatch: any, action: any) =>
  await new Promise((resolve, reject) =>
    dispatch({
      ...action,
      next: (err?: string | null, data?: T) => {
        if (err) {
          reject(err);
        }
        if (data) {
          resolve(data);
        }
      },
    })
  );
  
export const PostTodo = createActions(TodoActionType.POST_TODO);
export const GetTodos = createActions(TodoActionType.GET_TODOS);
export const DeleteItem = createActions(TodoActionType.DELETE_TASK);
export const EditItem = createActions(TodoActionType.EDIT_TASK);
export const CompletedItem = createActions(TodoActionType.TOGGLE_COMPLETE_TASK);
export const CompletedAllTasks = createActions(
  TodoActionType.COMPLETED_ALL_TASKS
);
export const DeleteAllTasks = createActions(TodoActionType.DELETE_ALL_TASKS);
