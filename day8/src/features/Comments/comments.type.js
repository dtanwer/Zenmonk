import {createAsyncThunk } from '@reduxjs/toolkit';
import {fetchPostComments} from '../../service/user/users.service';
export const getPostComments = createAsyncThunk(
    'mypost/comments',
    async (id) => {
      const  {data}  = await fetchPostComments(id);
      return data;
    }
  );