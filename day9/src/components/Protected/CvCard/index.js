import { useState } from 'react'
import { Button, Modal } from 'antd';
import './index.css'
import { useDispatch } from 'react-redux'
import { deleteCV } from '../../../features/userSlice';
import View from '../../view';
function CvCard({ index, item, id }) {

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
    console.log(item)
    return (
        <>
            <div className='Card'>
                <div className='myimg'>
                    <img src="https://cdn3.careeraddict.com/uploads/article/59032/illustration-woman-laptop-cv.jpg" alt="no img" /></div>

                <div>
                    <h2>{item.name}</h2>
                </div>
                <div className='btns'>
                    <Button type="primary" onClick={showModal}>
                        View
                    </Button>
                    <button onClick={handelDelete}>Delete</button>
                </div>
            </div>
            <Modal  width={800} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  footer={[]} >
                <View item={item} />
            </Modal>


        </>
    )
}

export default CvCard