import React from 'react'
import './index.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useDispatch } from 'react-redux'
import { deleteNote } from '../../Features/noteSlice'
import Editor from '../Editor';
import { Modal } from 'antd';
import { useState } from 'react';
import View from '../View';
function Note({ note, i }) {

    const [isView, setIsView] = useState(false);


    const dispatch = useDispatch();
    const handelDelete = () => {
        dispatch(deleteNote(note.id));
    }
    const handelView = () => {
        setIsView(true);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={isView ? 'note blurMode' : 'note'} >
                <div className="heading">
                    <h2>{note.title}</h2>
                </div>
                <div dangerouslySetInnerHTML={{ __html: note?.body }}>
                </div>
                <div className="btns">
                    <div className="date">20 Jun,2023</div>
                    <button onClick={() => setIsModalOpen(true)}><EditIcon /></button>
                    <button onClick={() => handelView()}><RemoveRedEyeIcon /></button>
                    <button onClick={handelDelete}><DeleteIcon /></button>
                </div>
                <Modal title="Basic Modal" open={isModalOpen} width={800} onCancel={handleCancel} footer={[]}>
                    <Editor index={i} edit={true} mynote={note} setIsModalOpen={setIsModalOpen} />
                </Modal>
            </div>
            {
                isView && <View note={note} setIsView={setIsView} />
            }
        </>
    )
}

export default Note