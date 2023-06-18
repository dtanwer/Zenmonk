import {useEffect,useState} from 'react'
import Navbar from '../../components/NavBar'
import CartCard from '../../components/CartCart';
import './index.css'
function Cart({isChange}) {
  const [myCart,setMyCart] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('cart')) {

        let data = JSON.parse(localStorage.getItem('cart'));
        setMyCart([...data]);
    }
   
}, [isChange])
  return (
    <div>
        <Navbar/>
        <div className='heading'><h1>My Carts</h1></div>
        <div className='cart'>
        {
          myCart.map((item,i)=>{
            return(
              <CartCard  item={item}/>
            )
          })
        }
        </div>

    </div>
  )
}

export default Cart
