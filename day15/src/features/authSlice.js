import { createSlice } from "@reduxjs/toolkit";

const initialState={
    login:false,
    userData:{},
    reciver:{},
    allUsers:[],
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
        }
    }
})

export const {setLogOut,setLogin,setUsers} = authSlice.actions;
export default authSlice.reducer;