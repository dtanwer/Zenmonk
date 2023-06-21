import { createSlice} from "@reduxjs/toolkit";
import { getUserPost } from "./post.type";
const initialState = {
    posts:[],
};

const PostsSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserPost.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.pending = false;
            })
            .addCase(getUserPost.pending, (state) => {
                state.pending = true;
            })
            .addCase(getUserPost.rejected, (state, action) => {
                state.error = action.error;
            })
           
    }
});

export default PostsSlice.reducer;