import { createSlice} from "@reduxjs/toolkit";
import { getPostComments } from "./comments.type";
const initialState = {
    comments:[],
};

const CommentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPostComments.fulfilled, (state, action) => {
                state.comments = action.payload;
                state.pending = false;
            })
            .addCase(getPostComments.pending, (state) => {
                state.pending = true;
            })
            .addCase(getPostComments.rejected, (state, action) => {
                state.error = action.error;
            })
           
    }
});

export default CommentSlice.reducer;