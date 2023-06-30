import { useState, useEffect } from 'react'
import './index.css'
import UserCard from '../userCard';
import SearchIcon from '@mui/icons-material/Search';
import { db } from '../../config/firebase'
import {
  collection,
  getDocs,
  onSnapshot
} from "firebase/firestore";
import { useSelector } from 'react-redux';

function Chats() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users")
  const sender = useSelector((state) => state.user.userData);
  const msg=useSelector((state)=>state.user.msg);
  const temp = users;
  const [search, setSearch] = useState("");
  const handelSearch = (e) => {
    setSearch(e.target.value);
    const filterData = temp.filter((item) => {
      return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    setUsers([...filterData]);

    if (search.length === 0) {
      getUsers()
    }
  }

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    const unsubscribe = onSnapshot(usersCollectionRef, (QuerySnapshot) => {
      let users = [];
      QuerySnapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setUsers(users);
    });
    return () => unsubscribe;
    // getUsers();
  }, []);

  // console.log("i m sender",sender)

  return (
    <div className='chats'>
      <div className="heading">
        <h1>Messages</h1>
        <p>People,Group,Messages</p>
      </div>
      <div className='onlineUser'>
        <UserCard onlineCard={false} reciver={sender} />
      </div>
      <div className="search">
        <span className='iconWithSearch'>
          <SearchIcon className='SearchIcon' />
          <input type="text" onChange={handelSearch} placeholder=' Search People, Group, Message' />
        </span>
      </div>
      <div className="users">
        {
          users?.map((item, index) => {
            if (item.id !== sender.id)
              return (
                <UserCard key={index} i={index} onlineCard={true} active={item.active} reciver={item} />
              )
          })
        }
      </div>
    </div>
  )
}

export default Chats