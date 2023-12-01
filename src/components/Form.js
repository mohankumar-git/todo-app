import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { addTask } from "../slices/tasksSlice";
import { useDispatch } from "react-redux";

function Form() {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");
  const [showError, setShowError] = useState(false);

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTask = () => {
    if (todo === "") {
      return setShowError(true);
    }
    dispatch(addTask({ task: todo }));
    setTodo("");
    setShowError(false);
  };

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
          mb: 3,
        }}
      >
        <TextField
          id="outlined-error-helper-text"
          label="Write Task"
          variant="outlined"
          sx={{ width: "100%" }}
          onChange={handleInput}
          value={todo}
          helperText="Please provide valid Task*"
          error={showError}
        />
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 3 }}
          onClick={handleAddTask}
        >
          Add Task
        </Button>
      </Box>
    </Container>
  );
}

export default Form;
