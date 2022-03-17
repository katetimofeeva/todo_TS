import { TodoItem } from "../types/Types";
import { TodoActionType } from "../redux/actions";

export type TodosState = {
  todos: TodoItem[];
  marker: string;
};

const initialState = {
  todos: [],
  marker: "all",
};
type TodoAction = {
  type: string;
  payload: any;
};

function reducer(
  state: TodosState = initialState,
  action: TodoAction
): TodosState {
  switch (action.type) {
    case TodoActionType.ADD_TASKS_TO_LIST:
      return {
        ...state,
        todos: action.payload.todos,
      };

    case TodoActionType.DELETE_TASK_TO_LIST:
      return {
        ...state,
        todos: action.payload.todos,
      };

    case TodoActionType.TOGGLE_COMPLETE_TASK_TO_LIST:
      return {
        ...state,
        todos: action.payload.todos,
      };

    case TodoActionType.EDIT_TASK_TO_LIST:
      return {
        ...state,
        todos: action.payload.todos,
      };

    case TodoActionType.COMPLETED_ALL_TASKS_TO_LIST:
      return {
        ...state,
        todos: action.payload.todos,
      };

    case TodoActionType.SET_MARKER:
      return {
        ...state,
        marker: action.payload.marker,
      };

    case TodoActionType.DELETE_ALL_TASKS_TO_LIST:
      return {
        ...state,
        todos: action.payload.todos,
        marker: "all",
      };

    default:
      return state;
  }
}

export default reducer;
