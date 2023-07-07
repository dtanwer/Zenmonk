import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [distance, setDistance] = useState();
  const [data, setData] = useState([]);
  const [item, setItem] = useState({});
  const handelSubmit = async (e) => {
    e.preventDefault();
    const dis = parseInt(distance)
    try {
      const res = await axios.post(`http://localhost:5000/${dis}`, {
        "type": "Point",
        "coordinates": [
          59.35,
          58.54
        ]
      })
      console.log(item.location, distance)
      console.log(res)
      setData(res.data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const getAllData = async () => {
      try {
        const res = await axios.get('http://localhost:5000')
        // console.log(res)
        setData(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    getAllData();
  })
  return (
    <div className="App">
      <form onSubmit={handelSubmit}>
        <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} />
        <button type="submit">find</button>
      </form>

      <div className="mp">
        {
          data.map((item) => {
            return (
              <div key={item?._id}>
                {item?.name} <button onClick={() => setItem(item)} >Near By</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
