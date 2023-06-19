import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../Slice/toDoSlice";
import userReducer from "../Slice/userSlice";
const store=configureStore({
    reducer:{
        todo:toDoReducer,
        users:userReducer
    },
})
export default store
