import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";

import TextField from "@mui/material/TextField";

import { useDispatch } from "react-redux";
import { handleDelete, handleToggle, handleEdit } from "../redux/Api";

export default function TodoCard({ data }) {
  const [edit, setEdit] = useState(false);
  const [newTask, setTask] = useState(data.title);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        "& > :not(style)": {
          m: 10,
          p: 2,
        },
      }}
    >
      <Paper variant="outlined">
        <h2>{data.title}</h2>
        <Stack direction="row" spacing={3}>
          <Stack direction="column" spacing={2}>
            <IconButton onClick={() => dispatch(handleDelete(data.id))}>
              <DeleteIcon sx={{ color: "#00b0ff", fontSize: 32 }} />
            </IconButton>

            <IconButton>
              <EditIcon
                sx={{ color: "#00b0ff", fontSize: 32 }}
                onClick={() => setEdit(true)}
              />
            </IconButton>

            {data.status ? (
              <IconButton
                onClick={() =>
                  dispatch(handleToggle(data.id, data.title, data.status))
                }
              >
                <ToggleOnIcon sx={{ color: "#00b0ff", fontSize: 32 }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() =>
                  dispatch(handleToggle(data.id, data.title, data.status))
                }
              >
                <ToggleOffIcon sx={{ color: "#00b0ff", fontSize: 32 }} />
              </IconButton>
            )}
          </Stack>
          <Stack direction="column" spacing={2}>
            {data.status ? (
              <Chip label="Completed" color="success" Filled />
            ) : (
              <Chip label="Not Completed" Filled />
            )}

            {edit && (
              <Stack direction="column" spacing={1}>
                <TextField
                  onChange={(e) => setTask(e.target.value)}
                  required
                  id="standard-required"
                  label="New Task Name"
                  variant="standard"
                />
                <Button
                  variant="outlined"
                  onClick={() => dispatch(handleEdit(newTask, data.id))}
                >
                  Edit Task
                </Button>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}
