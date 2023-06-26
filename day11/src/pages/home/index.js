import React from 'react';
import { auth } from '../../config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setLogOut } from '../../features/userSlice';
import { signOut } from 'firebase/auth';

function Home() {
    const dispatch = useDispatch();
    const logOut = async () => {
        try {
            await signOut(auth);
            dispatch(setLogOut());

        } catch (err) {
            console.error(err);
        }
    };
   

    const user = useSelector((state) => state.user.userData)
    console.log(user)
    return (
        <div className='home'>
            <button onClick={logOut}>LogOut</button>
            <h1>{user.displayName}</h1>
            <h1>{user.email}</h1>
            <img src={user.photoUrl} alt="User Img" />

        </div>
    )
}

export default Home