import {createAsyncThunk } from '@reduxjs/toolkit';
import {fetchUsers} from '../../service/user/users.service';
export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
      const { data } = await fetchUsers();
      return data;
    }
  );