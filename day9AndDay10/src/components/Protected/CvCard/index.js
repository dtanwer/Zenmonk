import { useState } from 'react'
import { Modal } from 'antd';
import './index.css'
import { useDispatch } from 'react-redux'
import { deleteCV } from '../../../features/userSlice';
import { getTemplets } from '../../../utils/getTemplets';
function CvCard({ CvTempletnumber, index, item, id }) {

    const dispatch = useDispatch();
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