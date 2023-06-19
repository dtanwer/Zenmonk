import { createSlice } from "@reduxjs/toolkit";
const initialState={
    tasks:[],
    data:{}
}

const toDoSlice=createSlice({
    name:'toDo',
    initialState,
    reducers:{
        addToDo:(state,action)=>{
            state.tasks.push({id:Date.now(),text:action.payload});
        },
        deleteToDo:(state,action)=>{
            state.tasks=state.tasks.filter((task)=>task.id!==action.payload);
        },
        setData:(state,action)=>{
            state.data=action.payload;
        }
    },
});


export const {addToDo,deleteToDo,setData}=toDoSlice.actions;
export default toDoSlice.reducer;