import { TodoItem } from "../types/Types";
import { GetTodos } from "../utils/redux";
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
    case GetTodos.type.SUCCESS:
      return {
        ...state,
        todos: action.payload.todos,
      };

    case TodoActionType.SET_MARKER:
      return {
        ...state,
        marker: action.payload.marker,
      };

    default:
      return state;
  }
}

export default reducer;
