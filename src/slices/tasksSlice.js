import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuid } from 'uuid';

const initialState = {
    taskList : [],
    selectedTask : {},
}

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const id = uuid()
            const task = {id, ...action.payload}
            state.taskList.push(task)
        },
        removeTask: (state, action) => {
            console.log("triggerDEL")
            state.taskList = state.taskList.filter(each => each.id !== action.payload.id)
        },
        updateTask: (state,action) => {
            state.taskList = state.taskList.map(each => each.id === action.payload.id ? action.payload : each)
        },
        selectTask: (state, action) => {
            state.selectedTask = action.payload
        }
    }
})

export const {addTask, removeTask, updateTask, selectTask} = tasksSlice.actions

export default tasksSlice.reducer

