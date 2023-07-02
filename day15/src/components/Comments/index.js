import React, { useEffect, useState } from 'react'
import './index.css'
import InputComment from '../inputComment';
import {collection, query, orderBy, limit, onSnapshot} from "firebase/firestore";
import { db } from '../../config/firebase';
import Comment from '../comment';
function Comments({ mainId,postId}) {

  const [comments,setComments]=useState([]);


  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      orderBy("Time"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let comments = [];
      QuerySnapshot.forEach((doc) => {
        comments.push({ ...doc.data(), id: doc.id });
      });
      setComments(comments.filter(item => item.postId === postId));

    });
    return () => unsubscribe;


  }, [postId])
  return (
    <>
      <div className="comments">
        {
          comments.map(item=><Comment key={item.id} data={item}/>)
        }
      </div>
      <InputComment mainId={mainId} postId={postId} />
    </>
  )
}

export default Comments
