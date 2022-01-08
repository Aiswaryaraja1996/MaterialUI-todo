export const actionConstants = {
    GET_TODO_REQUEST: "GET_TODO_REQUEST",
    GET_TODO_SUCCESS: "GET_TODO_SUCCESS",
    GET_TODO_FAILURE: "GET_TODO_FAILURE",
    ADD_TODO: "ADD_TODO",
    DELETE_TODO: "DELETE_TODO",
    TOGGLE_TODO: "TOGGLE_TODO",
    EDIT_TODO: "EDIT_TODO",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
  };
  
  export const loginSuccess = (token) => {
    return {
      type: actionConstants.LOGIN_SUCCESS,
      payload: { token: token },
    };
  };
  
  export const getTodoRequest = () => {
    return {
      type: actionConstants.GET_TODO_REQUEST,
      payload: { isLoading: true },
    };
  };
  
  export const getTodoSuccess = (todos) => {
    return {
      type: actionConstants.GET_TODO_SUCCESS,
      payload: { todos: todos },
    };
  };
  
  export const getTodoFailure = () => {
    return {
      type: actionConstants.GET_TODO_FAILURE,
      payload: {
        isError: true,
      },
    };
  };
  export const addTodo = ({ title, status, id }) => {
    return {
      type: actionConstants.ADD_TODO,
      payload: { title, status, id },
    };
  };
  
  export const deleteTodo = (id) => {
    return {
      type: actionConstants.DELETE_TODO,
      payload: { id: id },
    };
  };
  
  export const toggleTodo = (id) => {
    return { type: actionConstants.TOGGLE_TODO, payload: { id: id } };
  };
  
  export const editTodo = ({ title, id }) => {
    return { type: actionConstants.EDIT_TODO, payload: { title: title, id: id } };
  };
  