import React from 'react';
import {PlusCircleFilled} from '@ant-design/icons'
import './index.css';
import { Modal} from 'antd';
import { useState } from 'react';
import Editor from '../Editor'

function LeftBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
     
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

  return (
    <div className='leftBar'>
        <div className='heading'><h1>Notes</h1></div>
        <div className="btn">
        <button onClick={showModal}><PlusCircleFilled  className='icon'/></button>
        </div>
      <Modal title="Add Notes" open={isModalOpen} width={800}  onCancel={handleCancel}    footer={[]}>
        <Editor setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  )
}

export default LeftBar