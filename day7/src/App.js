
import { useState } from 'react';
import './App.css';
import Editer from './components/Editor';
import Home from './pages/Home';
import Loading from './components/Loading'
function App() {
  const [isLoading,setLoading]=useState(true);
  setTimeout(() => {
    setLoading(false)
  }, 1000);
  return (
    <div className="App">
        <Home/>
    </div>
  );
}

export default App;
