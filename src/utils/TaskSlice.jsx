import { createSlice } from "@reduxjs/toolkit";

const taskSlice=createSlice({
    name:"task",
    initialState:[],
    reducers:{
        addTask:(state,action)=>{
state.push(action.payload);
        },
        editTask:(state,action)=>{
         state.forEach((task)=>{
            if( task.id === action.payload.id ){
                Object.assign(task, action.payload.updatedTask)
            }
         })
        },
        removeTask:(state,action)=>{
return state.filter((task)=>{
return task.id !== action.payload.id;

})
        }
    }
})
export const {addTask,editTask,removeTask}=taskSlice.actions;
export default taskSlice.reducer;