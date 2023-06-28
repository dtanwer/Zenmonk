import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLogin:true,
    userData:{},
    reciver:{},
    currentWindowMsg:{},
    currentSenderIndex:-1,
    roomId:'1',
    msg:[],
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setLogin:(state,action)=>{
            state.isLogin=true;
            state.userData=action.payload;
        },
        setReciver:(state,action)=>{
            state.reciver=action.payload;
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
        },
        setRoomId:(state,action)=>{
            state.roomId=action.payload;
        },
        setMsg:(state,action)=>{
            const myMsg=action.payload;
            state.msg=[...myMsg];
        }
    }
})

export const {setLogOut,setLogin,setRoomId,setMsg,setCurrentWindowMsg,setCurrentSenderIndex,setReciver} = userSlice.actions;
export default userSlice.reducer;