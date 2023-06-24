import { useState } from 'react'
import { Modal } from 'antd';
import './index.css'
import { useDispatch } from 'react-redux'
import { deleteCV,setDraftCv } from '../../../features/userSlice';
import { getTemplets } from '../../../utils/getTemplets';
import { useNavigate } from 'react-router-dom';
function CvCard({ CvTempletnumber, index, item, id, edit }) {

    const dispatch = useDispatch();
    const navigete=useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handelDelete = () => {
        dispatch(deleteCV(id))
    }
    const handelEdit=()=>{
        dispatch(setDraftCv({id,index,cvData:item,CvTempletnumber,edit:true}))
        navigete('/form')
    }

    return (
        <>




            <div className='Card'>
                <div className='myimg'>
                    <img src="https://cdn3.careeraddict.com/uploads/article/59032/illustration-woman-laptop-cv.jpg" alt="no img" /></div>

                <div>
                    <h2>{item.name}</h2>
                </div>
                <div className='btns'>
                    <button className='viewBtn' onClick={showModal}>View</button>
                    <button className='deleteBtn' onClick={handelDelete}>Delete</button>
                    {
                    
                        edit && <button className='deleteBtn' onClick={handelEdit}>Edit</button>
                    }
                </div>
            </div>
            <Modal width={900} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]} >
                <div >
                    {
                        getTemplets(CvTempletnumber, item,true)
                    }
                </div>
            </Modal>


        </>
    )
}

export default CvCard;