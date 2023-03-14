import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name:"tasks",
    initialState:{
        tasks: []
    },
    reducers:{
        addTask: (state,action)=>{
            state.tasks.push(action.payload);
        },
        deleteTask: (state,action)=>{
            state.tasks.splice(state.tasks.indexOf(action.payload),1);
        },
        completeTask: (state,action)=>{
            state.tasks.at(action.payload).complete = !state.tasks.at(action.payload).complete;
        }
    }
})

export const {addTask,deleteTask,completeTask} = tasksSlice.actions;
export default tasksSlice.reducer;

export const addNewTask = (task)=>(dispatch)=>{
    dispatch(addTask(task));
}
export const deleteATask = (task)=>(dispatch)=>{
    dispatch(deleteTask(task));
}
export const completeATask = (id)=>(dispatch)=>{
    dispatch(completeTask(id));
}