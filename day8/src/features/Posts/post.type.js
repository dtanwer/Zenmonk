import {createAsyncThunk } from '@reduxjs/toolkit';
import {fetchUserPost} from '../../service/user/users.service';
export const getUserPost = createAsyncThunk(
    'post/getUserPost',
    async (id) => {
      const { data } = await fetchUserPost(id);
      return data;
    }
  );