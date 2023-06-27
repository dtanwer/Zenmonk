import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Protected from './components/Protected';
import { SignUp } from './pages/signUp';
import Chat from './pages/Chat';
import { useState } from 'react';

function App() {
  const publicRouter = [
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/signUp',
      element: <SignUp />
    },
  ]
  const privateRouter = [
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/message',
      element: <Chat />
    },
  ]

 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {
            publicRouter?.map((item, index) => {
              return (
                <Route path={item?.path} element={item?.element} key={index} />
              )
            })
          }
          {
            privateRouter?.map((item, index) => {
              return (
                <Route path={item?.path} element={<Protected>{item?.element}</Protected>} key={index} />
              )
            })
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
