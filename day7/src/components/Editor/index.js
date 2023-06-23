import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { useDispatch } from "react-redux";
import { addNote ,editNote} from "../../Features/noteSlice";
import './index.css';
import { v4 as uuid } from 'uuid';
function Editor({ index, setIsModalOpen, mynote, edit }) {
  const editor = useRef(null);
  const [note, setNote] = useState(mynote?.body);
  const [heading, setHeading] = useState(mynote?.title);
  const dispatch = useDispatch();
  // ahgsfdhadfhgfaghf.m;m.lhn,nb   chcchb  xhzgjhzjjzxhjzj deepaa is the punjabi form of deepak jaat pee ke peepa ho gya hai 

  const handelBlur = (newContent) => {
    setNote(newContent);
  }
  const handelSave = () => {
    if(!heading || heading?.length===0)
    {
      alert('Title is Empty!!!');
      return;
    }
    const unique_id = uuid().slice(0,8);
    const myNote = {
      id: unique_id,
      title: heading,
      body: note
    }

    if (edit) {
      const data={
        index,
        newData:myNote
      }
      dispatch(editNote(data))
    }
    else {
      dispatch(addNote(myNote));
    }
    setNote("");
    setHeading("");
    setIsModalOpen(false);
  }

  return (
    <div className="editor">
      <div className="inputHeading">
        <input type="text" value={heading} placeholder="Enter Title" onChange={(e) => setHeading(e.target.value)} />
      </div>
      <JoditEditor
        ref={editor}
        value={note}
        tabIndex={1}
        onBlur={(newContent) => handelBlur(newContent)}
      />
      <button className="saveBtn" onClick={handelSave} >Save</button>

    </div>
  );
}

export default Editor;