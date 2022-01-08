import { actionConstants } from "./Action";

const initialState = {
  todos: [],
  isLoading: true,
  isError: false,
};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case actionConstants.GET_TODO_REQUEST:
      return { ...state, isLoading: true };
    case actionConstants.GET_TODO_SUCCESS:
      return { ...state, todos: action.payload.todos, isLoading: false };
    case actionConstants.GET_TODO_FAILURE:
      return { ...state, isError: true };
    case actionConstants.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case actionConstants.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action?.payload.id),
      };
    case actionConstants.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: !item.status }
            : item
        ),
      };
    case actionConstants.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, title: action.payload.title }
            : item
        ),
      };
    default:
      return state;
  }
}
