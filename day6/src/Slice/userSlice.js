import { createSlice } from "@reduxjs/toolkit";
const initialState={
    users:[
        {
            userId:1,
            userName:'Deepak',
            userImg:'https://media.licdn.com/dms/image/D4D03AQFXxV3eDmX38A/profile-displayphoto-shrink_100_100/0/1686504020188?e=1692835200&v=beta&t=hcWGqJnq6mmDlkfW9GoijOqkHc0_6oZkVR0GAzOSsyg',
            userTask:[],
        },
        {
            userId:2,
            userName:'Chetan',
            userImg:'https://media.licdn.com/dms/image/D4D03AQFXxV3eDmX38A/profile-displayphoto-shrink_100_100/0/1686504020188?e=1692835200&v=beta&t=hcWGqJnq6mmDlkfW9GoijOqkHc0_6oZkVR0GAzOSsyg',
            userTask:[],
        },
        {
            userId:3,
            userName:'Yash',
            userImg:'https://media.licdn.com/dms/image/D4D03AQFXxV3eDmX38A/profile-displayphoto-shrink_100_100/0/1686504020188?e=1692835200&v=beta&t=hcWGqJnq6mmDlkfW9GoijOqkHc0_6oZkVR0GAzOSsyg',
            userTask:[],
        },
        {
            userId:4,
            userName:'Uttam',
            userImg:'https://media.licdn.com/dms/image/D4D03AQFXxV3eDmX38A/profile-displayphoto-shrink_100_100/0/1686504020188?e=1692835200&v=beta&t=hcWGqJnq6mmDlkfW9GoijOqkHc0_6oZkVR0GAzOSsyg',
            userTask:[],
        },
        {
            userId:5,
            userName:'Bhavdeep',
            userImg:'https://media.licdn.com/dms/image/D4D03AQFXxV3eDmX38A/profile-displayphoto-shrink_100_100/0/1686504020188?e=1692835200&v=beta&t=hcWGqJnq6mmDlkfW9GoijOqkHc0_6oZkVR0GAzOSsyg',
            userTask:[],
        },
        {
            userId:6,
            userName:'Satiyam',
            userImg:'https://media.licdn.com/dms/image/D4D03AQFXxV3eDmX38A/profile-displayphoto-shrink_100_100/0/1686504020188?e=1692835200&v=beta&t=hcWGqJnq6mmDlkfW9GoijOqkHc0_6oZkVR0GAzOSsyg',
            userTask:[],
        }
    ]
    ,
}

const usersSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
        assignTask:(state,action)=>{
            const index=action.payload.id;
            state.users[index].userTask.push(action.payload);
        },
    },
});
export const {assignTask} = usersSlice.actions;
export default usersSlice.reducer;