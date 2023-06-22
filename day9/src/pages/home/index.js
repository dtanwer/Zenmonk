import React from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setLogOut } from '../../features/userSlice';
import CvCard from '../../components/Protected/CvCard';
function Home() {
  const dispatch = useDispatch();
  const cv = useSelector((state) => state.data.cv);
  const userId = useSelector((state) => state.data.CurrentUserId);
  const navigate = useNavigate();
  const handelLogOut = () => {
    dispatch(setLogOut());
    navigate('/');
  }
  return (
    <div>Home
      <button onClick={handelLogOut} >LogOut</button>
      <button  className='AddBtn' onClick={() => navigate('/form')} >Add</button>


      <div className='myGrids'>
        {
          cv.map((item, i) => {
            if (userId === item.userId)
              return (
                <CvCard index={i} item={item.cvData} id={item.id} />
              )
          })
        }
      </div>
    </div>
  )
}

export default Home