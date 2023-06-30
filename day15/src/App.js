import './App.css';
import Auth from './pages/Auth';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
function App() {
  // const isLogin=useSelector(state=>state.auth.login)
  // console.log('islogin',isLogin)
  const isLogin=true;
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {
          isLogin?<Route path='/' element={<Home/>}/>:<Route path='/' element={<Auth/>}/>
        }
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
