import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPostComments } from '../../service/user/users.service';
export const getPostComments = createAsyncThunk(
  'mypost/comments',
  async (id) => {
    try {
      const { data } = await fetchPostComments(id);
      console.log("Getting comments Api");
      return data;

    } catch (error) {
      // console.log(error)
      throw error.message;
    }
  }
);