import { useState } from 'react'
import './index.css'
import CreateIcon from '@mui/icons-material/Create';
import VideocamIcon from '@mui/icons-material/Videocam';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import { v4 } from "uuid";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { serverTimestamp } from 'firebase/firestore';
import { storage } from '../../config/firebase';
import { useSelector } from 'react-redux';
import { createPost } from '../../utils/createPost';

function CreatePost() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [type, setType] = useState('text');
  const currentUser=useSelector(state=>state.auth.userData);
  const userImg=currentUser.imgUrl;
  const uploadFile = () => {
    if(type==='text')
    {
      createPost({ UserId:currentUser.UserId,
        userName:currentUser.name,
        mainId:currentUser.id,
        userImg,
        caption,
        type,
        like:[],
        Time:serverTimestamp()});
        setCaption('');
        return;
    }
    // if (file == null) return;

    const imageRef = ref(storage, `posts/${file.name + v4()}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const postData={
          UserId:currentUser.UserId,
          userName:currentUser.name,
          mainId:currentUser.id,
          userImg,
          caption,
          url,
          type,
          like:[],
          Time:serverTimestamp()
        }
        createPost(postData)
        setCaption('');
        setFile(null)
      });
    });
  };
  return (
    <div className='createPost'>
      <div className="headingWithIcon">
        <div className="iconDiv">
          <CreateIcon className='icon' />
        </div>
        <span>Create Post</span>
      </div>
      <div className="inputBox">
        <div className="userImg">
          <img src={currentUser?.imgUrl} alt="" />
        </div>
        <div className="inputText">
          <textarea placeholder='Whats on your mind ?' value={caption} onChange={(e)=>setCaption(e.target.value)} rows="5" cols="70" />
        </div>
      </div>
      <div className="videoAndImg">
        <div className="video">
          <input type="file" name="" id="video"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }} hidden  accept="video/*" />
          <label htmlFor="video" onClick={()=>setType('video')}>
            <VideocamIcon className='icon' />
            <span>Video</span>
          </label>
        </div>
        <div className="img">
          <input type="file" name="" id="img"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }} hidden    accept="image/png, image/gif, image/jpeg"   />
          <label htmlFor="img" onClick={()=>setType('image')}>
            <ImageOutlinedIcon className='icon' />
            <span>Photo</span>
          </label>
        </div>
        {file && <span className='fileName' >{file.name}</span>}
        <div className="share" onClick={uploadFile}>
          <IosShareOutlinedIcon />
          <span>Post</span>
        </div>
      </div>
    </div>
  )
}

export default CreatePost