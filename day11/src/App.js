import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Protected from './components/Protected';
import { SignUp } from './pages/signUp';
import Chats from './components/chats';
import Chat from './pages/Chat';

function App() {
const publicRouter=[
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/signUp',
    element:<SignUp/>
  },
]
const privateRouter=[
  {
    path:'/home',
    element:<Home/>
  }
]

  return (
    <div>
    <Chat/>
      {/* <BrowserRouter>
      <Routes>
        {
          publicRouter?.map((item,index)=>{
            return(
              <Route path={item?.path} element={item?.element} key={index} />
            )
          })
        }
        {
          privateRouter?.map((item,index)=>{
            return(
              <Route path={item?.path} element={<Protected>{item?.element}</Protected>} key={index} />
            )
          })
        }
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
