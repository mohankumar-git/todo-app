import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { selectTask, updateTask, removeTask, toggleComplete } from "../slices/tasksSlice";
import Checkbox from '@mui/material/Checkbox';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  borderRadius: "16px",
  backgroundColor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const TaskList = () => {
  const { taskList, selectedTask } = useSelector((state) => state.tasks);
  console.log(taskList, "select");
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOpen = (item) => {
    dispatch(selectTask(item));
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const [todo, setTodo] = useState("");
  const [showError, setShowError] = useState(false);

  const handleUpdateTask = () => {
    if (todo === "") {
      return setShowError(true);
    }
    dispatch(updateTask({ ...selectedTask, task: todo}));
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(removeTask({ id }));
  };

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  useEffect(() => {
    if (selectedTask.task !== undefined) {
      setTodo(selectedTask.task);
    }
  }, [selectedTask]);

  const handleCompletion = (id) => {
    dispatch(toggleComplete({ id }));
  };
  

  const renderModel = () => {
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={{ ...style, width: "70%", maxWidth: "500px" }}>
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
              onClick={handleUpdateTask}
            >
              Update Task
            </Button>
          </Box>
        </Fade>
      </Modal>
    );
  };

  return (
    <>
      <TableContainer sx={{ width: "100%" }} component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell align="center" sx={{ width: "50%" }}>
                Task
              </TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {taskList.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography variant="body1">{index + 1}. </Typography>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      checked={item.completion}
                      onChange={() => handleCompletion(item.id)}
                      inputProps={{ 'aria-label': 'controlled' }}
                      sx={{ marginRight: "12px" }}
                      color="success"
                    />
                    <Typography variant="body1" sx={{ textDecoration: item.completion ? 'line-through' : 'none' }}>{item.task}</Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{ marginRight: "10px" }}
                      onClick={() => handleOpen(item)}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => handleDelete(item.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {open && renderModel()}
    </>
  );
};

export default TaskList;
