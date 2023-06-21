import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './features/Users/user.type';
import { getUserPost } from './features/Posts/post.type';
import './App.css';
import { getPostComments } from './features/Comments/comments.type';
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.users);
  const post = useSelector((state) => state.posts.posts);
  const comments = useSelector((state) => state.comments.comments);

  useEffect(()=>{
    if(data.length===0)
    {
      dispatch(getUsers());
    }
  },[])

  // const handelClickGetUsers = () => {
  //   // dispatch(getUsers());
  //   // console.log(data);
  // }
  const handelClickViewPost = (id) => {
    dispatch(getUserPost(id));

  }

  const handelClickViewPostComments=(id)=>{
    dispatch(getPostComments(id))
   
  }
  return (
    <div className="App">
      <div className='box'>
        {/* {<button onClick={handelClickGetUsers} >Get Users</button>} */}
        {
          data?.map((item, i) => {
            return (
              <div key={item.id}  className='card'>  
              <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" alt="no img" />
              <h1>{item.name}</h1>
                <span>
                  <button onClick={() => handelClickViewPost(item.id)} className='button-37' >View Posts</button>
                </span>
              </div>
            )
          })
        }
      </div>
      <div className='postandComments'>
        <div className='post'>
          <h1>Posts</h1>
          <h4>{post?.title}</h4>
          <p>{post?.body}</p>
          <button onClick={() => handelClickViewPostComments(post.id)} >View Comments</button>
        </div>
        <div>
          {
            comments?.map((item)=>{
              return(
                <div key={item.id}>
                  <h1>{item.email}</h1>
                  <p>{item.body}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
