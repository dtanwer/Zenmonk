import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLogin:true,
    userData:{}
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setLogin:(state,action)=>{
            state.isLogin=true;
            state.userData=action.payload;
        },
        setLogOut:(state,action)=>{
            state.isLogin=false;
            state.userData={};
        }
    }
})

export const {setLogOut,setLogin} = userSlice.actions;
export default userSlice.reducer;