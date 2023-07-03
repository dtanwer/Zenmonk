import { useEffect, useState } from 'react'
import {  Modal } from 'antd';
import './index.css'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { useSelector } from 'react-redux';
import { updateLike } from '../../utils/updateLike';
import Comments from '../Comments';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../config/firebase';
import { updateNotification } from '../../utils/updateNotification';
import { getTime } from '../../utils/getTime';

function PostCard({ data }) {
  //getting current loged in user form storage
  const currentUser = useSelector(state => state.auth.userData)

  const [islike, setLike] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentNum, setCommentNum] = useState(0);
  const [seen, setSeen] = useState(true);

  const userImg = currentUser?.imgUrl;
  const postId = data.id;

// function to open and close modal
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  // function for click on like post 
  const handelLike = () => {
    setLike(!islike)

    // update post like 
    updateLike(data.id, currentUser.id, islike)

    // sending notification to user if currentUser is not created that post
    if (!islike && currentUser?.id !== data?.mainId) {
      updateNotification(data.mainId, { name: currentUser.name, msg: 'like', userImg, Time: Date.now() })
    }
  }

  useEffect(() => {
    //updating post like if user already liked or not
    setLike(data.like.includes(currentUser.id));
  }, [])


  // geting number of comment of user post
  const commentCollectionRef = collection(db, "comments");
  useEffect(() => {
    const getCommentNumber = async () => {
      try {
        const data = await getDocs(commentCollectionRef);
        const res = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        // filtering comments with postId
        const filterData = res.filter(item => item.postId === postId)
        setCommentNum(filterData.length)
      }
      catch (error) {
        console.log(error)
      }
    };
    getCommentNumber();
  }, [isModalOpen])


  // fun to display NEW tag on post
  // if current hours===post hours then seen will be false and it will be false after 3 second
  // to hide NEW tag
  useEffect(()=>{
    const posthours = new Date(data?.Time?.seconds*1000).getHours();
    const currentHour=new Date().getHours();
    if(posthours===currentHour)
    { setSeen(false);
      setTimeout(() => {
        setSeen(true)
      }, 3000);
    }
  },[])

  //geting post time
  const time=getTime(data?.Time?.seconds)

  return (
    <div className={data.type==='text'?'postCard textPostCard ':'postCard'}>
      <div className="postDetails">
        <img src={data?.userImg} alt="profileImg" />
        <span>{data?.userName} <br /> <p>{time}</p></span>
       {
        seen===false? <h1 className='newLogo'>New</h1>:''
       }

      </div>
      <div className="video">
        {
          data?.type === 'image' ? (<img src={data?.url} className='vid' alt="" />) :
            (
              <>
                {
                  data?.type === 'text' ? ("") : (<video src={data?.url} className='vid' controls></video>)
                }
              </>
            )
        }
      </div>
      <div className="details">
        {
          data?.caption.length > 90 ? (<p>{data?.caption.slice(0, 90)}  <span>Read More...</span>  </p>) : (<p>{data?.caption}</p>)
        }
      </div>
      <div className="footer">
        <div className="like" onClick={handelLike}>
          {
            islike ? (<FavoriteOutlinedIcon className='like' />) : (<FavoriteBorderOutlinedIcon className='icon' />)
          }

          <span>{data.like.length} Likes</span>
        </div>
        <div className="comment" onClick={showModal}>
          <ChatBubbleOutlineOutlinedIcon className='icon' />
          <span> {commentNum} Comments</span>
        </div>
      </div>
      <Modal width={700} title="Comments" open={isModalOpen} onCancel={handleCancel} footer={[]}>
        <Comments postId={data.id} mainId={data.mainId} />
      </Modal>
    </div>
  )
}

export default PostCard