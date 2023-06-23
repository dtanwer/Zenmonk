import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
const persistConfig = {
  key: 'root',
  storage,
}
const mypersistReducer = persistReducer(persistConfig, userReducer)
export const store = configureStore({
  reducer: {
    data: mypersistReducer,
  },
  middleware: [thunk]
});
export const persistor = persistStore(store)