import './App.css';
import { useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/home';
import List from './components/list';
function App() {
  const [inputData,setInputData]=useState([]);
  const [deleteData,setDeleteData]=useState([]);
  const [completeData,setCompleteData]=useState([]);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home inputData={inputData} setInputData={setInputData} completeData={completeData} deleteData={deleteData} />}>
        <Route path='' element={<List  mode={0} inputData={inputData} setDeleteData={setDeleteData} setCompleteData={setCompleteData}  />} />
        <Route path='delete' element={<List  mode={-1}/>}/>
        <Route path='complete' element={<List  mode={1}/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
