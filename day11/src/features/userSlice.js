import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLogin:true,
    userData:{},
    reciver:{},
    currentWindowMsg:{},
    currentSenderIndex:-1,
    roomId:''
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
        }
    }
})

export const {setLogOut,setLogin,setRoomId,setCurrentWindowMsg,setCurrentSenderIndex,setReciver} = userSlice.actions;
export default userSlice.reducer;