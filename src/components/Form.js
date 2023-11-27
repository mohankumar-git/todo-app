import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { addTask } from "../slices/tasksSlice";
import { useDispatch } from "react-redux";

function Form() {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState('')

  const handleAddTask = () => {
    dispatch(addTask({task: todo}))
    setTodo('')
  }

  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
          mb: 3,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Write Task"
          variant="outlined"
          sx={{ width: "100%" }}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <Button variant="contained" sx={{ mt: 3, mb: 3 }} onClick={handleAddTask}>
          Add Task
        </Button>
      </Box>
    </Container>
  );
}

export default Form;
