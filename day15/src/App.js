import './App.css';
import Auth from './pages/Auth';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Protected from './components/protected';
function App() {
  const isLogin=useSelector(state=>state.auth.login)
  // console.log('islogin',isLogin)
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {
          isLogin?<Route path='/' element={<Home/>}/>:<Route path='/' element={<Auth/>}/>
        }
        <Route path='/profile' element={ <Protected><Profile/></Protected>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
