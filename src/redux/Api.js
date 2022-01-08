import * as actions from "../redux/Action";

export const getTodos = (currentPage=1) => (dispatch) => {
  const requestAction = actions.getTodoRequest();
  dispatch(requestAction);

  return fetch(
    `https://todos-mock-server.herokuapp.com/tasks?_page=${currentPage}`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      const successAction = actions.getTodoSuccess(res);
      dispatch(successAction);
    })
    .catch(() => {
      const failureAction = actions.getTodoFailure;
      dispatch(failureAction);
    });
};

export const handleToggle = (id, title,status) => (dispatch) => {
  const requestAction = actions.getTodoRequest();
  dispatch(requestAction);

  return fetch(`https://todos-mock-server.herokuapp.com/tasks/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, title: title, status: !status }),
  })
    .then((res) => res.json())
    .then(() => dispatch(getTodos()));
};

export const handleDelete = (id) => (dispatch) => {
  const requestAction = actions.getTodoRequest();
  dispatch(requestAction);

  return fetch(`https://todos-mock-server.herokuapp.com/tasks/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then(() => dispatch(getTodos()));
};

export const handleEdit = (task, id) => (dispatch) => {
  const requestAction = actions.getTodoRequest();
  dispatch(requestAction);

  return fetch(`https://todos-mock-server.herokuapp.com/tasks/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, title: task }),
  })
    .then((res) => res.json())
    .then(() => dispatch(getTodos()));
};

export const handleSubmit = (task) => (dispatch) => {
  const requestAction = actions.getTodoRequest();
  dispatch(requestAction);

  return fetch("https://todos-mock-server.herokuapp.com/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: task, status: false }),
  })
    .then((res) => res.json())
    .then(() => dispatch(getTodos()));
};
