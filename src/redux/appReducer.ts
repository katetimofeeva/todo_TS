import { TodoActionType } from "./actions";

const initialState = {
  loading: false,
};

export const appReducer = (state = initialState, action:{type: string}) => {
  switch (action.type) {
    case TodoActionType.SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case TodoActionType.HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
