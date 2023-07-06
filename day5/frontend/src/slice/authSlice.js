import { createSlice } from "@reduxjs/toolkit";

const initialState={
    login:false,
    userData:{},
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
        }
    }
})

export const {setLogOut,setLogin} = authSlice.actions;
export default authSlice.reducer;