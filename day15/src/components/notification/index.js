import React, { useEffect, useState } from 'react'
import './index.css';
import NotifiCard from '../notifiCard';
import { useSelector, useDispatch } from 'react-redux'
import { setLogin } from '../../features/authSlice'
import CloseIcon from '@mui/icons-material/Close';
import {
  onSnapshot,
  doc
} from "firebase/firestore";
import {db} from '../../config/firebase'
function Notification({id, setNotification }) {
  const dispatch = useDispatch();
  const [notifi,setNotifi] =useState([]);
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users",id), (doc) => {
     setNotifi(doc.data()?.notification)
    });
    return () => unsub;
  }, [])
  return (
    <div className='notification'>
      <div className="cross">
        <CloseIcon className='icon' onClick={() => setNotification(false)} />
      </div>
      {notifi?.map((item) => <NotifiCard key={item?.id} data={item} />)}
    </div>
  )
}

export default Notification
