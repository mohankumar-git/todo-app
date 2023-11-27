import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import {useSelector, useDispatch} from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = () => {
    const {taskList} = useSelector((state) => state.tasks)
    console.log(taskList)
  return (
    <TableContainer sx={{ width: '100%', maxWidth: '700px' }} component={Paper}>
        <Table sx={{ width: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="center" sx={{width: '50%'}}>Task</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {taskList.map((item, index) => (
            <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {index+1}
            </TableCell>
            <TableCell align="center">{item.task}</TableCell>
            <TableCell align="right">
                <Button variant="contained" sx={{ mr: 1 }} ><EditIcon/></Button>
                <Button variant="contained"><DeleteIcon/></Button>
            </TableCell>
          </TableRow>
        ))}
        </TableBody>
        </Table>
    </TableContainer>

  )
}

export default TaskList