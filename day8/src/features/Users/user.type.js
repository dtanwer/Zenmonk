import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../../service/user/users.service';
export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    try {

      const { data } = await fetchUsers();
      console.log("Getting Users Api");
      return data.slice(0,10);

    } catch (error) {
      console.log(error)
    }
  }
);
// export const getUserInfo = createAsyncThunk(
//     'users/getUsers',
//     async () => {
//       const { data } = await fetchUsers();
//       return data;
//     }
//   );