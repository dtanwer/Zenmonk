import {useState} from 'react';
import './index.scss';
import Navbar from '../../components/navbar';
import Products from '../../components/products'

function Index() {
  const [isSearch,setIsSearch]=useState(false);
  const [searchValue,setSearchValue]=useState("");
  return (
    <div className="home">
      <Navbar setIsSearch={setIsSearch}  setSearchValue={setSearchValue}/>
      <Products searchValue={searchValue} isSearch={isSearch} />

    </div>
  )
}

export default Index