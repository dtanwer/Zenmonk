import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLogin:true,
    userData:{},
    currentWindowMsg:{},
    currentSenderIndex:-1
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
        },
        setCurrentWindowMsg:(state,action)=>{
            state.currentWindowMsg=action.payload;
        },
        setCurrentSenderIndex:(state,action)=>{
            state.currentSenderIndex=action.payload;
        }
    }
})

export const {setLogOut,setLogin,setCurrentWindowMsg,setCurrentSenderIndex} = userSlice.actions;
export default userSlice.reducer;