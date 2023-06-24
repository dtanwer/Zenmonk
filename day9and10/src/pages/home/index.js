import {useState } from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setLogOut } from '../../features/userSlice';
import CvCard from '../../components/Protected/CvCard';
import {  Modal,Empty } from 'antd';
import SelectTemplets from '../SelectTemplets';
function Home() {
  const dispatch = useDispatch();
  const cv = useSelector((state) => state.data.cv);
  const userId = useSelector((state) => state.data.CurrentUserId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const handelLogOut = () => {
    dispatch(setLogOut());
    navigate('/');
  }
 

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };



  return (
    <div>
      <div className='logOut'>
      <button onClick={handelLogOut} >LogOut</button>
      </div>
      <button  className='AddBtn' onClick={showModal} >Add</button>
{cv.length>0 && <div className='cvHeading'><h1>My CV's</h1></div>}

      <div className='myGrids'>
        {
          cv.map((item, i) => {
            if (userId === item.userId && !item.isDraft)
              return (
                <CvCard key={item.id} index={i} CvTempletnumber={item.CvTempletnumber} item={item.cvData} id={item.id} edit={false}/>
              )
          })
        }
      </div>
      {cv.length>0 && <div className='cvHeading'  style={{width:'400px', marginBottom:'40px',marginTop:'50px'}}><h1>My Draft CV's</h1></div>}

      {
        cv.length===0 && <Empty style={{marginTop:'370px'}} />
      }
      
      <div className='myGrids'>
        {
          cv.map((item, i) => {
            if (userId === item.userId && item.isDraft)
              return (
                <CvCard key={item.id} index={i} CvTempletnumber={item.CvTempletnumber} item={item.cvData} id={item.id} edit={true} />
              )
          })
        }
      </div>
      <Modal width={1200} title="Select Design" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  footer={[]} >
        <SelectTemplets/>
      </Modal>
    </div>
  )
}

export default Home