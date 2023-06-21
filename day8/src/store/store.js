import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../features/Users/user.slice";
import postReducer from "../features/Posts/post.slice";
import commentsReducer from "../features/Comments/comments.slice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
const persistConfig = {
  version: 1,
  key: 'root',
  storage,
  blacklist: ['comments']
}
const myReducers = combineReducers(
  {
    users: userReducer,
    posts: postReducer,
    comments: commentsReducer
  });
const mypersistReducer = persistReducer(persistConfig, myReducers)
export const store = configureStore({
  reducer: mypersistReducer,
  middleware: [thunk]
});

export default store;
export const persistor = persistStore(store)
