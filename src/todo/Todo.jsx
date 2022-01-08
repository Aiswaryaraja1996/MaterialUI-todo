import { useEffect, useState } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getTodos, handleSubmit } from "../redux/Api";
import { Link } from "react-router-dom";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

function Todo() {
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);

  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const { todos, isError, isLoading } = useSelector(
    (state) => state,
    shallowEqual
  );

  useEffect(() => {
      
    dispatch(getTodos());
    setOffset((currentPage - 1) * 2);
  }, [currentPage]);

  return (
    <div>
      <h2>TODOS</h2>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          required
          id="outlined-required"
          label="Task Name"
          onChange={(e) => setTask(e.target.value)}
        />

        <IconButton
          aria-label="delete"
          onClick={() => {
            dispatch(handleSubmit(task));
            document.getElementById("outlined-required").value = null;
          }}
        >
          <AddCircleIcon color="primary" sx={{ fontSize: 50 }} />
        </IconButton>
      </Stack>

      {todos && (
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <Pagination
            count={Math.ceil(todos.length / 2)}
            color="primary"
            onChange={(event, value) => {
              setCurrentPage(value);
            }}
          />
        </Stack>
      )}

      {todos
        ?.filter((i, idx) => idx >= offset && idx < offset + 2)
        .map((item) => (
          <Link to={`/todoItem/${item.id}`} style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                "& > :not(style)": {
                  m: 2,
                  width: 200,
                  height: 40,
                },
              }}
            >
              <Card sx={{ minWidth: 275 }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 1,
                    backgroundColor: "#b2ebf2",
                    cursor: "pointer",
                  }}
                >
                  {item.title}
                </CardContent>
              </Card>
            </Box>
          </Link>
        ))}
    </div>
  );
}

export default Todo;
