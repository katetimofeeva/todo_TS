export type TodosState = {
  todos: any[];
  marker: string;
};

const initialState = {
  todos: [],
  marker: "all",
};
type TodoAction = {
  type: string;
  payload?: any;
};

function reducer(
  state: TodosState = initialState,
  action: TodoAction

  // { type, id, description, completed, marker, attribute }
): TodosState {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        todos: [...state.todos, action.payload.todos],
        // ...state.todos,
        // { id: id, description: description, completed: false },
      };

    case "DELETE_TASK":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id),
        // state.todos.filter((item) => item.id !== action.id),
      }; //[]

    case "TOGGLE_COMPLETE_TASK":
      return {
        ...state,
        // todos: action.payload.todos,
        todos: state.todos.map((item) => {
          if (action.payload.id === item.id) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        }),
      };

    case "EDIT_TASK":
      return {
        ...state,
        // todos: action.payload.todos,
        todos: state.todos.map((item) => {
          if (action.payload.id === item.id) {
            return {
              ...item,
              description: action.payload.description,
            };
          }
          return item;
        }),
      };

    case "COMPLETED_ALL_TASKS":
      return {
        ...state,
        // todos: action.payload.todos,
        todos: state.todos.map((item) => {
          return {
            ...item,
            completed: !action.payload.completed,
          };
        }),
      };

    case "SET_MARKER":
      return {
        ...state,
        marker: action.payload.marker,
      };

    case "DELETE_ALL_TASKS":
      return {
        ...state,
        todos: state.todos.filter((item) => !item.completed),
        marker: "all",
      };

    default:
      return state;
  }
}

export default reducer;
