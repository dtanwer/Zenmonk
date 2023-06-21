import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Users/user.slice";
import postReducer from "../features/Posts/post.slice";
import commentsReducer from "../features/Comments/comments.slice";


const store = configureStore({
    reducer: {
      users: userReducer,
      posts:postReducer,
      comments:commentsReducer
    },
  });

export default store;
  