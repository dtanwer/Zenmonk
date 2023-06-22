import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protected from './components/Protected';
import Login from './pages/Login';
import OTP from './pages/OTP';
import Home from './pages/home';
import InputForm from './pages/Form';

function App() {
  const publicRouting = [
    {
      path: '/',
      comp: <Login />
    },
    {
      path: '/otp',
      comp: <OTP />
    },
  ];
  const privateRouting = [
    {
      path: '/home',
      comp: <Home />
    },
    {
      path: '/form',
      comp: <InputForm />
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {
          publicRouting.map((item,i)=>{
            return(
              <Route key={i} path={item.path}  element={item.comp}   />
            )
          })
        }
        {
          privateRouting.map((item,i)=>{
            return(
              <Route key={i} path={item.path}  element={
              <Protected>
                {item.comp}
              </Protected>}/>
            )
          })
        }
      </Routes>
      </BrowserRouter>
      {/* <InputForm/> */}
    </div>
  );
}

export default App;
