import { useParams } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import TodoCard from "../todo/TodoCard";

export default function TodoItem() {
  const { id } = useParams();

  const { todos, isError, isLoading } = useSelector(
    (state) => state,
    shallowEqual
  );

  return (
    <div>
      {todos?.map((todo) => {
        if (Number(todo.id) === Number(id)) {
          return( <div><TodoCard data={todo}/></div>);
        } else {
          return null;
        }
      })}
    </div>
  );
}
