import './App.css';
import { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import AddProducts from './pages/AddProducts';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  const [isChange, setIsChange] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/home' element={<Home isChange={isChange} setIsChange={setIsChange}/>}/>
        <Route path='/add' element={<AddProducts isChange={isChange} setIsChange={setIsChange} />}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
