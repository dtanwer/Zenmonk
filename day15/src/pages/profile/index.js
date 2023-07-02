import { useEffect, useState } from 'react';
import './index.css';
// import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch,useSelector } from 'react-redux';
import GridOnIcon from '@mui/icons-material/GridOn';
import {setLogin} from '../../features/authSlice'
import {
    doc,
    collection, query, orderBy, limit, onSnapshot,
} from "firebase/firestore";
import { db } from '../../config/firebase';
import SettingsIcon from '@mui/icons-material/Settings';
import MyForm from '../../components/form'
import Navbar from '../../components/Navbar';

function Profile() {
    const userData = useSelector(state => state.auth.userData);
    const imgUrl = userData.imgUrl;
    const [posts, setPost] = useState([]);
    const [isform, setForm] = useState(false);

    const dispatch=useDispatch();
    useEffect(() => {
        const q = query(
            collection(db, "posts"),
            orderBy("UserId"),
            limit(50)
        );

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let posts = [];
            QuerySnapshot.forEach((doc) => {
                posts.push({ ...doc.data(), id: doc.id });
            });
            setPost(posts);
        });
        return () => unsubscribe;
    }, [])

    // console.log(userData);

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "users", userData.id), (doc) => {
            // typing=doc.data()?.rooms[roomId];
            dispatch(setLogin({...userData,...doc.data()}))
            // console.log(doc.data());
        });

        return () => unsub;
    },[])


    return (
        <div>
            <Navbar/>
            <div className={isform ? 'profile formOpen' : 'profile'}>
                <div className='heading'><h1>User Profile</h1></div>
                <div className="header">
                    <div className="image">
                        <img src={imgUrl} alt="dp" />
                    </div>
                    <div className="Userinfo">
                        <h1>{userData.name} {userData.lastName}</h1>
                        <h2>{userData.email}</h2>
                        <h2>{userData.address}</h2>
                        <h2>{userData.bio}</h2>
                        <div className="edit" onClick={() => setForm(true)}>
                            <SettingsIcon className='icon' />
                            <span>Edit</span>
                        </div>
                    </div>
                </div>
                <div className='heading'><h1> <GridOnIcon/> Posts</h1></div>
                <div className="posts">
                    {
                        posts.map((item) => {
                            if(item.type!=='text')
                            return (
                                item.type === 'image' ? (<img src={item?.url} className='vid' alt="img" />) :
                                    (<video src={item?.url} className='vid' ></video>)
                            )
                        })
                    }
                </div>

            </div>
            {
                isform && <MyForm data={userData} setForm={setForm} />
            }
        </div>
    )
}

export default Profile
