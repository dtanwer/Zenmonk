import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers,getUserPost,getUser } from "./user.type";
const initialState = {
    users: [],
    posts:[],
    user:{}
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.pending = false;
            })
            .addCase(getUsers.pending, (state) => {
                state.pending = true;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.error = action.error;
            })
           
    }
});

export default userSlice.reducer;