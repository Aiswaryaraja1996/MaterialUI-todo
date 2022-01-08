import { Switch, Route } from "react-router-dom";

import Todo from "../todo/Todo";

import TodoItem from "../todo/TodoItem";

export default function Allroutes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Todo />
        </Route>
        <Route exact path="/todoItem/:id">
          <TodoItem />
        </Route>
      </Switch>
    </>
  );
}
