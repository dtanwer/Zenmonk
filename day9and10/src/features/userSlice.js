import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLogin:false,
  CurrentUserId:"",
  CurrentUserNumber:-1,
  CvTempletnumber:-1,
  draftData:{edit:false},
  cv:[],
};

const UserSlice = createSlice({
  name: "Data",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    addCV: (state, action) => {
      state.cv.push(action.payload);
    },
    deleteCV: (state, action) => {
      state.cv = state.cv.filter((task) => task.id !== action.payload);
    },
    setLogin:(state,action)=>{
        state.isLogin=true;
        state.CurrentUserId=action.payload.id;
        state.CurrentUserNumber=action.payload.number;
    },
    setLogOut:(state,action)=>{
        state.isLogin=false;
        state.CurrentUserId="";
        state.CurrentUserNumber=-1;
    },
    setNumber:(state,action)=>{
        state.CurrentUserNumber=action.payload;
    },
    setCvTemplet:(state,action)=>{
      state.CvTempletnumber=action.payload
    },
    setDraftCv:(state,action)=>{
      state.draftData=action.payload
    },
    editCvDraft:(state,action)=>{
      let index=-1;
      for(let i=0;i<state.cv.length;i++)
      {
        if(state.cv[i].id===action.payload.id)
        {
          index=i;
          break;
        }
      }

      state.cv[index]=action.payload;
      
    }
  },
});

export const {addUser,addCV,deleteCV,setLogin,setLogOut,setNumber,setCvTemplet,setDraftCv,editCvDraft } = UserSlice.actions;
export default UserSlice.reducer;