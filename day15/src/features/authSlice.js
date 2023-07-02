import { createSlice } from "@reduxjs/toolkit";

const initialState={
    login:false,
    userData:{},
    reciver:{},
    allUsers:[],
    reciver:{},
    currentRoom:"-1"
}

const authSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setLogin:(state,action)=>{
            console.log(action)
            state.login=true;
            state.userData=action.payload;
        },
        setLogOut:(state)=>{
            state.login=false;
            state.userData={};
        },
        setUsers:(state,action)=>{
            state.allUsers=action.payload;
        },
        setReciver:(state,action)=>{
            state.reciver=action.payload;
        },
        setCurrentRoom:(state,action)=>{
            state.currentRoom=action.payload;
        }
    }
})

export const {setLogOut,setLogin,setUsers,setReciver,setCurrentRoom} = authSlice.actions;
export default authSlice.reducer;