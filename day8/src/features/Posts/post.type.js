import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserPost } from '../../service/user/users.service';
export const getUserPost = createAsyncThunk(
  'post/getUserPost',
  async (id) => {
    try {
      const { data } = await fetchUserPost(id);
      console.log("Getting Posts Api");
      return data;

    } catch (error) {
      console.log(error);
    }
  }
);